# 🌿 HDC Fashion — "Phong Cách Tạo Thành Công"

> **Dự án:** Chiến lược Marketing, Bộ tài liệu Hoạch định & Nền tảng Website E-Commerce Thời Trang Bền Vững HDC Fashion / IHDC Fashion.  
> **Định vị thương hiệu:** Thời trang bền vững · Tôn vinh bản sắc văn hóa Việt Nam.

---

## 📌 Giới Thiệu Thương Hiệu (Brand Overview)

**HDC Fashion** (cùng nhánh học đường **IHDC Kids**) là thương hiệu thời trang Việt Nam tiên phong giải quyết 3 bài toán lớn của thời trang công sở hiện đại:
1. **Tiêu dùng bền vững (Conscious Consumption):** Sử dụng **100% sợi tự nhiên** sinh học (Sợi Sen Đồng Tháp, Tơ Chuối, Xơ Dừa Bến Tre, Sợi Bạc Hà, Sợi Tre Bamboo, Vải Modal). Kháng khuẩn tự nhiên, thoáng mát, siêu êm ái và **hoàn toàn không cần là ủi**.
2. **Công nghệ thời trang hiện đại (Fashion-Tech):** Áp dụng công nghệ **Seamless 4D** (dệt liền không đường may) tại tay, nẹp, vạt áo giúp loại bỏ vết hằn cọ xát, cùng dòng **Polo Anti-UV 50+** chuyên biệt cho doanh nhân và golfer.
3. **Bản sắc văn hóa Việt (Heritage Identity):** Khắc họa các biểu tượng di sản ngàn năm như **Trống Đồng Đông Sơn, Hang Xóm Trại Hòa Bình, Núi Đầu Rồng, Suối Nước Nóng Kim Bôi**.
4. **Giải pháp đồng phục B2B & Giáo dục (B2S):** Đối tác may đo đồng phục cho **Giải Golf kỷ niệm 30 năm Doanh nhân trẻ Việt Nam** và đối tác đồng phục học sinh chính thức của **Hệ thống Giáo dục Vinschool**.

---

## 🗂️ Cấu Trúc Dự Án (Project Structure)

Dự án được tổ chức theo chuẩn **Clean Code & Component-Based Modular Architecture**:

```
HDC-Fashion-Marketing-Brief/
│
├── 📄 README.md                             # Tài liệu tổng quan dự án
├── 📄 index.html                            # Điểm neo chính của Website (Semantic Mount Points)
├── 📄 server.ps1                            # Web server tĩnh siêu nhẹ bằng PowerShell (Port 8080)
├── 🖼️ j-p.vn.png                           # Ảnh chụp giao diện tham chiếu j-p.vn
│
├── 📂 docs/                                 # Hệ thống tài liệu chiến lược & đặc tả
│   ├── HDC_Fashion_Creative_Marketing_Brief.md       # Creative/Marketing Brief chi tiết v1.0
│   ├── HDC_Fashion_Creative_Marketing_Brief_v2.md    # Creative/Marketing Brief chi tiết v2.0
│   ├── HDC_Fashion_FAQ_va_Chuc_Nang.md              # 72 câu hỏi FAQ & 46 chức năng hệ thống
│   └── HDC_Fashion_Website_Specification.md          # Đặc tả kiến trúc website e-commerce
│
└── 📂 src/                                  # Mã nguồn Frontend ứng dụng Web
    ├── 📂 styles/
    │   └── main.css                         # Custom animations, design tokens, ticket vouchers
    ├── 📂 utils/
    │   ├── helpers.js                       # Tiện ích format tiền tệ, clipboard, toast
    │   ├── store.js                         # Reactive State Store (Giỏ hàng, Yêu thích, Voucher)
    │   └── router.js                        # Client-Side SPA Router điều hướng View
    ├── 📂 data/
    │   ├── products.js                      # Dữ liệu 12 sản phẩm thời trang xanh chủ lực
    │   ├── kidsProducts.js                  # Dữ liệu đồng phục học sinh IHDC Kids Vinschool
    │   ├── news.js                          # Dữ liệu bài viết Storytelling & Case study
    │   └── faqs.js                          # Ngân hàng câu hỏi FAQ 8 phân nhóm
    ├── 📂 components/
    │   ├── Header.js                        # Sticky Header, Tìm kiếm, Counter giỏ hàng
    │   ├── Footer.js                        # Bố cục 4 cột, Bộ Công Thương, Cổng thanh toán
    │   ├── ProductCard.js                   # Thẻ sản phẩm tái sử dụng
    │   ├── CartDrawer.js                    # Giỏ hàng trượt slide-in bên phải
    │   ├── QuickViewModal.js                # Modal xem nhanh, chọn size & màu sắc
    │   ├── B2BModal.js                      # Modal form báo giá đồng phục doanh nghiệp
    │   └── Chatbot.js                       # Trợ lý ảo AI tư vấn tự động
    └── 📂 views/
        ├── HomeView.js                      # Phân hệ Trang chủ E-commerce (phong cách j-p.vn)
        ├── ShopView.js                      # Phân hệ Cửa hàng & Bộ lọc đa năng (Facet Filters)
        ├── B2BView.js                       # Phân hệ B2B: Máy tính chiết khấu & Portfolio ngành
        ├── KidsView.js                      # Phân hệ IHDC Kids: Cổng đồng phục Vinschool
        ├── QuizView.js                      # Phân hệ Trợ lý AI đo size & gợi ý chất liệu
        ├── TrackingView.js                  # Phân hệ Tra cứu đơn hàng & Đổi trả 7 ngày
        ├── FaqView.js                       # Phân hệ Trung tâm FAQ 72 câu hỏi
        └── CheckoutView.js                  # Phân hệ Thanh toán, xuất hóa đơn VAT Doanh nghiệp
    └── app.js                               # Master Bootstrap Controller
```

