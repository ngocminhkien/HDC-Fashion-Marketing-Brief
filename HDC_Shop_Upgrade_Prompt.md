# 🛒 PROMPT: Nâng Cấp Trang Shop HDC Fashion — Theo Tâm Lý Người Mua & Chuẩn TMĐT

> **Dự án:** `C:\Users\Ngoc Minh Kien\Downloads\BIRT`  
> **File cần sửa chính:** `src/views/ShopView.js`, `src/components/ProductCard.js`  
> **Tham chiếu:** Shopee, Tiki, j-p.vn, Zara.com

---

## 🧠 PHÂN TÍCH TÂM LÝ NGƯỜI MUA (Đọc kỹ trước khi code)

Khi người dùng vào trang Shop, họ trải qua 5 giai đoạn tâm lý:

| Giai đoạn | Tâm lý | Web cần làm gì |
|---|---|---|
| **1. Định hướng** | "Có bao nhiêu sản phẩm? Mình tìm gì?" | Hiện danh mục nổi bật ngay đầu trang (tab/chips) |
| **2. Lọc & Thu hẹp** | "Chỉ muốn xem loại phù hợp với mình" | Bộ lọc rõ ràng, nhanh, không phức tạp |
| **3. So sánh** | "Cái nào tốt hơn? Cái nào đang hot?" | Badge rõ (Best Seller, Sale %, Còn ít), rating hiện |
| **4. Thuyết phục** | "Có đáng mua không? Rủi ro thấp không?" | Hiện social proof (đã bán X, review Y sao) |
| **5. Quyết định** | "Mua ngay thôi, dễ thêm vào giỏ" | CTA nổi bật trên card, không cần click nhiều bước |

**Vấn đề hiện tại của ShopView:**
- Không có phân cấp danh mục (tất cả sản phẩm đổ vào 1 grid)
- ProductCard quá tối giản — thiếu số lượng đã bán, thiếu badge sale %
- Sidebar filter ẩn trên mobile, không có filter dạng chip/tab nhanh
- Không có section "sản phẩm nổi bật" hay "đang giảm mạnh" phân tách
- Không có thanh progress "Còn X sản phẩm" tạo urgency

---

## NHIỆM VỤ CỤ THỂ

---

### TASK 1: THÊM CATEGORY TABS / CHIP FILTER NHANH (Quan trọng nhất)

**Mục tiêu:** Giúp người dùng định hướng ngay lập tức — giống Shopee/Tiki có tab danh mục đầu trang.

**File:** `src/views/ShopView.js`

Thêm section mới SAU breadcrumb, TRƯỚC bộ lọc sidebar. Đây là dãy chip buttons nằm ngang:

```html
<!-- CATEGORY QUICK FILTER CHIPS -->
<div class="flex gap-2 overflow-x-auto pb-2 pt-4 scrollbar-hide" id="categoryChips">
  <button onclick="HDC.Views.ShopView.filterByCategory('all')" 
          id="chip-all"
          class="category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-brand-green bg-brand-green text-white transition whitespace-nowrap shadow-sm">
    <i class="fa-solid fa-grid-2"></i> Tất Cả (12)
  </button>
  <button onclick="HDC.Views.ShopView.filterByCategory('xanh')" 
          id="chip-xanh"
          class="category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-gray-200 bg-white text-gray-700 hover:border-brand-green hover:text-brand-green transition whitespace-nowrap">
    <i class="fa-solid fa-leaf text-emerald-500"></i> Sợi Tự Nhiên (5)
  </button>
  <button onclick="HDC.Views.ShopView.filterByCategory('seamless')" 
          id="chip-seamless"
          class="category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-gray-200 bg-white text-gray-700 hover:border-brand-green hover:text-brand-green transition whitespace-nowrap">
    <i class="fa-solid fa-vest"></i> Seamless 4D (1)
  </button>
  <button onclick="HDC.Views.ShopView.filterByCategory('van-hoa')" 
          id="chip-van-hoa"
          class="category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-gray-200 bg-white text-gray-700 hover:border-brand-green hover:text-brand-green transition whitespace-nowrap">
    <i class="fa-solid fa-landmark text-amber-600"></i> Di Sản Văn Hóa (4)
  </button>
  <button onclick="HDC.Views.ShopView.filterByCategory('polo')" 
          id="chip-polo"
          class="category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-gray-200 bg-white text-gray-700 hover:border-brand-green hover:text-brand-green transition whitespace-nowrap">
    <i class="fa-solid fa-sun text-yellow-500"></i> Polo Anti-UV (2)
  </button>
  <button onclick="HDC.Views.ShopView.filterSaleItems()" 
          id="chip-sale"
          class="category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-brand-red bg-red-50 text-brand-red hover:bg-brand-red hover:text-white transition whitespace-nowrap">
    <i class="fa-solid fa-fire"></i> Đang Giảm Giá 🔥
  </button>
</div>
```

