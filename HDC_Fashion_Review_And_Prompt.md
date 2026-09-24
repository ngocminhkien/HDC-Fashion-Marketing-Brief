# 🧾 HDC Fashion — Bản Phân Tích Toàn Diện & Prompt Chỉnh Sửa

> **Dự án:** HDC Fashion / IHDC Fashion — Website E-Commerce Thời Trang Bền Vững  
> **Ngày review:** 24/09/2026  
> **Người review:** AI — Đóng vai trò: Khách hàng bỏ tiền + BA + DEV

---

# PHẦN 1 — GÓC NHÌN KHÁCH HÀNG (Người bỏ tiền — Chê thẳng thắn)

> *"Tôi đang cầm trong tay bản demo này. Tôi đã đọc brief, đọc catalogue đồng phục, rồi xem code. Đây là những gì tôi không hài lòng và yêu cầu chỉnh lại trước khi chấp nhận thanh toán."*

---

## 🔴 NHÓM 1 — HÌNH ẢNH SẢN PHẨM: KHÔNG CÓ GÌ CỦA HDC

**Vấn đề nghiêm trọng nhất:** Toàn bộ hình ảnh sản phẩm — từ Hero Banner, ProductCard, đến ShopView — đều dùng **ảnh stock Unsplash** của người nước ngoài mặc áo không liên quan gì đến HDC Fashion.

- Khách hàng vào web thấy ngay một người Tây mặc áo sơ mi trắng generic → Không cảm nhận được "Sợi Sen Đồng Tháp", "Tơ Chuối Bến Tre", "Họa tiết Trống Đồng".
- Brief nói: *"Khắc họa di sản ngàn năm"* — nhưng ảnh lại là anh Tây đi làm văn phòng ở New York.
- Product ID 5 và ID 10 (Polo Golf Anti-UV) dùng **cùng 1 URL ảnh** → Đây là lỗi kỹ thuật thô sơ không chấp nhận được.
- **Yêu cầu:** Thay toàn bộ bằng ảnh thật của HDC hoặc ít nhất ảnh có context Việt Nam, nếu không có ảnh thật thì phải thiết kế placeholder có logo HDC và chú thích "Hình ảnh thực tế sẽ cập nhật".

---

## 🔴 NHÓM 2 — DỮ LIỆU GIẢ CỨNG — KHÔNG THUYẾT PHỤC

- **Giỏ hàng mặc định:** Mở web lên, badge giỏ hàng hiện **"2"** và wishlist hiện **"1"** → Đây là dữ liệu giả cứng trong code, không phải dữ liệu thật của người dùng. Khách nhìn vào nghi ngờ ngay.
- **Form Checkout:** Tự điền sẵn "Nguyễn Văn A", "0912345678", "Số 88 Phố Huế" → Đây là demo bẩn, không thể để khách hàng thấy.
- **Kết quả đặt hàng:** Sau khi "đặt hàng" thì hiện `alert()` của trình duyệt — cách xử lý này là phong cách lập trình năm 2005, không phải website thương mại 2026.
- **Voucher không hoạt động thật:** Hai mã HDC50K và HDC100K được bày trên trang chủ nhưng **không có luồng nhập mã ở trang Checkout**.

---

## 🔴 NHÓM 3 — CHATBOT AI GIẢ — MISLEADING

- Tên trên nút là **"Trợ Lý Ảo AI (FAQ)"** nhưng bên trong là `if/else` đơn giản với 4 câu hỏi cứng.
- Nếu khách hỏi bất cứ thứ gì ngoài 4 câu đó, bot trả lời: *"Dạ em đã ghi nhận, chuyên viên sẽ hỗ trợ"* → Không có chuyên viên nào thật.
- Gọi đây là **"AI"** là quảng cáo gian dối. Gọi là "FAQ Bot" thì được.
- **Yêu cầu:** Bỏ chữ "AI" khỏi tên bot hoặc tích hợp thật sự với API LLM.

---

## 🟠 NHÓM 4 — BRIEF XỊN NHƯNG WEB CHƯA KỂ CÂU CHUYỆN