---

## 🚀 Hướng Dẫn Chạy Website (How to Run)

Trang web được xây dựng thuần JavaScript & Tailwind CSS với mô hình không phụ thuộc môi trường build (No-build requirement):

### Cách 1: Chạy qua Local Web Server (Khuyên dùng)
Chạy script PowerShell có sẵn trong thư mục gốc:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Sau đó mở trình duyệt và truy cập: **[http://localhost:8080/](http://localhost:8080/)**

### Cách 2: Mở trực tiếp file HTML
Nhấp đúp chuột vào file **`index.html`** để mở trên bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Cốc Cốc). Toàn bộ hệ thống chạy mượt mà không bị lỗi CORS.

---

## 🌟 8 Phân Hệ Chức Năng Đã Hiện Thực Hóa (Features)

1. **Trang chủ E-Commerce:** Hero banner, Voucher giảm giá 50K/100K 1-click sao chép mã, Sản phẩm mới (Grid 5 cột), USP 4 trụ cột thương hiệu, Sản phẩm bán chạy (Grid 10 sản phẩm chuẩn j-p.vn), Tin tức storytelling.
2. **Cửa hàng & Bộ lọc Facet:** Lọc theo chất liệu (sen, chuối, bamboo, bạc hà, modal), lọc theo tính năng (không cần là ủi, seamless, anti-uv, văn hóa), lọc theo giá và sắp xếp.
3. **Cổng Doanh nghiệp B2B (Calculator):** Kéo thanh trượt chọn số lượng từ 20 đến 2.000+ bộ để tự động tính chiết khấu (-10% đến -35%), tính đơn giá và tổng ngân sách dự toán tức thì.
4. **Cổng Học đường IHDC Kids:** Xem bộ đồng phục hợp tác cùng Vinschool, lọc theo cấp học (Tiểu học, THCS, THPT) và bảng quy chuẩn size học sinh.
5. **Trợ lý Đo Size & Chất Liệu AI (Smart Advisor):** Nhập số đo và nhu cầu để nhận gợi ý size (khớp 98.5%) kèm loại vải phù hợp.
6. **Tra cứu Đơn hàng & Đổi trả:** Nhập mã đơn để xem tiến trình vận chuyển 4 chặng; gửi yêu cầu đổi size miễn phí tận nhà trong 7 ngày.
7. **Trung tâm FAQ Hub:** Thanh tìm kiếm trực tiếp ngân hàng 72 câu hỏi và câu trả lời tư vấn bán hàng.
8. **Thanh toán & Hóa đơn VAT:** Đặt hàng đa phương thức (COD, VNPAY, MoMo), tích chọn xuất hóa đơn điện tử VAT doanh nghiệp.

---

## 👨‍💻 Tác Giả & Bản Quyền

- **Tác giả:** [Ngọc Minh Kiên](https://github.com/ngocminhkien)
- **Email:** [nkien1231@gmail.com](mailto:nkien1231@gmail.com)
- **Thương hiệu:** HDC Fashion / IHDC Fashion
- **Bản quyền:** © 2026 HDC Fashion. Tất cả quyền được bảo lưu.