Thêm method `filterByCategory(cat)` vào object ShopView:
```javascript
filterByCategory(cat) {
  // Reset visual của tất cả chips
  document.querySelectorAll('.category-chip').forEach(btn => {
    btn.className = btn.className
      .replace('border-brand-green bg-brand-green text-white', 'border-gray-200 bg-white text-gray-700')
      .replace('bg-brand-red text-white', 'bg-red-50 text-brand-red');
  });
  // Highlight chip đang active
  const activeChip = document.getElementById('chip-' + cat);
  if (activeChip) {
    activeChip.className = activeChip.className
      .replace('border-gray-200 bg-white text-gray-700', 'border-brand-green bg-brand-green text-white');
  }

  if (cat === 'all') {
    this.renderCatalog(HDC.Data.products);
  } else {
    const filtered = HDC.Data.products.filter(p => p.category === cat);
    this.renderCatalog(filtered);
  }
},
```

---

### TASK 2: NÂNG CẤP PRODUCT CARD — THÊM SOCIAL PROOF & URGENCY

**Mục tiêu:** Card phải thuyết phục người mua trong 3 giây — như Shopee.

**File:** `src/components/ProductCard.js`

Thay toàn bộ method `render(product)` bằng version mới sau:

```javascript
render(product) {
  const isWish = HDC.Store.isWishlisted(product.id);
  const wishIconClass = isWish ? 'fa-solid fa-heart text-brand-red' : 'fa-regular fa-heart';
  const fallbackImg = "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80";

  // Tính % giảm giá
  const discountPct = product.oldPrice && product.oldPrice > product.price
    ? Math.round((product.oldPrice - product.price) / product.oldPrice * 100)
    : 0;

  // Urgency: hàng sắp hết
  const isLowStock = product.stock && product.stock <= 20;
  
  // Sold count ảo (social proof)
  const soldCount = product.sold || (product.id * 17 + 43);

  return `
    <div class="product-item group cursor-pointer bg-white rounded-2xl border border-gray-100 hover:border-brand-green/40 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
         onclick="HDC.Components.QuickViewModal.open(${product.id})">
      
      <!-- IMAGE AREA -->
      <div class="relative bg-gray-100 overflow-hidden aspect-[3/4]">
        
        <!-- Top-left: Discount badge hoặc USP badge -->
        ${discountPct >= 10
          ? `<span class="absolute top-2 left-2 z-10 bg-brand-red text-white text-[11px] font-extrabold px-2 py-0.5 rounded-md shadow">
               -${discountPct}%
             </span>`
          : `<span class="absolute top-2 left-2 z-10 bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow">
               ${product.badge || 'Mới'}
             </span>`
        }

        <!-- Top-right: Wishlist -->
        <button onclick="event.stopPropagation(); HDC.Store.toggleWishlist(${product.id})"
                class="absolute top-2 right-2 z-10 w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-brand-red transition shadow-sm">
          <i class="${wishIconClass} text-xs"></i>
        </button>

        <!-- Low Stock label -->
        ${isLowStock
          ? `<div class="absolute top-9 right-2 z-10 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
               Sắp hết
             </div>`
          : ''
        }

        <!-- Product image -->
        <img src="${product.img}" alt="${product.title}"
             onerror="this.onerror=null; this.src='${fallbackImg}';"
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">

        <!-- Hover overlay: Quick View -->
        <div class="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
          <span class="text-xs text-white font-semibold bg-brand-green/90 backdrop-blur-sm px-4 py-1.5 rounded-lg shadow flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <i class="fa-regular fa-eye text-[11px]"></i> Xem Nhanh
          </span>
        </div>
      </div>

      <!-- INFO AREA -->
      <div class="flex flex-col gap-1 p-3 flex-1">
        
        <!-- Tên sản phẩm -->
        <h3 class="text-xs sm:text-[13px] font-semibold text-gray-800 line-clamp-2 group-hover:text-brand-green transition-colors leading-snug min-h-[2.5em]">
          ${product.title}
        </h3>

        <!-- Rating + Sold count (Social Proof) -->
        <div class="flex items-center gap-2 text-[10px] text-gray-400">
          <span class="flex items-center gap-0.5 text-amber-500 font-bold">
            <i class="fa-solid fa-star text-[9px]"></i>
            ${product.rating || '4.8'}
          </span>
          <span class="text-gray-300">|</span>
          <span>Đã bán <strong class="text-gray-600">${soldCount}</strong></span>
        </div>

        <!-- Color swatches -->
        <div class="flex items-center gap-1 pt-0.5">
          ${(product.colors || []).slice(0, 4).map(c =>
            `<span class="w-3.5 h-3.5 rounded-full border border-gray-300 shadow-sm" style="background-color:${c}" title="${c}"></span>`
          ).join('')}
          ${product.colors && product.colors.length > 4 ? `<span class="text-[10px] text-gray-400">+${product.colors.length - 4}</span>` : ''}
        </div>

        <!-- Price row -->
        <div class="flex items-center justify-between mt-1 pt-1 border-t border-gray-50">
          <div class="flex items-baseline gap-1.5">
            <span class="text-sm sm:text-base font-extrabold text-brand-red">
              ${product.price.toLocaleString('vi-VN')}₫
            </span>
            ${product.oldPrice
              ? `<span class="text-[10px] text-gray-400 line-through">${product.oldPrice.toLocaleString('vi-VN')}₫</span>`
              : ''
            }
          </div>
          <!-- Quick Add to Cart button -->
          <button onclick="event.stopPropagation(); HDC.Store.addToCart(${product.id}, 'L', 1); HDC.Utils.showToast('Đã thêm vào giỏ!');"
                  class="w-7 h-7 rounded-full bg-brand-green hover:bg-brand-greenDark text-white flex items-center justify-center text-xs transition shadow-sm active:scale-90"
                  title="Thêm vào giỏ">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>

      </div>
    </div>
  `;
},
```

