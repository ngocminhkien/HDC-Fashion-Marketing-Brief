# HDC FASHION — ĐẶC TẢ WEBSITE E-COMMERCE

> **Tham chiếu giao diện:** [j-p.vn](https://j-p.vn) (J-P Fashion)  
> **Thương hiệu:** HDC Fashion / IHDC Fashion  
> **Tagline:** *"Phong cách tạo thành công"*  
> **Ngày tạo:** 24/09/2026

---

## I. PHÂN TÍCH GIAO DIỆN MẪU (j-p.vn) → ÁP DỤNG CHO HDC

Dựa trên ảnh mẫu `j-p.vn.png`, trang web J-P Fashion có các thành phần chính sau. Tôi sẽ mapping từng phần sang nội dung HDC Fashion:

### 1.1. Bảng đối chiếu thành phần

| # | Thành phần trên j-p.vn | Áp dụng cho HDC Fashion | Ghi chú |
|---|---|---|---|
| 1 | **Header:** Logo + Menu (Trang chủ, Sản phẩm ▼, Quà tặng Voucher, Sale, Bộ sưu tập ▼, Hệ thống cửa hàng) + Icon (Search, Account, Wishlist, Cart) | **Header:** Logo HDC + Menu (Trang chủ, Sản phẩm ▼, Đồng phục ▼, Bộ sưu tập ▼, Về chúng tôi, Liên hệ) + Icon (Search, Account, Wishlist, Cart) | Thêm menu **Đồng phục** cho B2B/B2S |
| 2 | **Hero Banner:** Slider hình ảnh lớn + Deal/Voucher overlay | **Hero Banner:** Slider 3-5 ảnh: (1) Sơ mi chất liệu xanh, (2) BST Họa tiết Văn hóa, (3) Đồng phục DN, (4) IHDC Kids | Overlay: Thông điệp "Khoác lên phong cách Việt" |
| 3 | **Mã khuyến mãi:** 2 ô voucher (Giảm 50K / Giảm 100K) + nút "Sao chép" | **Mã khuyến mãi:** 2-3 ô voucher + nút "Sao chép". VD: "HDCFIRST" giảm 100K cho đơn đầu tiên, "HDCSET" giảm 15% khi mua combo | Tương tự layout j-p.vn |
| 4 | **Sản phẩm mới:** Grid 5 sản phẩm + carousel dots + "Xem thêm" | **Sản phẩm mới:** Grid 5 sản phẩm + carousel + "Xem thêm". Ưu tiên hiển thị dòng mới nhất | Top trending tuần này |
| 5 | **Sản phẩm bán chạy:** Badge "BEST SELLER" + Grid 10 sản phẩm (2 hàng × 5 cột) + "Xem thêm" | **Sản phẩm bán chạy:** Badge "BEST SELLER" + Grid 10 sản phẩm. Hiển thị tag giảm giá (VD: -30%), màu sắc swatch, wishlist heart | Tương tự layout j-p.vn |
| 6 | **Tin tức mới:** Grid 4 bài viết (Ảnh + Tiêu đề + Ngày + Mô tả ngắn) | **Tin tức / Blog:** Grid 4 bài: Câu chuyện chất liệu xanh, Ý nghĩa họa tiết văn hóa, Tips phối đồ, Case study B2B | Content marketing |
| 7 | **Footer:** 4 cột (Giới thiệu, Liên kết chính sách, Fanpage, Đăng ký email) + Logo "Đã thông báo Bộ Công Thương" + Thanh toán icons | **Footer:** 4 cột tương tự + thêm mục B2B/IHDC Kids + Chứng nhận bền vững | Giữ cấu trúc j-p.vn |
| 8 | **Product Card:** Ảnh + Tên + Mã SP + Giá (gạch giá cũ) + Color swatch + Wishlist icon | **Product Card:** Ảnh + Tên + Tag (Chất liệu xanh/Seamless/Văn hóa) + Giá + Color swatch + Wishlist + Badge "Không cần là ủi" | Thêm badge USP |
| 9 | **Navigation Bar** dạng sticky | **Sticky Header** + thanh thông báo trên cùng (Free ship toàn quốc) | Tối ưu UX |
| 10 | **Search & Filter** | **Search thông minh:** Tìm theo tên, chất liệu, họa tiết, dòng sản phẩm | AI-powered search |
| 11 | **Social icons** (Tiktok, Twitter, Instagram, Facebook) | **Social:** Facebook, Instagram, TikTok, Zalo, LinkedIn (cho B2B) | Thêm Zalo + LinkedIn |
| 12 | **Payment icons** (Visa, PayPal, MasterCard, JCB, etc.) | **Payment:** VNPAY, MoMo, ZaloPay, Visa, MasterCard, COD | Phương thức VN |

---

## II. SITEMAP — CẤU TRÚC TRANG WEB

```
hdcfashion.vn
│
├── 🏠 TRANG CHỦ (Homepage)
│
├── 👔 SẢN PHẨM (Products)
│   ├── Sơ mi Chất liệu Xanh
│   │   ├── Sợi Sen
│   │   ├── Tơ Chuối
│   │   ├── Xơ Dừa
│   │   ├── Sợi Bạc Hà
│   │   ├── Bamboo
│   │   └── Modal
│   ├── Sơ mi Seamless
│   ├── Sơ mi Họa tiết Văn hóa
│   │   ├── Trống Đồng Cổ
│   │   ├── Hang Xóm Trại
│   │   ├── Núi Đầu Rồng
│   │   └── Suối Nước Nóng Kim Bôi
│   ├── Polo Anti-UV
│   ├── Phụ kiện
│   │   ├── Cà vạt
│   │   ├── Ví da
│   │   └── Thắt lưng
│   └── Combo / Set quà tặng
│
├── 🏢 ĐỒNG PHỤC (Uniform Solutions)
│   ├── Đồng phục Doanh nghiệp (B2B)
│   │   ├── Portfolio / Catalogue
│   │   ├── Quy trình đặt hàng
│   │   ├── Form yêu cầu báo giá
│   │   └── Case Study (Giải Golf DNT...)
│   └── Đồng phục Học sinh — IHDC Kids (B2S)
│       ├── Giới thiệu IHDC Kids
│       ├── Catalogue mẫu
│       ├── Đối tác: Vinschool
│       └── Form liên hệ nhà trường
│
├── 📖 BỘ SƯU TẬP (Collections)
│   ├── BST Chất liệu Xanh
│   ├── BST Di sản Văn hóa
│   ├── BST Golf & Sport
│   └── BST Quà tặng Ngoại giao
│
├── 📰 TIN TỨC / BLOG (News)
│   ├── Câu chuyện Chất liệu
│   ├── Ý nghĩa Họa tiết
│   ├── Tips phối đồ
│   ├── Tin tức thương hiệu
│   └── Case Study khách hàng
│
├── 🏪 VỀ CHÚNG TÔI (About)
│   ├── Câu chuyện HDC Fashion
│   ├── Cam kết Bền vững
│   ├── Công nghệ Seamless
│   └── Đối tác & Chứng nhận
│
├── 📞 LIÊN HỆ (Contact)
│   ├── Hệ thống Showroom
│   ├── Hotline / Zalo / Email
│   └── Form liên hệ
│
├── 👤 TÀI KHOẢN (Account)
│   ├── Đăng nhập / Đăng ký
│   ├── Thông tin cá nhân
│   ├── Lịch sử đơn hàng
│   ├── Danh sách yêu thích
│   └── Địa chỉ giao hàng
│
├── 🛒 GIỎ HÀNG & THANH TOÁN
│   ├── Giỏ hàng
│   ├── Checkout
│   └── Xác nhận đơn
│
├── 📋 CHÍNH SÁCH
│   ├── Chính sách đổi trả
│   ├── Chính sách thanh toán
│   ├── Chính sách vận chuyển
│   ├── Chính sách bảo mật
│   └── Chính sách chiết khấu B2B
│
├── ❓ FAQ / HỎI ĐÁP
│
└── 🔍 TÌM KIẾM (Search Results)
```

---

## III. CHI TIẾT TỪNG SECTION TRANG CHỦ

> Mô phỏng cấu trúc trang chủ theo layout j-p.vn, nội dung HDC Fashion.

### 3.1. TOP BAR (Thanh thông báo trên cùng)

```
┌─────────────────────────────────────────────────────────────────┐
│  🚚 MIỄN PHÍ GIAO HÀNG TOÀN QUỐC  |  📞 Hotline: 0xxx.xxx.xxx  │
└─────────────────────────────────────────────────────────────────┘
```

**Nội dung:** Thay đổi luân phiên:
- "🚚 Miễn phí giao hàng toàn quốc — Không điều kiện"
- "🌿 100% chất liệu xanh — Sợi tự nhiên, kháng khuẩn, không cần là ủi"
- "🎁 Tư vấn & thiết kế đồng phục MIỄN PHÍ — Không giới hạn chỉnh sửa"

---

### 3.2. HEADER (Thanh điều hướng chính)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [LOGO HDC]   Trang chủ | Sản phẩm ▼ | Đồng phục ▼ | Bộ sưu tập ▼   │
│               Về chúng tôi | Liên hệ                                   │
│                                          🔍  👤  ♡  🛒(0)             │
└─────────────────────────────────────────────────────────────────────────┘
```

**Menu Sản phẩm (Mega Menu):**

| Cột 1: Sơ mi | Cột 2: Polo & Phụ kiện | Cột 3: Bộ sưu tập | Cột 4: Hình ảnh |
|---|---|---|---|
| Chất liệu Xanh | Polo Anti-UV | BST Di sản Văn hóa | [Ảnh hero sản phẩm] |
| Seamless | Cà vạt Văn hóa | BST Golf & Sport | |
| Họa tiết Văn hóa | Ví da | Combo Quà tặng | |
| Xem tất cả → | Thắt lưng | | |

**Menu Đồng phục (Mega Menu):**

| Cột 1: Doanh nghiệp (B2B) | Cột 2: Học sinh (IHDC Kids) | Cột 3: |
|---|---|---|
| Giới thiệu giải pháp | Giới thiệu IHDC Kids | [Ảnh: Giải Golf DNT] |
| Catalogue mẫu | Catalogue mẫu | [Ảnh: Vinschool] |
| Yêu cầu báo giá | Liên hệ hợp tác | |
| Case Study | Đối tác Vinschool | |

---

### 3.3. HERO BANNER (Slider chính)

**Slide 1 — Sơ mi Chất liệu Xanh (Hero):**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│   HDC FASHION                                                     │
│                                                                   │
│   "Khoác lên phong cách Việt                                     │
│    Tự tin tạo thành công"                                        │
│                                                                   │
│   Sơ mi Chất liệu Xanh                                          │
│   100% sợi tự nhiên • Kháng khuẩn • Không cần là ủi             │
│                                                                   │
│   [  KHÁM PHÁ NGAY  ]    [  XEM BỘ SƯU TẬP  ]                  │
│                                                                   │
│   ← Prev                                           Next →       │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```
- **Background:** Hình doanh nhân mặc sơ mi HDC trong bối cảnh văn phòng/cuộc họp
- **Tone:** Ánh sáng tự nhiên, tông xanh lá trầm + trắng

**Slide 2 — BST Họa tiết Văn hóa:**
- Headline: *"Di sản trên từng đường nét — Trống Đồng, Hang Xóm Trại, Núi Đầu Rồng"*
- CTA: "Khám phá câu chuyện" → Link đến trang BST Văn hóa

**Slide 3 — Đồng phục Doanh nghiệp:**
- Headline: *"Thiết kế MIỄN PHÍ • Sửa mẫu KHÔNG GIỚI HẠN • Ship TOÀN QUỐC"*
- Sub: "Đã phục vụ Giải Golf 30 năm DNT Việt Nam"
- CTA: "Yêu cầu báo giá miễn phí" → Link đến form B2B

**Slide 4 — IHDC Kids:**
- Headline: *"Để mỗi sáng đến trường là một niềm vui"*
- Sub: "Đối tác đồng phục chính thức của Hệ thống Vinschool"
- CTA: "Tìm hiểu IHDC Kids"

---

### 3.4. VOUCHER / KHUYẾN MÃI (Giống j-p.vn)

```
┌─────────────────────────────────────────────────────────────────┐
│                        Mã khuyến mãi                             │
│                                                                   │
│  ┌─────────────────────────┐  ┌──────────────────────────────┐   │
│  │ 🎫 Giảm 100K            │  │ 🎫 Giảm 15%                  │   │
│  │ Cho đơn hàng từ 500K    │  │ Khi mua Combo Set quà tặng   │   │
│  │ Mã: HDCFIRST            │  │ Mã: HDCSET                    │   │
│  │ HSD: 30 ngày            │  │ HSD: 30 ngày                  │   │
│  │ [Chi tiết] [📋Sao chép] │  │ [Chi tiết]  [📋Sao chép]     │   │
│  └─────────────────────────┘  └──────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

### 3.5. SẢN PHẨM MỚI (Giống j-p.vn)

```
┌─────────────────────────────────────────────────────────────────┐
│                        SẢN PHẨM MỚI                             │
│                     ——— 🌿 ———                                   │
│                  Top trending tuần này                            │
│                                                                   │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐              │
│  │ ♡    │  │ ♡    │  │ ♡    │  │ ♡    │  │ ♡    │              │
│  │[Ảnh] │  │[Ảnh] │  │[Ảnh] │  │[Ảnh] │  │[Ảnh] │              │
│  │      │  │      │  │      │  │      │  │      │              │
│  │Sơ mi │  │Sơ mi │  │Sơ mi │  │ Polo │  │Set   │              │
│  │Xanh  │  │Seam- │  │Văn   │  │Anti- │  │Quà   │              │
│  │Sen   │  │less  │  │hóa   │  │ UV   │  │tặng  │              │
│  │      │  │      │  │      │  │      │  │      │              │
│  │599K  │  │799K  │  │899K  │  │499K  │  │1.5M  │              │
│  │⚪⚫  │  │⚪🔵 │  │⚫    │  │⚪⚫🟢│  │      │              │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘              │
│                       ● ○ ○ ○                                    │
│                     Xem thêm →                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Product Card chi tiết:**

Mỗi card sản phẩm bao gồm:

| Thành phần | Mô tả | Ví dụ |
|---|---|---|
| **Ảnh sản phẩm** | Ảnh chính + hover hiện ảnh thứ 2 (người mặc) | Ảnh trắng nền + ảnh lifestyle |
| **Badge** | Tag đặc biệt nếu có | 🏷️ "Không cần là ủi" / 🔥 "-30%" / 🆕 "Mới" |
| **Wishlist icon** | ♡ → Click → ♥ (đỏ) | Góc phải trên |
| **Tên sản phẩm** | Tên + mã SP | "Sơ mi Sợi Sen HDC-SS001" |
| **Giá** | Giá bán (đỏ) + giá gốc (gạch ngang, xám) | **599.000₫** ~~799.000₫~~ |
| **Color swatch** | Các ô tròn nhỏ chọn màu | ⚪ ⚫ 🔵 |
| **Quick view** | Nút xem nhanh khi hover | 👁️ Xem nhanh |

---

### 3.6. SECTION ĐẶC BIỆT — USP BANNER (Riêng HDC, không có trên j-p.vn)

> [!IMPORTANT]
> Đây là section riêng cho HDC Fashion, chèn giữa "Sản phẩm mới" và "Sản phẩm bán chạy" để nhấn mạnh sự khác biệt.

```
┌─────────────────────────────────────────────────────────────────┐
│              TẠI SAO CHỌN HDC FASHION?                           │
│                                                                   │
│  🌿 100% Sợi         ✨ Công nghệ      🇻🇳 Họa tiết    🚚 Free Ship │
│     Tự nhiên            Seamless           Văn hóa       Toàn quốc│
│     Kháng khuẩn         Không đường        Trống đồng    Giao hàng│
│     Không cần           may, êm như        Hang Xóm      miễn phí │
│     là ủi               làn da             Trại...       mọi đơn  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

### 3.7. SẢN PHẨM BÁN CHẠY (Giống j-p.vn)

```
┌─────────────────────────────────────────────────────────────────┐
│                      SẢN PHẨM BÁN CHẠY                          │
│                       [ BEST SELLER ]                            │
│                                                                   │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐              │
│  │-30%  │  │ ♡    │  │ ♡    │  │ ♡    │  │ ♡    │  ← Hàng 1   │
│  │ ♡    │  │[Ảnh] │  │[Ảnh] │  │[Ảnh] │  │[Ảnh] │              │
│  │[Ảnh] │  │      │  │      │  │      │  │      │              │
│  │SP 1  │  │SP 2  │  │SP 3  │  │SP 4  │  │SP 5  │              │
│  │559K  │  │699K  │  │899K  │  │499K  │  │799K  │              │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘              │
│                                                                   │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐              │
│  │ ♡    │  │ ♡    │  │ ♡    │  │ ♡    │  │ ♡    │  ← Hàng 2   │
│  │[Ảnh] │  │[Ảnh] │  │[Ảnh] │  │[Ảnh] │  │[Ảnh] │              │
│  │SP 6  │  │SP 7  │  │SP 8  │  │SP 9  │  │SP 10 │              │
│  │659K  │  │999K  │  │599K  │  │1.2M  │  │449K  │              │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘              │
│                                                                   │
│                     Xem thêm →                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

### 3.8. SECTION ĐỒNG PHỤC (Riêng HDC)

> Section riêng giới thiệu 2 giải pháp đồng phục — không có trên j-p.vn.

```
┌─────────────────────────────────────────────────────────────────┐
│              GIẢI PHÁP ĐỒNG PHỤC HDC FASHION                    │
│                                                                   │
│  ┌──────────────────────────┐  ┌─────────────────────────────┐   │
│  │                          │  │                              │   │
│  │   [Ảnh: Đồng phục DN]   │  │   [Ảnh: IHDC Kids]          │   │
│  │                          │  │                              │   │
│  │   ĐỒNG PHỤC             │  │   IHDC KIDS                  │   │
│  │   DOANH NGHIỆP          │  │   ĐỒNG PHỤC HỌC SINH        │   │
│  │                          │  │                              │   │
│  │   ✓ Thiết kế miễn phí   │  │   ✓ Đối tác Vinschool       │   │
│  │   ✓ Sửa mẫu không hạn  │  │   ✓ Thiết kế hiện đại       │   │
│  │   ✓ Ship toàn quốc free │  │   ✓ Thoáng mát, co giãn     │   │
│  │                          │  │                              │   │
│  │   [ YÊU CẦU BÁO GIÁ ]  │  │   [ TÌM HIỂU THÊM ]        │   │
│  │                          │  │                              │   │
│  └──────────────────────────┘  └─────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

### 3.9. TIN TỨC MỚI (Giống j-p.vn)

```
┌─────────────────────────────────────────────────────────────────┐
│                        TIN TỨC MỚI                               │
│                                                                   │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌──────────┐           │
│  │ [Ảnh]   │  │ [Ảnh]   │  │ [Ảnh]   │  │ [Ảnh]    │           │
│  │         │  │         │  │         │  │          │           │
│  │ Từ      │  │ 5 sai   │  │ Câu     │  │ Đồng     │           │
│  │ ruộng   │  │ lầm     │  │ chuyện  │  │ phục thế │           │
│  │ sen     │  │ CEO     │  │ Trống   │  │ kỷ 21    │           │
│  │ đến     │  │ đặt đồng│  │ Đồng    │  │ cho học  │           │
│  │ phòng   │  │ phục    │  │ Đông    │  │ sinh     │           │
│  │ họp     │  │         │  │ Sơn     │  │          │           │
│  │ tầng 30 │  │         │  │         │  │          │           │
│  │         │  │         │  │         │  │          │           │
│  │16/09/26 │  │10/09/26 │  │05/09/26 │  │01/09/26  │           │
│  │Mô tả...│  │Mô tả...│  │Mô tả...│  │Mô tả... │           │
│  └─────────┘  └─────────┘  └─────────┘  └──────────┘           │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Nội dung 4 bài mẫu:**

| # | Tiêu đề | Mô tả ngắn | Nguồn từ Brief |
|---|---|---|---|
| 1 | *"Từ ruộng sen Đồng Tháp đến phòng họp tầng 30"* | Câu chuyện chuỗi cung ứng bền vững — hành trình sợi sen trở thành chiếc áo sơ mi | Content Angle 6.1 Hướng 2 |
| 2 | *"5 sai lầm CEO thường mắc khi đặt đồng phục"* | Bộ đồng phục 200K/cái có thể đang tốn gấp 3 lần | Content Angle 6.3 Hướng 2 |
| 3 | *"Câu chuyện Trống Đồng Đông Sơn trên áo sơ mi"* | 2.000 năm lịch sử, mỗi họa tiết kể một câu chuyện | Content Angle 6.2 Hướng 2 |
| 4 | *"Đồng phục thế kỷ 21 cho học sinh Việt Nam"* | Khi tự do cá nhân và chuẩn mực học đường không đối lập | Content Angle 6.4 Hướng 3 |

---

### 3.10. FOOTER (Giống j-p.vn)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  HDC Fashion        Liên kết          Fanpage       Đăng ký      │
│                                                                   │
│  HDC Fashion là     Chính sách        [FB widget]   Hãy là người │
│  thương hiệu thời  đổi trả                         đầu tiên     │
│  trang bền vững     Chính sách                      nhận khuyến  │
│  Việt Nam...        thanh toán        Social:       mãi!         │
│                     Chính sách        📘 🎵 📸 📌    [Email___]   │
│  📍 Địa chỉ...     bảo mật                         [ĐĂNG KÝ]   │
│  📞 0xxx.xxx.xxx   Chính sách                                    │
│  ✉ info@hdc...     vận chuyển                                    │
│                     Chính sách                                    │
│  [Logo Bộ CT]      chiết khấu B2B                                │
│  [Chứng nhận       FAQ                                            │
│   Bền vững]                                                       │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│  © 2026 HDC Fashion. "Phong cách tạo thành công"                │
│  VISA  MasterCard  VNPAY  MoMo  ZaloPay  COD                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## IV. TRANG SẢN PHẨM CHI TIẾT (Product Detail Page)

### 4.1. Layout trang chi tiết

```
┌─────────────────────────────────────────────────────────────────┐
│  Trang chủ > Sơ mi Chất liệu Xanh > Sơ mi Sợi Sen HDC-SS001  │
│  (Breadcrumb)                                                    │
│                                                                   │
│  ┌──────────────────┐  ┌─────────────────────────────────────┐  │
│  │                  │  │                                     │  │
│  │   [Ảnh chính     │  │  SƠ MI SỢI SEN HDC-SS001           │  │
│  │    sản phẩm]     │  │  ★★★★★ (28 đánh giá)               │  │
│  │                  │  │                                     │  │
│  │                  │  │  599.000₫  ̶7̶9̶9̶.̶0̶0̶0̶₫̶              │  │
│  │  [thumb] [thumb] │  │                                     │  │
│  │  [thumb] [thumb] │  │  🌿 Chất liệu: Sợi sen 100%       │  │
│  │                  │  │  ✨ Kháng khuẩn tự nhiên            │  │
│  │                  │  │  👕 Không cần là ủi                 │  │
│  │                  │  │  📦 Miễn phí giao toàn quốc        │  │
│  │                  │  │                                     │  │
│  │                  │  │  Màu: ⚪ ⚫ 🔵                     │  │
│  │                  │  │  Size: [S] [M] [L] [XL] [XXL]      │  │
│  │                  │  │  📏 Hướng dẫn chọn size            │  │
│  │                  │  │                                     │  │
│  │                  │  │  Số lượng: [- 1 +]                  │  │
│  │                  │  │                                     │  │
│  │                  │  │  [ 🛒 THÊM VÀO GIỎ ]              │  │
│  │                  │  │  [    MUA NGAY     ]                │  │
│  │                  │  │                                     │  │
│  └──────────────────┘  └─────────────────────────────────────┘  │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ Tab: [Mô tả] [Câu chuyện chất liệu] [Đánh giá] [FAQ]     │ │
│  │                                                             │ │
│  │ (Nội dung tab được hiển thị ở đây)                         │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  SẢN PHẨM LIÊN QUAN                                             │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                        │
│  │SP 1  │  │SP 2  │  │SP 3  │  │SP 4  │                        │
│  └──────┘  └──────┘  └──────┘  └──────┘                        │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2. Nội dung các Tab

**Tab "Mô tả":** Thông số kỹ thuật + Benefit (lấy từ Marketing Brief)

| Thông số | Chi tiết |
|---|---|
| Chất liệu | 100% sợi sen tự nhiên |
| Tính năng | Kháng khuẩn, thoáng khí, siêu mềm mượt, giữ màu tốt |
| Đặc biệt | Không cần là ủi — lấy ra khỏi máy giặt, treo lên là phẳng |
| Giặt | Giặt máy 30°C, không dùng tẩy chlorine |
| Sản xuất | 100% tại Việt Nam |

**Tab "Câu chuyện chất liệu":** (Riêng HDC)
- Kể câu chuyện từ ruộng sen → sợi → áo (Content Angle: "Từ ruộng sen Đồng Tháp...")
- Hình ảnh quy trình
- Video ngắn (nếu có)

**Tab "Đánh giá":**
- Rating tổng + Breakdown (5 sao / 4 sao / ...)
- Đánh giá có ảnh từ khách hàng
- Filter: Mới nhất / Có ảnh / 5 sao

**Tab "FAQ":** (Tự động lấy từ bộ FAQ)
- Q02: Áo có thực sự không cần là ủi không?
- Q03: Kháng khuẩn tự nhiên nghĩa là gì?
- Q04: Áo giặt máy được không?
- Q05: Áo có bền không?

---

## V. TRANG ĐỒNG PHỤC B2B (Landing Page)

### 5.1. Cấu trúc trang

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│  GIẢI PHÁP ĐỒNG PHỤC DOANH NGHIỆP                              │
│  "Đồng phục không chỉ để mặc — mà để kể câu chuyện             │
│   của doanh nghiệp bạn."                                        │
│                                                                   │
│  [ YÊU CẦU BÁO GIÁ MIỄN PHÍ ]                                  │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  TẠI SAO CHỌN HDC?                                               │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                        │
│  │ 💰   │  │ ✏️   │  │ 🚚   │  │ 👥   │                        │
│  │Thiết │  │Sửa   │  │Free  │  │Mọi   │                        │
│  │kế    │  │mẫu   │  │ship  │  │form  │                        │
│  │MIỄN  │  │KHÔNG  │  │TOÀN  │  │dáng  │                        │
│  │PHÍ   │  │GIỚI  │  │QUỐC  │  │phù   │                        │
│  │      │  │HẠN   │  │      │  │hợp   │                        │
│  └──────┘  └──────┘  └──────┘  └──────┘                        │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  PORTFOLIO / CATALOGUE                                            │
│  [Gallery: Mẫu theo ngành nghề]                                 │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  CASE STUDY                                                       │
│  [Giải Golf 30 năm DNT Việt Nam — Ảnh + Testimonial]           │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  QUY TRÌNH ĐẶT HÀNG                                             │
│  Step 1: Liên hệ → Step 2: Tư vấn → Step 3: Thiết kế →         │
│  Step 4: Duyệt mẫu → Step 5: Sản xuất → Step 6: Giao hàng     │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  FORM YÊU CẦU BÁO GIÁ                                           │
│  Tên công ty: [_____________]                                    │
│  Người liên hệ: [___________]                                   │
│  SĐT: [_____]  Email: [_____]                                   │
│  Ngành nghề: [Dropdown ▼]                                        │
│  Số lượng: [___]                                                 │
│  Yêu cầu: [Textarea________________]                            │
│  [ GỬI YÊU CẦU — MIỄN PHÍ ]                                    │
│                                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  FAQ B2B (Lấy từ bộ FAQ Q37-Q50)                                │
│  Accordion: Q37, Q38, Q39, Q40, Q41, Q44...                    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## VI. DANH MỤC SẢN PHẨM CHO WEBSITE

### 6.1. Phân loại danh mục (Categories)

| Level 1 | Level 2 | Level 3 (Filter) | Số SKU dự kiến |
|---|---|---|---|
| **Sơ mi** | Chất liệu Xanh | Sợi Sen / Tơ Chuối / Xơ Dừa / Bạc Hà / Bamboo / Modal | 30-40 |
| | Seamless | Co giãn 4 chiều / Siêu nhẹ | 15-20 |
| | Họa tiết Văn hóa | Trống Đồng / Hang Xóm Trại / Núi Đầu Rồng / Kim Bôi | 15-20 |
| **Polo** | Anti-UV | Polo thể thao / Polo công sở | 10-15 |
| **Phụ kiện** | Cà vạt / Ví / Thắt lưng | Đồng bộ họa tiết / Classic | 15-20 |
| **Combo** | Set quà tặng | Set Ngoại giao / Set Công sở / Set Golf | 5-8 |
| **Đồng phục B2B** | Trang catalogue | Không mua online — Form liên hệ | — |
| **IHDC Kids** | Trang giới thiệu | Không mua online — Qua nhà trường | — |

### 6.2. Filter & Sort

| Filter | Tùy chọn |
|---|---|
| **Dòng sản phẩm** | Chất liệu Xanh / Seamless / Họa tiết Văn hóa / Polo / Phụ kiện |
| **Chất liệu** | Sợi Sen / Tơ Chuối / Xơ Dừa / Bạc Hà / Bamboo / Modal |
| **Họa tiết** | Trống Đồng / Hang Xóm Trại / Núi Đầu Rồng / Kim Bôi / Trơn |
| **Giá** | Dưới 500K / 500K-1M / 1M-2M / Trên 2M |
| **Size** | XS / S / M / L / XL / XXL / 3XL / 4XL |
| **Màu sắc** | Swatch trực quan |
| **Tính năng** | Kháng khuẩn / Không cần là ủi / Anti-UV / Co giãn 4 chiều |
| **Sort** | Mới nhất / Bán chạy / Giá tăng / Giá giảm / Đánh giá cao |

---

## VII. CHỨC NĂNG E-COMMERCE

### 7.1. Giỏ hàng & Checkout

| Chức năng | Mô tả | Mapping FAQ |
|---|---|---|
| Giỏ hàng | Thêm/sửa/xóa sản phẩm, chọn size/màu, cập nhật số lượng | Q28 |
| Mini Cart | Popup giỏ hàng khi hover icon cart trên header | — |
| Mã giảm giá | Nhập mã voucher, tự động tính giá | Q23 |
| Checkout | Nhập thông tin giao hàng, chọn phương thức thanh toán | Q25, Q28 |
| Thanh toán | COD, Chuyển khoản, MoMo, ZaloPay, VNPay, Visa/MC | Q25 |
| Xuất hóa đơn VAT | Checkbox + form thông tin xuất hóa đơn | Q26 |
| Xác nhận đơn | Email/SMS xác nhận + Mã đơn hàng | Q30 |
| Free ship | Tự động áp dụng, hiển thị "Miễn phí giao hàng" | Q29 |

### 7.2. Tài khoản khách hàng

| Chức năng | Mô tả |
|---|---|
| Đăng ký / Đăng nhập | Email, SĐT, Facebook, Google, Zalo |
| Thông tin cá nhân | Tên, SĐT, email, ngày sinh |
| Sổ địa chỉ | Lưu nhiều địa chỉ giao hàng |
| Lịch sử đơn hàng | Xem trạng thái, chi tiết, đặt lại |
| Danh sách yêu thích | Lưu sản phẩm ♡ |
| Bảng size của tôi | Lưu size đã mua/fit tốt |
| Tích điểm | Xem điểm tích lũy, đổi ưu đãi |

### 7.3. Theo dõi đơn hàng

| Trạng thái | Mô tả |
|---|---|
| 📋 Đang xử lý | Đơn hàng đã nhận, đang chuẩn bị |
| 📦 Đang đóng gói | Sản phẩm đang được đóng gói |
| 🚚 Đang giao | Đã giao cho đơn vị vận chuyển — có mã tracking |
| ✅ Đã giao | Giao thành công |
| 🔄 Đổi/Trả | Đang xử lý yêu cầu đổi trả |

---

## VIII. THIẾT KẾ GIAO DIỆN (UI/UX)

### 8.1. Bảng màu thương hiệu

| Vai trò | Màu | Hex | Sử dụng |
|---|---|---|---|
| **Primary** | Xanh lá trầm (Forest Green) | `#2D5A3D` | Logo, CTA chính, header, tiêu đề |
| **Secondary** | Nâu gỗ (Warm Brown) | `#8B6914` | Accent, badge, họa tiết văn hóa |
| **Accent** | Đỏ son (Heritage Red) | `#C0392B` | Giá sale, badge khuyến mãi, CTA phụ |
| **Background** | Trắng kem (Cream White) | `#FDFAF6` | Nền chính, tạo cảm giác ấm áp |
| **Text** | Đen than (Charcoal) | `#2C3E50` | Body text |
| **Text Secondary** | Xám (Warm Gray) | `#7F8C8D` | Mô tả phụ, placeholder |
| **Success** | Xanh lá nhạt | `#27AE60` | Thông báo thành công, badge "Bền vững" |

> **Lý do chọn bảng màu:** Xanh lá trầm phản ánh giá trị **bền vững**, nâu gỗ tạo liên tưởng **tự nhiên/văn hóa**, đỏ son thể hiện **đẳng cấp truyền thống Việt**. Tông tổng thể: ấm, tin cậy, gần gũi thiên nhiên.

### 8.2. Typography

| Vai trò | Font | Size | Weight |
|---|---|---|---|
| **Logo** | Custom / Playfair Display | — | Bold |
| **Heading H1** | Montserrat | 32-40px | Bold (700) |
| **Heading H2** | Montserrat | 24-28px | SemiBold (600) |
| **Heading H3** | Montserrat | 18-22px | SemiBold (600) |
| **Body** | Inter / Open Sans | 14-16px | Regular (400) |
| **Price** | Montserrat | 16-18px | Bold (700) |
| **Caption** | Inter | 12-13px | Regular (400) |

### 8.3. Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| **Desktop XL** | ≥1440px | 5 cột product grid |
| **Desktop** | 1024-1439px | 4 cột product grid |
| **Tablet** | 768-1023px | 3 cột product grid |
| **Mobile L** | 480-767px | 2 cột product grid |
| **Mobile S** | <480px | 1-2 cột product grid |

---

## IX. TECH STACK ĐỀ XUẤT

| Layer | Công nghệ | Lý do |
|---|---|---|
| **Frontend** | Next.js 14+ (React) | SEO tốt (SSR/SSG), tốc độ cao, DX tốt |
| **CSS** | Tailwind CSS + Shadcn/UI | Rapid development, responsive, component-based |
| **Backend/CMS** | Strapi / Medusa.js / Shopify Headless | Quản lý sản phẩm, đơn hàng, content |
| **Database** | PostgreSQL | Đáng tin cậy, phù hợp e-commerce |
| **Hosting** | Vercel (FE) + Railway/AWS (BE) | Auto-scaling, CDN global |
| **Payment** | VNPay SDK + MoMo SDK + ZaloPay SDK | Phổ biến tại VN |
| **Search** | Algolia / Meilisearch | Tìm kiếm nhanh, filter thông minh |
| **Chatbot** | Tawk.to (miễn phí) hoặc Subiz | Live chat + chatbot FAQ |
| **Email** | Brevo (Sendinblue) | Email transactional + marketing |
| **Analytics** | Google Analytics 4 + Hotjar | Tracking + Heatmap |
| **CRM** | HubSpot Free / Zoho CRM | Quản lý lead B2B |
| **CDN/Image** | Cloudinary | Tối ưu ảnh sản phẩm |

---

## X. TÍCH HỢP BÊN THỨ 3

| Tích hợp | Mục đích | Ghi chú |
|---|---|---|
| **Facebook Pixel** | Retargeting quảng cáo | Tracking add-to-cart, purchase |
| **Google Tag Manager** | Quản lý tracking tags | GA4, FB Pixel, TikTok Pixel |
| **TikTok Pixel** | Quảng cáo TikTok | Phân khúc Gen Z |
| **Zalo OA** | Chăm sóc khách hàng | Thông báo đơn hàng |
| **Facebook Messenger** | Chat hỗ trợ | Plugin trên website |
| **Google Merchant Center** | Hiển thị sản phẩm trên Google Shopping | SEO shopping |
| **Schema.org** | Structured data | Product, Review, FAQ schema |

---

## XI. SEO & PERFORMANCE

### 11.1. Chiến lược SEO

| Trang | Title Tag | Meta Description | Keywords chính |
|---|---|---|---|
| Trang chủ | HDC Fashion — Phong cách tạo thành công \| Thời trang bền vững Việt Nam | Sơ mi chất liệu xanh 100% sợi tự nhiên, không cần là ủi, kháng khuẩn. Đồng phục doanh nghiệp, đồng phục học sinh IHDC Kids. Free ship toàn quốc. | sơ mi chất liệu xanh, thời trang bền vững, áo sơ mi không cần là ủi |
| Sơ mi Xanh | Sơ mi Chất liệu Xanh — 100% Sợi Tự Nhiên \| HDC Fashion | Sơ mi sợi sen, tơ chuối, bamboo — Kháng khuẩn tự nhiên, không cần là ủi, giữ màu 50+ lần giặt. Free ship toàn quốc. | sơ mi sợi sen, sơ mi bamboo, sơ mi kháng khuẩn |
| Đồng phục B2B | Đồng phục Doanh nghiệp — Thiết kế Miễn phí \| HDC Fashion | Tư vấn thiết kế miễn phí, sửa mẫu không giới hạn, giao hàng miễn phí toàn quốc. Đã phục vụ Giải Golf 30 năm DNT VN. | đồng phục doanh nghiệp, may đồng phục công ty |
| IHDC Kids | IHDC Kids — Đồng phục Học sinh Thế hệ Mới \| Đối tác Vinschool | Đồng phục học sinh thiết kế hiện đại, chất liệu thoáng mát. Đối tác chính thức Hệ thống Vinschool. | đồng phục học sinh, đồng phục trường học |

### 11.2. Core Web Vitals mục tiêu

| Metric | Mục tiêu | Cách đạt |
|---|---|---|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | Tối ưu Hero Image, lazy load, CDN |
| **FID** (First Input Delay) | ≤ 100ms | Code splitting, defer JS |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | Image dimensions, font preload |
| **TTFB** (Time to First Byte) | ≤ 800ms | SSR/SSG, caching |

---

## XII. CHECKLIST TRƯỚC KHI LAUNCH

| # | Hạng mục | Trạng thái |
|---|---|---|
| 1 | ☐ Responsive test trên mobile / tablet / desktop |  |
| 2 | ☐ Tốc độ load trang ≤ 3s (GTmetrix / PageSpeed) |  |
| 3 | ☐ SSL certificate (HTTPS) |  |
| 4 | ☐ Payment gateway test (VNPay, MoMo, ZaloPay, COD) |  |
| 5 | ☐ Email transactional hoạt động (xác nhận đơn, tracking) |  |
| 6 | ☐ Chatbot FAQ đã train đủ 72 câu hỏi |  |
| 7 | ☐ SEO: sitemap.xml, robots.txt, meta tags, schema |  |
| 8 | ☐ Google Analytics 4 + GTM đã cài |  |
| 9 | ☐ Facebook Pixel + TikTok Pixel đã cài |  |
| 10 | ☐ Form B2B hoạt động, email notification đến team sale |  |
| 11 | ☐ Bảng size thông minh đã test |  |
| 12 | ☐ Đổi trả online flow đã test |  |
| 13 | ☐ Content: ≥20 sản phẩm, ≥4 bài blog, FAQ đầy đủ |  |
| 14 | ☐ Legal: Chính sách ĐKDKKD, đăng ký Bộ Công Thương |  |
| 15 | ☐ Backup & Security: daily backup, firewall, anti-DDoS |  |

---

> [!TIP]
> **Gợi ý tiếp theo:** Sau khi duyệt tài liệu này, bước tiếp theo là tạo **wireframe/mockup trực quan** bằng Figma hoặc bắt đầu code trang chủ. Bạn muốn tiến hành bước nào trước?

---

*— Hết tài liệu đặc tả —*

**Prepared by:** Strategic Planning & Technology Division  
**Date:** 24/09/2026