- Brief có đoạn rất hay: *"Từ mảnh đất phù sa này, một chiếc áo ra đời — mang theo hơi thở của đất, của người..."*
- Nhưng trang chủ chỉ có text ngắn và grid ảnh stock. **Không có storytelling nào** trên web.
- Không có section "Hành trình từ Bến Tre đến phòng họp" — không có brand story.
- Không có testimonial thật nào (review khách hàng = 0).
- Section "Tin tức" có 4 bài nhưng không click vào đâu được, không có trang bài viết riêng.

---

## 🟠 NHÓM 5 — TRANG B2B THIẾU SOCIAL PROOF QUYẾT ĐỊNH

- Brief nói rõ: *"Đối tác chính thức Vinschool"* và *"Giải Golf 30 năm DNT"* là RTB số 1.
- Trang B2B có đề cập nhưng chỉ là text trong hero, **không có:** ảnh chụp thật, logo đối tác, số liệu cụ thể, quote từ khách hàng DN.
- Calculator B2B: Slider kéo 20→2000 nhưng không có thêm input để nhập số tay → Kém UX.
- Không có phần "Tải catalogue" hay download file PDF đồng phục (trong khi project đang có file catalogue PDF 25MB!).

---

## 🟠 NHÓM 6 — NAVIGATION & UX ĐỨT GÃY

- Nút "SALE THÁNG 9 🔥" trên nav dẫn vào Shop với filter "sale" — nhưng chỉ lọc theo `oldPrice > price` → Tất cả 12 sản phẩm đều hiện vì sản phẩm nào cũng có oldPrice.
- Trên mobile, drawer menu hoạt động nhưng không có overlay close khi click bên ngoài.
- TrackingView: Tra cứu đơn hàng — nhập bất kỳ mã nào cũng trả về kết quả demo giả → Không trung thực.

---

## 🟡 NHÓM 7 — THIẾU CÁC ELEMENT THƯƠNG MẠI QUAN TRỌNG

- Không có **trang chi tiết sản phẩm** (Product Detail Page) — chỉ có QuickViewModal. Đây là thiếu sót lớn với SEO và trải nghiệm mua hàng.
- Không có **trang Về chúng tôi / Brand Story**.
- Không có **chính sách bảo mật, điều khoản sử dụng** — bắt buộc theo quy định TMĐT Việt Nam.
- Logo thương hiệu chỉ là chữ "HDC FASHION" bằng font — không có file logo vector/ảnh thật.
- Footer có icon Bộ Công Thương nhưng không có link/số đăng ký thật.

---

## 🟡 NHÓM 8 — KỸ THUẬT CẦN LÀM SẠCH

- `ProductCard.js` hardcode màu sắc cứng trong HTML thay vì render từ `product.colors` array.
- Product 11 có `material: "sen"` nhưng description lại nói "xơ dừa" → Data inconsistency.
- Product 5 và 10 cùng 1 URL ảnh → Lỗi thô sơ.
- Checkout dùng `alert()` thô — không có success page/modal thiết kế.
- Không có loading state — view chuyển tức thì, không có skeleton loader.

---

# PHẦN 2 — BRIEF CẢI TIẾN (Vai BA + DEV + Người mua)

## 📋 BRIEF V3 — ĐỐI SOÁT VỚI THỰC TẾ

| Hạng mục | Brief V2 nói | Web thực tế | Kết luận |
|---|---|---|---|
| Hình ảnh sản phẩm | Ảnh thật, storytelling | Ảnh stock Unsplash | ❌ Chưa đạt |
| Social Proof (Vinschool, DNT) | RTB số 1 | Chỉ có text, không có logo/ảnh | ❌ Chưa đạt |
| Chatbot AI | "Trợ lý AI tư vấn tự động" | If/else 4 câu cứng | ⚠️ Misleading |
| B2B Calculator | Kéo slider tính chiết khấu | Có, hoạt động tốt | ✅ Đạt |
| Voucher 1-click sao chép | Voucher nổi bật | Có nhưng thiếu luồng nhập ở Checkout | ⚠️ Chưa hoàn chỉnh |
| FAQ 72 câu hỏi | Trung tâm FAQ | Có | ✅ Đạt |
| Checkout VAT DN | Xuất hóa đơn điện tử | UI có nhưng alert() thô sơ | ⚠️ Cần nâng cấp |
| Trang chi tiết SP | Yếu tố mua hàng cơ bản | Không có — chỉ có QuickView Modal | ❌ Thiếu |
| Bộ lọc Facet | Lọc đa tầng | Có, hoạt động tốt | ✅ Đạt |
| Responsive mobile | Chuẩn mobile | Cơ bản, có thể cải thiện | ⚠️ Cần review |

