# 🚀 Hướng Dẫn CI/CD & Kiến Trúc Backend — HDC Fashion

> **Dự án:** HDC Fashion E-Commerce & B2B Platform  
> **Tài liệu:** Thiết lập Quy trình Tích hợp & Triển khai liên tục (CI/CD) chuẩn bị cho phát triển Backend  
> **Cập nhật:** 30/09/2026  

---

## 📌 I. Tổng Quan Quy Trình CI/CD (Continuous Integration / Continuous Deployment)

Hệ thống CI/CD được xây dựng bằng **GitHub Actions**, vận hành theo tiêu chuẩn DevOps hiện đại với 3 luồng tự động hóa độc lập:

```
                  ┌───────────────────────────────────────────────────┐
                  │                 GITHUB REPOSITORY                 │
                  └─────────────────────────┬─────────────────────────┘
                                            │
               ┌────────────────────────────┴───────────────────────────┐
               ▼                                                        ▼
      [ PULL REQUEST / PUSH ]                                    [ PUSH TO MAIN ]
               │                                                        │
               ▼                                                        ▼
    ┌──────────────────────┐                                 ┌──────────────────────┐
    │     .github/ci.yml   │                                 │     .github/cd.yml   │
    ├──────────────────────┤                                 ├──────────────────────┤
    │ 1. Frontend Check:   │                                 │ 1. Docker Buildx:    │
    │    - JS Syntax check │                                 │    - Multi-stage     │
    │    - JSON validation │                                 │    - Tagging (SHA)   │
    │                      │                                 │                      │
    │ 2. Backend Test:     │                                 │ 2. Registry Publish: │
    │    - Node 20.x, 22.x │                                 │    - Push to GHCR    │
    │    - PostgreSQL 16   │                                 │      (GitHub Pkg)    │
    │    - Redis 7         │                                 │                      │
    │    - npm run lint    │                                 │ 3. Cloud Deployment: │
    │    - Unit/Integ Test │                                 │    - Webhook Trigger │
    │    - Security audit  │                                 │    - Railway / Render│
    │                      │                                 │    - Step Summary    │
    │ 3. Docker Build Test:│                                 └──────────────────────┘
    │    - Build test image│
    └──────────────────────┘
```

---

## ⚙️ II. Chi Tiết Các Workflow

### 1. `ci.yml` — Continuous Integration (Tự động kiểm thử & rà soát)
Kích hoạt tự động khi:
- Có commit mới được push lên các nhánh: `main`, `master`, `develop`.
- Có Pull Request gửi vào các nhánh trên.
- Hoặc kích hoạt thủ công qua giao diện (*workflow_dispatch*).

**Các Job thực thi:**
- **`frontend-check`:** Quét toàn bộ mã nguồn JavaScript frontend trong thư mục `src/` bằng `node -c`, kiểm tra cú pháp và tính toàn vẹn của các file JSON (`package.json`, `vercel.json`).
- **`backend-test`:**
  - Khởi tạo ma trận kiểm thử song song trên 2 phiên bản Node.js LTS (`Node 20.x` và `Node 22.x`).
  - Khởi tạo **PostgreSQL 16 Alpine** & **Redis 7 Alpine** thực tế bằng Service Containers trong runner GitHub Actions để các bài test tích hợp có thể chạy trên cơ sở dữ liệu thật.
  - Chạy `npm run lint` kiểm tra chuẩn mã.
  - Chạy `npm run test:ci` thực thi toàn bộ unit tests và integration tests.
  - Chạy `npm audit` quét các lỗ hổng bảo mật của thư viện phụ thuộc.
- **`docker-build`:** Kiểm tra Dockerfile có build thành công hay không để ngăn chặn việc hỏng container trước khi merge code.

---

### 2. `cd.yml` — Continuous Deployment (Triển khai tự động)
Kích hoạt tự động khi có code mới được merge hoặc push lên nhánh **`main`**.