---

### TASK 3: CẢI THIỆN LAYOUT SHOP — THÊM BANNER ZONE & PHÂN KHU

**Mục tiêu:** Trang shop có cấu trúc phân cấp rõ, không chỉ là 1 grid đơn điệu.

**File:** `src/views/ShopView.js` — trong phần render, thêm sections mới vào TRƯỚC `<!-- 2-Column Layout -->`:

```html
<!-- PROMO BANNER ZONE (Giảm giá nổi bật) -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
  <!-- Banner 1: Ưu đãi hôm nay -->
  <div class="col-span-2 bg-gradient-to-r from-brand-greenDark to-brand-green rounded-2xl p-5 flex items-center justify-between text-white overflow-hidden relative">
    <div class="z-10">
      <span class="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full uppercase">Flash Sale</span>
      <h3 class="text-lg font-extrabold mt-1 font-heading">Giảm đến -30%</h3>
      <p class="text-xs text-emerald-200 mt-0.5">Sợi Bamboo & Tơ Chuối sinh học</p>
      <button onclick="HDC.Views.ShopView.filterByCategory('xanh')"
              class="mt-3 bg-white text-brand-green text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-brand-cream transition">
        Mua Ngay →
      </button>
    </div>
    <div class="absolute right-4 opacity-20 text-8xl font-serif font-bold">🌿</div>
  </div>
  <!-- Banner 2: Golf & Doanh nhân -->
  <div class="bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl p-5 text-white relative overflow-hidden">
    <span class="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full uppercase">Golf Edition</span>
    <h3 class="text-base font-extrabold mt-1 leading-tight">Polo Anti-UV<br/>DNT 30 Năm</h3>
    <button onclick="HDC.Views.ShopView.filterByCategory('polo')"
            class="mt-3 bg-white text-amber-700 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-amber-50 transition">
      Xem →
    </button>
    <div class="absolute right-2 bottom-2 text-5xl opacity-25">⛳</div>
  </div>
</div>
```

---

### TASK 4: NÂNG CẤP HEADER CỦA PRODUCT GRID — THÊM TOOLBAR

**Mục tiêu:** Toolbar phía trên grid hiển thị số sản phẩm, cho phép đổi chế độ xem.