---

## DANH SÁCH CHỨC NĂNG CẦN BỔ SUNG / SỬA

### 🔴 PRIORITY 1 — Bắt buộc sửa trước khi go-live

1. **Thay ảnh sản phẩm** — Tạo placeholder ảnh có brand identity HDC thay vì ảnh stock người nước ngoài.
2. **Sửa data giả cứng** — Cart badge = 0, wishlist = 0; xóa value pre-filled trong form Checkout; sửa TrackingView trả kết quả sai.
3. **Sửa luồng Checkout** — Thay `alert()` bằng success modal đẹp; bổ sung ô nhập voucher với logic validation.
4. **Đổi tên Chatbot** — "Trợ Lý Ảo AI" → "Tư Vấn & FAQ". Loại bỏ chữ AI.
5. **Sửa ProductCard màu sắc** — Render từ `product.colors` array thay vì hardcode 3 màu cứng.
6. **Fix product data inconsistency** — Sản phẩm ID 11: đổi material từ "sen" sang "xodua".
7. **Fix duplicate ảnh** — Product 5 và 10 dùng cùng URL ảnh, thay URL của 1 trong 2.

### 🟠 PRIORITY 2 — Cần có trước demo với khách hàng thật

8. **Trang Brand Story / Về HDC** — Tạo thêm 1 view "AboutView" với timeline, sứ mệnh, 6 loại sợi, logo đối tác.
9. **Bổ sung Logo đối tác** — Section riêng trên trang chủ và B2B: Logo Vinschool, Logo DNT, số liệu minh họa.
10. **Download Catalogue PDF** — Thêm button "Tải Catalogue Đồng Phục" trên trang B2B và KidsView.
11. **Trang chi tiết sản phẩm (PDP)** — Chuyển QuickViewModal thành full page ProductDetailView.
12. **Footer pháp lý** — Thêm: Chính sách bảo mật, Điều khoản sử dụng, Chính sách đổi trả 7 ngày.
13. **Sale Filter fix** — SALE chỉ hiện sản phẩm có discount ≥ 10%.

### 🟡 PRIORITY 3 — Cải thiện UX & Performance

14. **Loading skeleton** — Thêm skeleton loader khi chuyển view.
15. **Mobile UX** — Overlay đóng mobile drawer khi click bên ngoài.
16. **B2B Calculator UX** — Thêm input nhập số tay bên cạnh slider.
17. **Tìm kiếm nâng cao** — Tìm kiếm theo title, material, features, badge.
18. **Section Testimonial** — Thêm 3-5 review khách hàng placeholder trên trang chủ.
19. **Scroll animation** — Thêm fade-in khi scroll cho các section.

---

# PHẦN 3 — MASTER PROMPT CHO AGENT KHÁC THỰC HIỆN

> **Hướng dẫn dùng:** Copy toàn bộ phần dưới đây, dán vào cửa sổ chat với AI Agent. Agent sẽ đọc toàn bộ project và thực hiện theo thứ tự.

---