**Các Job thực thi:**
- **`publish-container`:** Sử dụng Docker Buildx đóng gói ứng dụng Backend thành container image siêu nhẹ (Alpine) và push trực tiếp lên **GitHub Container Registry (GHCR)**: `ghcr.io/<owner>/hdc-fashion-backend:latest` kèm tag mã băm commit (`sha-xxxxxxx`).
- **`deploy-cloud`:** Kích hoạt Webhook hoặc CLI tự động triển khai tới các nền tảng đám mây (Railway, Render, VPS hoặc Kubernetes).
- **Tạo báo cáo tóm tắt:** Tự động ghi lại kết quả triển khai vào thẻ GitHub Action Summary.

---

### 3. `security-scan.yml` — CodeQL Static Security Analysis (SAST)
- Tự động quét lỗ hổng bảo mật cấp độ chuyên sâu (SQL Injection, Cross-Site Scripting, Insecure Deserialization, Path Traversal) theo chuẩn OWASP Top 10.
- Lên lịch quét định kỳ hàng tuần vào rạng sáng thứ Hai (03:00 UTC).

---

## 🔑 III. Cấu Hình Secrets Trên GitHub (Khi sẵn sàng Deploy thật)

Để luồng CD tự động trigger sang dịch vụ Hosting, bạn vào mục:  
`GitHub Repo > Settings > Secrets and variables > Actions > New repository secret`:

| Tên Secret | Bắt Buộc? | Mô Tả |
|---|---|---|
| `RENDER_DEPLOY_HOOK` | Tùy chọn | URL Deploy Hook từ Render.com để tự động trigger rebuild |
| `RAILWAY_TOKEN` | Tùy chọn | API Token của Railway.app để tự động triển khai backend |
| `DOCKERHUB_TOKEN` | Tùy chọn | Nếu muốn đẩy ảnh lên Docker Hub thay vì GHCR |
| `DATABASE_URL` | Tùy chọn | Chuỗi kết nối PostgreSQL trên Production (Railway/Supabase/Neon) |

---

## 🏗️ IV. Cấu Trúc Mã Nguồn Backend Chuẩn Bị Sẵn (`backend/`)

Toàn bộ khung nền tảng Backend đã được khởi tạo theo mô hình phân tầng chuẩn (*Layered Architecture*):

```
backend/
├── src/
│   ├── config/env.js            # Quản lý cấu hình & biến môi trường
│   ├── middlewares/errorHandler.js # Bắt lỗi toàn cục chuẩn RESTful
│   ├── routes/
│   │   ├── index.js             # API v1 Router
│   │   ├── healthRoutes.js      # /health, /health/ready, /health/ping
│   │   ├── productRoutes.js     # /api/v1/products (Lọc theo sợi, tìm kiếm)
│   │   ├── b2bRoutes.js         # /api/v1/b2b (Tính dự toán, gửi yêu cầu báo giá)
│   │   └── orderRoutes.js       # /api/v1/orders (Tạo đơn, xuất hóa đơn VAT, tra cứu)
│   ├── app.js                   # Cấu hình Express, Helmet, CORS
│   └── server.js                # HTTP Server với Graceful Shutdown
│
├── tests/                       # Bộ kiểm thử tự động không phụ thuộc thư viện nặng
│   ├── health.test.js
│   └── products.test.js
│
├── .env.example                 # Mẫu biến môi trường
├── Dockerfile                   # Docker đa tầng cho Production
└── package.json                 # Quản lý scripts: dev, start, test, lint
```

---

## 💻 V. Lệnh Thao Tác Nhanh (Cheatsheet)

### 1. Tại thư mục gốc:
```bash
# Kiểm tra lint toàn bộ frontend & backend test
npm test

# Khởi động PostgreSQL, Redis & Backend bằng Docker Compose
docker compose up -d

# Xem log các container
docker compose logs -f

# Dừng toàn bộ stack
docker compose down
```

### 2. Tại thư mục `backend/`:
```bash
cd backend

# Cài đặt thư viện
npm install

# Chạy backend chế độ phát triển (tự reload khi sửa code)
npm run dev

# Chạy toàn bộ bài test tự động
npm test

# Chạy test chế độ CI
npm run test:ci

# Kiểm tra cú pháp mã nguồn
npm run lint
```
