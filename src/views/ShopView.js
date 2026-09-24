/**
 * HDC Fashion — Shop Catalog View
 * Facet filter sidebar (materials, features, price), sorting, and reactive product grid
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.ShopView = {
  render() {
    return `
      <div id="view-shop" class="view-panel hidden animate-fadeIn py-8 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          
          <!-- Breadcrumb & Shop Header -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b gap-3">
            <div>
              <div class="text-xs text-gray-500 flex items-center gap-1.5 mb-1">
                <a href="javascript:void(0)" onclick="HDC.Router.navigate('home')" class="hover:text-brand-green">Trang chủ</a>
                <span>/</span>
                <span class="text-gray-800 font-semibold">Cửa hàng sản phẩm thời trang xanh</span>
              </div>
              <h1 class="text-2xl font-extrabold text-gray-900 font-heading uppercase">Tất Cả Sản Phẩm HDC</h1>
            </div>
            
            <div class="flex items-center gap-3">
              <span class="text-xs text-gray-500">Sắp xếp theo:</span>
              <select id="shopSortSelect" onchange="HDC.Views.ShopView.applyFilters()" class="text-xs border rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-brand-green">
                <option value="featured">Nổi bật nhất</option>
                <option value="price-asc">Giá: Thấp đến Cao</option>
                <option value="price-desc">Giá: Cao đến Thấp</option>
                <option value="name">Tên sản phẩm A-Z</option>
              </select>
            </div>
          </div>

          <!-- 2-Column Layout -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            
            <!-- SIDEBAR FILTERS -->
            <div class="lg:col-span-3 space-y-6 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm h-fit">
              <div class="flex items-center justify-between pb-3 border-b">
                <h3 class="font-bold text-sm text-gray-900 flex items-center gap-2">
                  <i class="fa-solid fa-sliders text-brand-green"></i> Bộ Lọc Tìm Kiếm
                </h3>
                <button onclick="HDC.Views.ShopView.resetFilters()" class="text-[11px] text-brand-red font-semibold hover:underline">Xóa lọc</button>
              </div>

              <!-- Filter by Material -->
              <div class="space-y-2">
                <h4 class="text-xs font-bold uppercase text-gray-700 tracking-wider">Chất liệu tự nhiên</h4>
                <div class="space-y-1.5 text-xs text-gray-600">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="matFilter" value="sen" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Sợi Sen Tự Nhiên</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="matFilter" value="chuoi" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Tơ Chuối Sinh Học</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="matFilter" value="bamboo" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Sợi Tre Bamboo</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="matFilter" value="bacha" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Sợi Bạc Hà Mát Lạnh</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="matFilter" value="modal" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Vải Modal Bền Màu</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="matFilter" value="xodua" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Xơ Dừa Bến Tre</span>
                  </label>
                </div>
              </div>

              <!-- Filter by Feature -->
              <div class="space-y-2 pt-3 border-t">
                <h4 class="text-xs font-bold uppercase text-gray-700 tracking-wider">Tính năng đặc biệt</h4>
                <div class="space-y-1.5 text-xs text-gray-600">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="featFilter" value="khong-ui" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>✨ Không cần là ủi</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="featFilter" value="seamless" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>⚡ Seamless không đường may</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="featFilter" value="anti-uv" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>☀️ Chống tia UV 50+</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" name="featFilter" value="van-hoa" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>🏛️ Họa tiết di sản văn hóa</span>
                  </label>
                </div>
              </div>

              <!-- Filter by Price -->
              <div class="space-y-2 pt-3 border-t">
                <h4 class="text-xs font-bold uppercase text-gray-700 tracking-wider">Khoảng giá</h4>
                <div class="space-y-1.5 text-xs text-gray-600">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="priceRange" value="all" checked onchange="HDC.Views.ShopView.applyFilters()" class="text-brand-green">
                    <span>Tất cả mức giá</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="priceRange" value="under-600" onchange="HDC.Views.ShopView.applyFilters()" class="text-brand-green">
                    <span>Dưới 600.000₫</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="priceRange" value="600-800" onchange="HDC.Views.ShopView.applyFilters()" class="text-brand-green">
                    <span>600.000₫ — 800.000₫</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="priceRange" value="over-800" onchange="HDC.Views.ShopView.applyFilters()" class="text-brand-green">
                    <span>Trên 800.000₫ & Combo</span>
                  </label>
                </div>
              </div>

              <!-- Banner Quiz -->
              <div class="p-4 bg-brand-cream rounded-xl border border-brand-gold/40 text-center space-y-2">
                <p class="text-xs font-bold text-brand-green">Chưa biết mặc size nào?</p>
                <p class="text-[11px] text-gray-600">Sử dụng công cụ tính toán size chuẩn và gợi ý chất liệu theo vóc dáng!</p>
                <button onclick="HDC.Router.navigate('quiz')" class="w-full bg-brand-gold text-white text-[11px] font-bold py-1.5 rounded hover:bg-yellow-600 transition">
                  Mở Trợ Lý Đo Size &rarr;
                </button>
              </div>
            </div>

            <!-- PRODUCT GRID -->
            <div class="lg:col-span-9 space-y-4">
              <div class="flex items-center justify-between text-xs text-gray-500">
                <span id="shopProductCount">Hiển thị 12 sản phẩm</span>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Miễn phí giao hàng toàn quốc</span>
                </div>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" id="shopCatalogGrid">
                <!-- Product cards render here -->
              </div>
            </div>

          </div>

        </div>
      </div>
    `;
  },

  init() {
    this.renderCatalog(HDC.Data.products);

    window.addEventListener('hdc:view-changed', (e) => {
      if (e.detail && e.detail.view === 'shop') {
        if (e.detail.params && e.detail.params.filter === 'sale') {
          this.filterSaleItems();
        } else if (e.detail.params && e.detail.params.search) {
          this.filterBySearch(e.detail.params.search);
        } else {
          this.applyFilters();
        }
      }
    });
  },

  renderCatalog(list) {
    const container = document.getElementById('shopCatalogGrid');
    const countEl = document.getElementById('shopProductCount');
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 text-gray-400">
          <i class="fa-solid fa-box-open text-4xl mb-2 text-gray-300"></i>
          <p class="text-sm font-semibold">Không tìm thấy sản phẩm nào phù hợp với bộ lọc</p>
          <button onclick="HDC.Views.ShopView.resetFilters()" class="mt-2 text-xs text-brand-green underline font-bold">Xóa tất cả bộ lọc</button>
        </div>
      `;
      if (countEl) countEl.innerText = "0 sản phẩm";
      return;
    }

    container.innerHTML = list.map(p => HDC.Components.ProductCard.render(p)).join('');
    if (countEl) countEl.innerText = `Hiển thị ${list.length} sản phẩm phù hợp`;
  },

  applyFilters() {
    const selectedMats = Array.from(document.querySelectorAll('input[name="matFilter"]:checked')).map(c => c.value);
    const selectedFeats = Array.from(document.querySelectorAll('input[name="featFilter"]:checked')).map(c => c.value);
    const priceVal = document.querySelector('input[name="priceRange"]:checked')?.value || 'all';
    const sortVal = document.getElementById('shopSortSelect')?.value || 'featured';

    let filtered = HDC.Data.products.filter(p => {
      if (selectedMats.length > 0 && !selectedMats.includes(p.material)) return false;
      if (selectedFeats.length > 0 && !selectedFeats.some(f => p.features.includes(f))) return false;
      if (priceVal === 'under-600' && p.price >= 600000) return false;
      if (priceVal === '600-800' && (p.price < 600000 || p.price > 800000)) return false;
      if (priceVal === 'over-800' && p.price < 800000) return false;
      return true;
    });

    if (sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else if (sortVal === 'name') filtered.sort((a, b) => a.title.localeCompare(b.title));

    this.renderCatalog(filtered);
  },

  resetFilters() {
    document.querySelectorAll('input[name="matFilter"]').forEach(c => (c.checked = false));
    document.querySelectorAll('input[name="featFilter"]').forEach(c => (c.checked = false));
    const allRadio = document.querySelector('input[name="priceRange"][value="all"]');
    if (allRadio) allRadio.checked = true;
    this.applyFilters();
  },

  filterSaleItems() {
    const saleList = HDC.Data.products.filter(p => {
      if (!p.oldPrice || p.oldPrice <= p.price) return false;
      const discountPct = ((p.oldPrice - p.price) / p.oldPrice) * 100;
      return discountPct >= 10;
    });
    this.renderCatalog(saleList);
  },

  filterBySearch(query) {
    const q = (query || '').toLowerCase().trim();
    const matched = HDC.Data.products.filter(p => 
      p.title.toLowerCase().includes(q) || 
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.badge && p.badge.toLowerCase().includes(q)) ||
      (p.material && p.material.toLowerCase().includes(q))
    );
    this.renderCatalog(matched);
  }
};