```
Bạn là một Frontend Developer kiêm UX Engineer cao cấp.
Nhiệm vụ của bạn là cải thiện website HDC Fashion tại thư mục:
C:\Users\Ngoc Minh Kien\Downloads\BIRT

Đây là một SPA (Single Page Application) thuần Vanilla JavaScript + Tailwind CSS + Font Awesome, không dùng framework.
Cấu trúc: index.html → src/utils/ → src/data/ → src/components/ → src/views/ → src/app.js

Trước khi làm bất cứ điều gì, hãy đọc toàn bộ các file sau để hiểu dự án:
- README.md (tổng quan)
- HDC_Fashion_Creative_Marketing_Brief_v2.md (brief marketing)
- src/data/products.js
- src/components/ProductCard.js
- src/views/HomeView.js
- src/views/ShopView.js
- src/views/B2BView.js
- src/views/CheckoutView.js
- src/components/Chatbot.js
- src/app.js

---

## DANH SÁCH NHIỆM VỤ (Thực hiện theo thứ tự)

### TASK 1: FIX DATA GIẢ CỨNG (CRITICAL)

File: src/components/Header.js
- Tìm dòng: `<span id="wishlistCountBadge"...>1</span>` → Đổi thành `>0</span>`
- Tìm dòng: `<span id="cartCountBadge"...>2</span>` → Đổi thành `>0</span>`

File: src/views/CheckoutView.js
- Xóa tất cả value="" pre-filled trong các input (name, phone, email, address)
- Thay chúng bằng placeholder="" phù hợp
- Thay hàm handleFinalCheckout(): Thay `alert(...)` bằng một success modal đẹp inline HTML
  (modal hiện mã đơn ngẫu nhiên, nút "Về trang chủ", icon check màu xanh lá)

File: src/views/TrackingView.js
- Tìm logic tra cứu đơn hàng, sửa: Nếu mã nhập vào không match bất kỳ đơn demo nào,
  hiển thị message: "Không tìm thấy đơn hàng với mã này. Vui lòng kiểm tra lại hoặc liên hệ hotline 1900 888 999"

---

### TASK 2: SỬA PRODUCT DATA (CRITICAL)

File: src/data/products.js
1. Sản phẩm ID 10 (Polo Doanh Nhân Trẻ Golf Edition): Đổi img URL thành:
   "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&auto=format&fit=crop&q=80"

2. Sản phẩm ID 11 (Sơ Mi Xơ Dừa): Đổi material từ "sen" thành "xodua".
   Bổ sung "xodua" vào danh sách filter trong ShopView.js:
   Thêm vào bộ lọc chất liệu: label "Xơ Dừa Bến Tre" với value="xodua"

3. Thêm field "stock" (số nguyên 1-50) và "rating" (4.2 đến 5.0) cho mỗi sản phẩm.

---

### TASK 3: SỬA PRODUCTCARD RENDER MÀU THẬT (HIGH)

File: src/components/ProductCard.js
- Sửa đoạn render colors để loop qua product.colors array:
  ```javascript
  ${(product.colors || []).map(c =>
    `<span class="w-3 h-3 rounded-full border border-gray-300 shadow-sm" style="background-color:${c}"></span>`
  ).join('')}
  ```
- Thêm hiển thị rating nếu có: `★ ${product.rating || '4.8'}` text nhỏ màu amber

---

### TASK 4: SỬA CHATBOT — BỎ CHỮ "AI" (HIGH)

File: src/components/Chatbot.js
- Đổi tên nút trigger: "Trợ Lý Ảo AI (FAQ)" → "Tư Vấn & FAQ"
- Đổi tiêu đề header chatbot: "HDC AI Virtual Assistant" → "Trợ Lý Tư Vấn HDC"
- Mở rộng logic ask() thêm các câu hỏi phổ biến:
  - q.includes('size') || q.includes('số đo') → tư vấn dùng tool Trợ Lý Đo Size
  - q.includes('ship') || q.includes('giao hàng') → miễn phí giao hàng toàn quốc
  - q.includes('đổi') || q.includes('trả') || q.includes('hoàn') → đổi size miễn phí 7 ngày
  - q.includes('giá') || q.includes('bao nhiêu') → sơ mi từ 489k-1.49tr, polo từ 489k
  - q.includes('polo') || q.includes('golf') → Polo Anti-UV 50+ dòng Golf
  - q.includes('thanh toán') || q.includes('cod') → hỗ trợ COD, VNPAY, MoMo, ZaloPay

---

### TASK 5: NÂNG CẤP CHECKOUT FLOW (HIGH)

File: src/views/CheckoutView.js
- Thêm section nhập mã voucher trước phần thanh toán:
  ```html
  <div class="pt-4 border-t space-y-2">
    <h3 class="font-bold text-sm text-gray-900 uppercase">Mã giảm giá</h3>
    <div class="flex gap-2">
      <input type="text" id="voucherInputCheckout"
             placeholder="Nhập mã voucher (VD: HDC50K)"
             class="flex-1 p-2.5 border rounded-lg text-xs focus:border-brand-green">
      <button onclick="HDC.Views.CheckoutView.applyVoucher()"
              class="bg-brand-green text-white px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-brand-greenDark">
        Áp dụng
      </button>
    </div>
    <p id="voucherMsg" class="text-xs text-gray-500 hidden"></p>
  </div>
  ```
- Thêm method applyVoucher() vào object CheckoutView:
  - Nếu "HDC50K" và subtotal >= 500000 → giảm 50.000đ
  - Nếu "HDC100K" và subtotal >= 1.000000 → giảm 100.000đ
  - Else → hiện lỗi "Mã không hợp lệ hoặc đơn hàng chưa đủ điều kiện"

---

### TASK 6: THÊM SECTION BRAND TRUST TRÊN TRANG CHỦ (MEDIUM)

File: src/views/HomeView.js
- Thêm section mới SAU section B2B & IHDC Kids Teaser, TRƯỚC section Tin tức:

```html
<!-- BRAND TRUST & SOCIAL PROOF -->
<section class="py-10 bg-white border-t border-gray-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="text-center mb-6">
      <h2 class="text-xl font-extrabold text-gray-900 uppercase font-heading">Đối Tác Tin Tưởng HDC</h2>
      <p class="text-xs text-gray-500 mt-1">Được tin chọn bởi các thương hiệu uy tín hàng đầu Việt Nam</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      <div class="p-5 border rounded-2xl bg-brand-grayBg">
        <div class="text-3xl font-extrabold text-brand-green">30+</div>
        <div class="text-xs font-bold text-gray-700 mt-1">Năm phong trào DNT</div>
        <div class="text-[11px] text-gray-500">Đối tác thiết kế đồng phục Giải Golf kỷ niệm</div>
      </div>
      <div class="p-5 border rounded-2xl bg-brand-grayBg">
        <div class="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center border shadow-sm">
          <span class="font-serif font-bold text-brand-green text-lg">V</span>
        </div>
        <div class="text-xs font-bold text-gray-700">Đối Tác Vinschool</div>
        <div class="text-[11px] text-gray-500">Đồng phục học sinh IHDC Kids chính thức</div>
      </div>
      <div class="p-5 border rounded-2xl bg-brand-grayBg">
        <div class="text-3xl font-extrabold text-brand-green">500+</div>
        <div class="text-xs font-bold text-gray-700 mt-1">Doanh nghiệp B2B</div>
        <div class="text-[11px] text-gray-500">Đặt hàng đồng phục mỗi năm trên toàn quốc</div>
      </div>
    </div>
  </div>