**File:** `src/views/ShopView.js` — Thay phần `<!-- PRODUCT GRID -->` header:

```html
<!-- PRODUCT GRID TOOLBAR -->
<div class="flex items-center justify-between bg-white rounded-xl px-4 py-2.5 border border-gray-200 shadow-sm">
  <div class="flex items-center gap-3">
    <span id="shopProductCount" class="text-xs font-semibold text-gray-700">12 sản phẩm</span>
    <span class="text-gray-300 hidden sm:inline">|</span>
    <span class="hidden sm:flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
      <i class="fa-solid fa-truck-fast text-xs"></i> Free Ship toàn quốc
    </span>
  </div>
  <div class="flex items-center gap-2">
    <!-- Sort -->
    <select id="shopSortSelect" onchange="HDC.Views.ShopView.applyFilters()"
            class="text-[11px] border border-gray-200 rounded-lg px-2.5 py-1.5 bg-white focus:outline-none focus:border-brand-green font-medium">
      <option value="featured">Nổi bật</option>
      <option value="price-asc">Giá thấp → cao</option>
      <option value="price-desc">Giá cao → thấp</option>
      <option value="rating">Đánh giá cao nhất</option>
      <option value="name">A - Z</option>
    </select>
    <!-- View Mode Toggle: Grid 4 hoặc Grid 3 -->
    <div class="hidden sm:flex items-center gap-1 border rounded-lg overflow-hidden">
      <button onclick="HDC.Views.ShopView.setViewMode(4)" id="view4btn"
              class="px-2.5 py-1.5 bg-brand-green text-white text-xs transition" title="4 cột">
        <i class="fa-solid fa-grip text-[10px]"></i>
      </button>
      <button onclick="HDC.Views.ShopView.setViewMode(3)" id="view3btn"
              class="px-2.5 py-1.5 bg-white text-gray-500 text-xs transition" title="3 cột">
        <i class="fa-solid fa-table-columns text-[10px]"></i>
      </button>
    </div>
  </div>
</div>
```

Thêm method `setViewMode(cols)` vào ShopView:
```javascript
setViewMode(cols) {
  const grid = document.getElementById('shopCatalogGrid');
  const btn4 = document.getElementById('view4btn');
  const btn3 = document.getElementById('view3btn');
  if (!grid) return;
  if (cols === 3) {
    grid.className = 'grid grid-cols-2 sm:grid-cols-3 gap-4';
    btn3.className = btn3.className.replace('bg-white text-gray-500', 'bg-brand-green text-white');
    btn4.className = btn4.className.replace('bg-brand-green text-white', 'bg-white text-gray-500');
  } else {
    grid.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4';
    btn4.className = btn4.className.replace('bg-white text-gray-500', 'bg-brand-green text-white');
    btn3.className = btn3.className.replace('bg-brand-green text-white', 'bg-white text-gray-500');
  }
},
```

Cũng thêm sort by rating vào `applyFilters()`:
```javascript
else if (sortVal === 'rating') filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
```

---

### TASK 5: THÊM ACTIVE FILTER TAGS (Filter đã chọn hiển thị rõ)

**Mục tiêu:** Khi người dùng đã chọn bộ lọc, hiện "tag" phía trên grid để họ biết đang lọc gì và dễ xóa — giống Tiki.

**File:** `src/views/ShopView.js`

Thêm div placeholder SAU toolbar, TRƯỚC grid:
```html
<div id="activeFiltersRow" class="flex flex-wrap gap-2 min-h-0"></div>
```

