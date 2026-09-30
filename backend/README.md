# 🌿 HDC Fashion — Backend Architecture & API Service

Dịch vụ Backend API chuẩn sản xuất (Production-ready) phục vụ nền tảng thương mại điện tử thời trang sinh học bản địa và giải pháp đồng phục doanh nghiệp B2B HDC Fashion.

---

## 🛠️ Công Nghệ Chủ Đạo (Tech Stack)

- **Runtime:** Node.js 20+ LTS (ES Modules `import/export`)
- **Web Framework:** Express.js 4.x
- **Security:** Helmet.js, CORS Protection, Rate Limiting
- **Database:** PostgreSQL 16 (Relational Database)
- **Cache & Sessions:** Redis 7 (In-memory Cache)
- **Testing:** Node.js Native Test Runner (`node:test`, `node:assert/strict`) & Supertest
- **Containerization:** Docker (Multi-stage build trên nền Alpine Linux siêu nhẹ)
- **CI/CD:** GitHub Actions (Automated Lint, Test Matrix, Container Build & Cloud Deployment)

---

## 📂 Cấu Trúc Thư Mục (Layered Architecture)

```
backend/
├── src/
│   ├── config/
│   │   └── env.js             # Quản lý và validate biến môi trường tập trung
│   ├── middlewares/
│   │   └── errorHandler.js    # Bắt lỗi toàn cục, chuẩn hóa format JSON lỗi
│   ├── routes/
│   │   ├── index.js           # API v1 Master Router
│   │   ├── healthRoutes.js    # Endpoint kiểm tra sức khỏe hệ thống (/health)
│   │   ├── productRoutes.js   # API danh mục, lọc theo sợi bản địa & tìm kiếm
│   │   ├── b2bRoutes.js       # API tính dự toán chiết khấu đồng phục & gửi báo giá
│   │   └── orderRoutes.js     # API tạo đơn hàng, hóa đơn VAT & tra cứu vận chuyển
│   ├── app.js                 # Cấu hình Express, bảo mật, CORS, parser
│   └── server.js              # Khởi tạo HTTP server & Graceful Shutdown (SIGTERM/SIGINT)
│
├── tests/
│   ├── health.test.js         # Kiểm thử tự động Endpoint /health, /ping, 404
│   └── products.test.js       # Kiểm thử tự động API Products & B2B Estimate
│
├── .env.example               # Mẫu cấu hình môi trường chuẩn
├── .env.test                  # Cấu hình môi trường riêng biệt cho kiểm thử tự động
├── .dockerignore              # Danh sách loại trừ khi đóng gói container
├── Dockerfile                 # Đóng gói Multi-stage Docker an toàn với user phi root
└── package.json               # Quản lý dependencies và script thực thi
```

---

## 🚀 Hướng Dẫn Chạy & Phát Triển Cục Bộ (Getting Started)

### 1. Cài đặt Dependencies
```bash
cd backend
npm install
```

### 2. Thiết lập Biến Môi Trường
Sao chép file mẫu `.env.example` thành `.env`:
```bash
cp .env.example .env
```

### 3. Chạy Server ở Chế Độ Development (Auto-reload)
```bash
npm run dev
```
Server sẽ chạy tại: **http://localhost:5000**

### 4. Chạy Kiểm Thử Tự Động (Unit & Integration Tests)
```bash
npm test
```
Hoặc chạy chế độ CI chi tiết:
```bash
npm run test:ci
```

---

## 📡 Danh Sách API Endpoints (API Reference)

### 1. Health & Diagnostics
| Method | Endpoint | Mô Tả |
|---|---|---|
| `GET` | `/health` | Kiểm tra trạng thái server, uptime, memory, version |
| `GET` | `/health/ready` | Readiness probe kiểm tra kết nối DB và cache |
| `GET` | `/health/ping` | Phản hồi siêu nhanh `pong` |

### 2. Danh Mục Sản Phẩm (Products)
| Method | Endpoint | Query Params | Mô Tả |
|---|---|---|---|
| `GET` | `/api/v1/products` | `category`, `search`, `page`, `limit` | Lấy danh sách sản phẩm có phân trang và bộ lọc |
| `GET` | `/api/v1/products/:id` | — | Xem chi tiết 1 sản phẩm theo ID |

### 3. Giải Pháp Doanh Nghiệp (B2B)
| Method | Endpoint | Body | Mô Tả |
|---|---|---|---|
| `POST` | `/api/v1/b2b/estimate` | `{ quantity, fabric }` | Máy tính tính nhanh chiết khấu và tổng ngân sách dự toán |
| `POST` | `/api/v1/b2b/quote-request` | `{ companyName, contactName, phone, ... }` | Gửi yêu cầu tư vấn & báo giá đồng phục doanh nghiệp |

### 4. Đơn Hàng & Vận Chuyển (Orders)
| Method | Endpoint | Body / Params | Mô Tả |
|---|---|---|---|
| `POST` | `/api/v1/orders` | `{ customer, items, vatInvoice, ... }` | Đặt hàng e-commerce (hỗ trợ xuất hóa đơn VAT) |
| `GET` | `/api/v1/orders/track/:orderId` | — | Tra cứu tiến trình vận chuyển theo mã đơn |

---

## 🐳 Chạy Toàn Bộ Stack Bằng Docker Compose

Tại thư mục gốc dự án, chạy:
```bash
docker compose up -d
```
Lệnh này sẽ tự động khởi tạo:
1. **PostgreSQL 16** tại cổng `5432` (kèm dữ liệu lưu trữ bền vững `hdc_pgdata`).
2. **Redis 7** tại cổng `6379`.
3. **Backend API Service** tại cổng `5000`.