</section>
```

---

### TASK 7: THÊM LINK DOWNLOAD CATALOGUE PDF (MEDIUM)

File: src/views/B2BView.js
- Trong section B2B Hero Header (sau 2 button hiện tại), thêm:
  ```html
  <a href="./2023-12-28_Catalogue%20d%C3%B3ng%20ph%E1%BB%A5c_1.pdf"
     download
     class="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white underline mt-3 transition">
    <i class="fa-solid fa-file-pdf text-red-300"></i>
    Tải Catalogue Đồng Phục PDF (2024)
  </a>
  ```

File: src/views/KidsView.js
- Tương tự, thêm link download catalogue trong section hero của KidsView.

---

### TASK 8: FIX SALE FILTER (MEDIUM)

File: src/views/ShopView.js
- Sửa hàm filterSaleItems() — chỉ lấy sản phẩm có discount >= 10%:
  ```javascript
  filterSaleItems() {
    const saleList = HDC.Data.products.filter(p => {
      if (!p.oldPrice || p.oldPrice <= p.price) return false;
      const discountPct = ((p.oldPrice - p.price) / p.oldPrice) * 100;
      return discountPct >= 10;
    });
    this.renderCatalog(saleList);
  },
  ```

---

### TASK 9: CẢI THIỆN B2B CALCULATOR UX (LOW-MEDIUM)

File: src/views/B2BView.js
- Thêm input số tay bên cạnh label quantity (thay label số lượng hiện tại):
  ```html
  <div class="flex justify-between items-center text-xs font-bold text-gray-700 mb-2">
    <span>Số lượng áo dự kiến đặt may:</span>
    <input type="number" id="calcQuantityInput" min="20" max="5000" value="100"
      oninput="document.getElementById('b2bQuantityRange').value=this.value; HDC.Views.B2BView.calculateQuote()"
      class="w-24 border rounded px-2 py-1 text-sm font-extrabold text-brand-green text-center focus:border-brand-green">
  </div>
  ```
- Sửa calculateQuote() để sync ngược lại input khi kéo slider:
  ```javascript
  const inputEl = document.getElementById('calcQuantityInput');
  if (inputEl) inputEl.value = qty;
  ```

---

### TASK 10: THÊM SKELETON LOADER VÀ TRANSITION (LOW)

File: src/styles/main.css
- Thêm các class:
  ```css
  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s infinite;
  }
  @keyframes skeleton-loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  ```

---

## LƯU Ý QUAN TRỌNG CHO AGENT

1. **Không thay đổi kiến trúc tổng thể** — Giữ nguyên Vanilla JS + Tailwind CDN.
2. **Không xóa comment** trong code hiện tại.
3. **Test trước khi commit:** Mỗi file sửa xong, đảm bảo không có syntax error.
4. **Giữ màu sắc brand:** #1e4832 (green), #b89047 (gold), #d92d20 (red), #fbf9f5 (cream).
5. **Language:** Toàn bộ text hiển thị phải là Tiếng Việt.
6. **Mobile first:** Khi thêm HTML, luôn dùng responsive classes của Tailwind (sm:, md:, lg:).
7. **Thứ tự thực hiện:** Làm theo TASK 1 → 10, không skip task.

Sau khi hoàn thành tất cả tasks, chạy lại website bằng PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
Kiểm tra từng trang: Home, Shop, B2B, Kids, Checkout, Tracking, FAQ, Chatbot.
Báo cáo: Liệt kê tất cả file đã sửa, số dòng thay đổi, mô tả ngắn từng thay đổi.
```