Thêm method `renderActiveFilters()` và gọi nó trong `applyFilters()`:
```javascript
renderActiveFilters() {
  const row = document.getElementById('activeFiltersRow');
  if (!row) return;
  const mats = Array.from(document.querySelectorAll('input[name="matFilter"]:checked')).map(c => c.value);
  const feats = Array.from(document.querySelectorAll('input[name="featFilter"]:checked')).map(c => c.value);
  const price = document.querySelector('input[name="priceRange"]:checked')?.value;

  const labels = {
    'sen': 'Sợi Sen', 'chuoi': 'Tơ Chuối', 'bamboo': 'Bamboo',
    'bacha': 'Bạc Hà', 'modal': 'Modal', 'xodua': 'Xơ Dừa',
    'khong-ui': '✨ Không cần là ủi', 'seamless': '⚡ Seamless',
    'anti-uv': '☀️ Anti-UV', 'van-hoa': '🏛️ Di sản',
    'under-600': 'Dưới 600K', '600-800': '600K–800K', 'over-800': 'Trên 800K'
  };

  const allTags = [...mats, ...feats, ...(price && price !== 'all' ? [price] : [])];

  if (allTags.length === 0) {
    row.innerHTML = '';
    return;
  }

  row.innerHTML = `
    <span class="text-[11px] text-gray-500 font-medium self-center">Đang lọc:</span>
    ${allTags.map(tag => `
      <span class="inline-flex items-center gap-1 bg-brand-green/10 text-brand-green text-[11px] font-bold px-2.5 py-1 rounded-full border border-brand-green/20">
        ${labels[tag] || tag}
        <button onclick="HDC.Views.ShopView.removeFilter('${tag}')" class="ml-0.5 text-brand-green/60 hover:text-brand-red font-bold text-xs">&times;</button>
      </span>
    `).join('')}
    <button onclick="HDC.Views.ShopView.resetFilters()" class="text-[11px] text-brand-red font-bold hover:underline">Xóa tất cả</button>
  `;
},

removeFilter(val) {
  // Uncheck checkbox tương ứng
  const cb = document.querySelector(`input[name="matFilter"][value="${val}"], input[name="featFilter"][value="${val}"]`);
  if (cb) { cb.checked = false; }
  // Uncheck radio price nếu khớp
  const radio = document.querySelector(`input[name="priceRange"][value="${val}"]`);
  if (radio) {
    radio.checked = false;
    const allRadio = document.querySelector('input[name="priceRange"][value="all"]');
    if (allRadio) allRadio.checked = true;
  }
  this.applyFilters();
},
```

Trong `applyFilters()`, thêm dòng cuối cùng:
```javascript
this.renderActiveFilters();
```

---

### TASK 6: MOBILE FILTER DRAWER (Thay sidebar thành bottom drawer trên mobile)

**Mục tiêu:** Trên mobile, sidebar filter thường bị ẩn hoặc chiếm quá nhiều chỗ. Thay bằng button "Bộ lọc" mở drawer từ dưới lên — chuẩn UX mobile TMĐT.

**File:** `src/views/ShopView.js`

Thêm vào đầu phần `render()`, TRƯỚC category chips:
```html
<!-- MOBILE FILTER BUTTON (chỉ hiện dưới lg) -->
<div class="flex items-center gap-2 mt-3 lg:hidden">
  <button onclick="HDC.Views.ShopView.toggleMobileFilter()"
          class="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-full text-xs font-bold text-gray-700 bg-white hover:border-brand-green transition">
    <i class="fa-solid fa-sliders text-brand-green"></i> Bộ lọc & Sắp xếp
  </button>
</div>

<!-- MOBILE FILTER DRAWER OVERLAY -->
<div id="mobileFilterOverlay" class="fixed inset-0 z-50 bg-black/50 hidden lg:hidden" 
     onclick="HDC.Views.ShopView.toggleMobileFilter()"></div>

<!-- MOBILE FILTER DRAWER (slide up from bottom) -->
<div id="mobileFilterDrawer" 
     class="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl p-5 max-h-[80vh] overflow-y-auto hidden lg:hidden transform translate-y-full transition-transform duration-300">
  <div class="flex items-center justify-between pb-3 border-b mb-4">
    <h3 class="font-bold text-gray-900 flex items-center gap-2">
      <i class="fa-solid fa-sliders text-brand-green"></i> Bộ lọc
    </h3>
    <button onclick="HDC.Views.ShopView.toggleMobileFilter()" class="text-gray-500 hover:text-black">
      <i class="fa-solid fa-xmark text-xl"></i>
    </button>
  </div>
  <!-- Clone nội dung bộ lọc từ sidebar vào đây - chất liệu, tính năng, giá -->
  <div class="space-y-4 text-xs text-gray-700">
    <div>
      <h4 class="font-bold uppercase tracking-wider mb-2 text-gray-800">Chất liệu</h4>
      <div class="flex flex-wrap gap-2">
        ${['sen','chuoi','bamboo','bacha','modal','xodua'].map((m, i) => {
          const labels = ['Sợi Sen','Tơ Chuối','Bamboo','Bạc Hà','Modal','Xơ Dừa'];
          return `<label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
            <input type="checkbox" name="matFilter" value="${m}" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
            <span>${labels[i]}</span>
          </label>`;
        }).join('')}
      </div>
    </div>
    <div>
      <h4 class="font-bold uppercase tracking-wider mb-2 text-gray-800">Tính năng</h4>
      <div class="flex flex-wrap gap-2">
        <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
          <input type="checkbox" name="featFilter" value="khong-ui" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
          <span>✨ Không cần là ủi</span>
        </label>
        <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
          <input type="checkbox" name="featFilter" value="seamless" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
          <span>⚡ Seamless</span>
        </label>
        <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
          <input type="checkbox" name="featFilter" value="anti-uv" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
          <span>☀️ Anti-UV</span>
        </label>
        <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
          <input type="checkbox" name="featFilter" value="van-hoa" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
          <span>🏛️ Di sản</span>
        </label>
      </div>
    </div>
    <button onclick="HDC.Views.ShopView.toggleMobileFilter(); HDC.Views.ShopView.resetFilters()"
            class="w-full border border-gray-300 py-2 rounded-xl text-brand-red font-bold text-xs">
      Xóa tất cả bộ lọc
    </button>
    <button onclick="HDC.Views.ShopView.toggleMobileFilter()"
            class="w-full bg-brand-green text-white py-3 rounded-xl font-bold text-sm">
      Xem kết quả
    </button>
  </div>
</div>
```