---

## CHECKLIST KIỂM TRA SAU SỬA

| # | Kiểm tra | Kỳ vọng |
|---|---|---|
| 1 | Mở trang chủ lần đầu | Cart = 0, Wishlist = 0 |
| 2 | Thêm sản phẩm vào giỏ | Badge tăng lên đúng |
| 3 | Sao chép voucher HDC50K | Copy thành công, toast hiện |
| 4 | Vào Checkout, nhập voucher HDC50K với đơn > 500k | Giảm 50k, tổng tiền cập nhật |
| 5 | Đặt hàng thành công | Modal đẹp, không còn alert() |
| 6 | Tra cứu mã đơn không tồn tại | Thông báo lỗi rõ ràng |
| 7 | Mở Chatbot | Tên mới: "Tư Vấn & FAQ" |
| 8 | Hỏi chatbot "giao hàng bao lâu?" | Có câu trả lời phù hợp |
| 9 | Trang B2B, nhập số 500 vào input tay | Slider sync, chiết khấu cập nhật |
| 10 | Trang B2B, click "Tải Catalogue PDF" | File PDF mở/download |
| 11 | Trang Shop, filter SALE | Chỉ hiện SP có discount ≥ 10% |
| 12 | Product Card — màu sắc | Đúng màu của từng sản phẩm |
| 13 | Trang chủ, section đối tác | Hiện Vinschool + DNT + 500 DN |
| 14 | Sản phẩm ID 11 | material = "xodua" |
| 15 | Sản phẩm ID 5 và ID 10 | Khác ảnh nhau |

---

*Tài liệu được tổng hợp bởi Antigravity AI — 24/09/2026*  
*Dự án: HDC Fashion / IHDC Fashion — "Phong Cách Tạo Thành Công"*