Thêm method `toggleMobileFilter()`:
```javascript
toggleMobileFilter() {
  const overlay = document.getElementById('mobileFilterOverlay');
  const drawer = document.getElementById('mobileFilterDrawer');
  if (!overlay || !drawer) return;
  const isHidden = drawer.classList.contains('hidden');
  if (isHidden) {
    overlay.classList.remove('hidden');
    drawer.classList.remove('hidden');
    setTimeout(() => drawer.classList.remove('translate-y-full'), 10);
  } else {
    drawer.classList.add('translate-y-full');
    setTimeout(() => {
      drawer.classList.add('hidden');
      overlay.classList.add('hidden');
    }, 300);
  }
},
```

---

## LƯU Ý QUAN TRỌNG

1. **Không xóa sidebar filter trên desktop** — vẫn giữ `lg:col-span-3` sidebar. Mobile drawer là bổ sung, không thay thế.
2. **Đồng bộ filter:** Filter trong mobile drawer dùng cùng `input[name="matFilter"]` và `input[name="featFilter"]` — vì vậy logic `applyFilters()` hoạt động cho cả 2 nơi.
3. **Sold count ảo:** Công thức `product.id * 17 + 43` tạo số bán "trông thật" mà không cần database. Có thể thêm field `sold` vào `products.js` nếu muốn kiểm soát chính xác.
4. **Giữ brand colors:** Green `#1e4832`, Red `#d92d20`, Gold `#b89047`.
5. **Thứ tự thực hiện TASK:** 2 → 1 → 3 → 4 → 5 → 6. Bắt đầu bằng ProductCard vì nó ảnh hưởng toàn bộ trang.

---

## CHECKLIST KIỂM TRA SAU KHI HOÀN THÀNH

- [ ] Category chips hiện đúng số lượng sản phẩm mỗi loại
- [ ] Click chip → grid cập nhật ngay lập tức
- [ ] ProductCard hiển thị: badge giảm %, rating, đã bán, màu sắc, nút `+` thêm giỏ
- [ ] Sản phẩm có `stock <= 20` hiện tag "Sắp hết" màu cam
- [ ] Banner zone 2 ô hiển thị đẹp, click dẫn đúng category
- [ ] Toolbar có sort + view mode toggle (3 cột / 4 cột)
- [ ] Active filter tags hiện khi có filter được chọn, xóa được từng tag
- [ ] Trên mobile: nút "Bộ lọc" hiện, click mở drawer từ dưới lên mượt mà
- [ ] Overlay mobile drawer đóng khi click ra ngoài
- [ ] Tất cả filter sidebar desktop vẫn hoạt động bình thường

---

*Prompt chuẩn bị bởi Antigravity AI — 30/09/2026*  
*File lưu tại: `C:\Users\Ngoc Minh Kien\Downloads\BIRT\HDC_Shop_Upgrade_Prompt.md`*
