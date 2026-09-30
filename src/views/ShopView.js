/**
 * HDC Fashion — Shop Catalog View
 * Facet filter sidebar (materials, features, price), sorting, mobile filter drawer,
 * category quick chips, promo banners, active filter tags, and reactive product grid
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.ShopView = {
  currentViewMode: 4,

  render() {
    return `
      <div id="view-shop" class="view-panel hidden animate-fadeIn py-8 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          
          <!-- Breadcrumb & Shop Header -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b gap-3">
            <div>
              <div class="text-xs text-gray-500 flex items-center gap-1.5 mb-1">
                <a href="javascript:void(0)" onclick="HDC.Router.navigate('home')" class="hover:text-brand-green">Trang chủ</a>
                <span>/</span>
                <span class="text-gray-800 font-semibold">Cửa hàng sản phẩm thời trang xanh</span>
              </div>
              <h1 class="text-2xl font-extrabold text-gray-900 font-heading uppercase">Tất Cả Sản Phẩm HDC</h1>
            </div>
            <div class="hidden sm:flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <i class="fa-solid fa-shield-halved"></i>
              <span>100% Sợi Sinh Học Bền Vững</span>
            </div>
          </div>

          <!-- MOBILE FILTER BUTTON (chỉ hiện dưới lg) -->
          <div class="flex items-center gap-2 mt-3 lg:hidden">
            <button onclick="HDC.Views.ShopView.toggleMobileFilter()"
                    class="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-full text-xs font-bold text-gray-700 bg-white hover:border-brand-green transition shadow-sm">
              <i class="fa-solid fa-sliders text-brand-green"></i> Bộ lọc & Sắp xếp
            </button>
          </div>

          <!-- MOBILE FILTER DRAWER OVERLAY -->
          <div id="mobileFilterOverlay" class="fixed inset-0 z-50 bg-black/50 hidden lg:hidden" 
               onclick="HDC.Views.ShopView.toggleMobileFilter()"></div>

          <!-- MOBILE FILTER DRAWER (slide up from bottom) -->
          <div id="mobileFilterDrawer" 
               class="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl p-5 max-h-[85vh] overflow-y-auto hidden lg:hidden transform translate-y-full transition-transform duration-300">
            <div class="flex items-center justify-between pb-3 border-b mb-4">
              <h3 class="font-bold text-gray-900 flex items-center gap-2">
                <i class="fa-solid fa-sliders text-brand-green"></i> Bộ lọc
              </h3>
              <button onclick="HDC.Views.ShopView.toggleMobileFilter()" class="text-gray-500 hover:text-black p-1">
                <i class="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            <!-- Clone nội dung bộ lọc từ sidebar vào đây - chất liệu, tính năng, giá -->
            <div class="space-y-4 text-xs text-gray-700">
              <div>
                <h4 class="font-bold uppercase tracking-wider mb-2 text-gray-800">Chất liệu tự nhiên</h4>
                <div class="flex flex-wrap gap-2">
                  <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
                    <input type="checkbox" name="matFilter" value="sen" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Sợi Sen</span>
                  </label>
                  <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
                    <input type="checkbox" name="matFilter" value="chuoi" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Tơ Chuối</span>
                  </label>
                  <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
                    <input type="checkbox" name="matFilter" value="bamboo" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Bamboo</span>
                  </label>
                  <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
                    <input type="checkbox" name="matFilter" value="bacha" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Bạc Hà</span>
                  </label>
                  <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
                    <input type="checkbox" name="matFilter" value="modal" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Modal</span>
                  </label>
                  <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
                    <input type="checkbox" name="matFilter" value="xodua" onchange="HDC.Views.ShopView.applyFilters()" class="rounded text-brand-green">
                    <span>Xơ Dừa</span>
                  </label>
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
              <div>
                <h4 class="font-bold uppercase tracking-wider mb-2 text-gray-800">Khoảng giá</h4>
                <div class="flex flex-wrap gap-2">
                  <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
                    <input type="radio" name="priceRange" value="all" checked onchange="HDC.Views.ShopView.applyFilters()" class="text-brand-green">
                    <span>Tất cả</span>
                  </label>
                  <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
                    <input type="radio" name="priceRange" value="under-600" onchange="HDC.Views.ShopView.applyFilters()" class="text-brand-green">
                    <span>Dưới 600K</span>
                  </label>
                  <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
                    <input type="radio" name="priceRange" value="600-800" onchange="HDC.Views.ShopView.applyFilters()" class="text-brand-green">
                    <span>600K - 800K</span>
                  </label>
                  <label class="flex items-center gap-1.5 bg-gray-50 border rounded-xl px-3 py-1.5 cursor-pointer hover:border-brand-green">
                    <input type="radio" name="priceRange" value="over-800" onchange="HDC.Views.ShopView.applyFilters()" class="text-brand-green">
                    <span>Trên 800K</span>
                  </label>
                </div>
              </div>
              <div class="pt-2 flex gap-2">
                <button onclick="HDC.Views.ShopView.resetFilters()"
                        class="flex-1 border border-gray-300 py-2.5 rounded-xl text-brand-red font-bold text-xs hover:bg-red-50 transition">
                  Xóa tất cả bộ lọc
                </button>
                <button onclick="HDC.Views.ShopView.toggleMobileFilter()"
                        class="flex-1 bg-brand-green text-white py-2.5 rounded-xl font-bold text-xs hover:bg-brand-greenDark transition">
                  Xem kết quả
                </button>
              </div>
            </div>
          </div>

          <!-- CATEGORY QUICK FILTER CHIPS (Task 1) -->
          <div class="flex gap-2 overflow-x-auto pb-2 pt-4 scrollbar-hide" id="categoryChips">
            <button onclick="HDC.Views.ShopView.filterByCategory('all')" 
                    id="chip-all"
                    class="category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-brand-green bg-brand-green text-white transition whitespace-nowrap shadow-sm">
              <i class="fa-solid fa-border-all"></i> Tất Cả (12)
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

          <!-- PROMO BANNER ZONE (Task 3) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            <!-- Banner 1: Ưu đãi hôm nay -->
            <div class="col-span-2 bg-gradient-to-r from-brand-greenDark to-brand-green rounded-2xl p-5 flex items-center justify-between text-white overflow-hidden relative shadow-sm">
              <div class="z-10">
                <span class="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider">Flash Sale</span>
                <h3 class="text-lg font-extrabold mt-1 font-heading">Giảm đến -30%</h3>
                <p class="text-xs text-emerald-200 mt-0.5">Sợi Bamboo & Tơ Chuối sinh học</p>
                <button onclick="HDC.Views.ShopView.filterByCategory('xanh')"
                        class="mt-3 bg-white text-brand-green text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-brand-cream transition shadow-sm">
                  Mua Ngay →
                </button>
              </div>
              <div class="absolute right-4 opacity-20 text-8xl font-serif font-bold select-none pointer-events-none">🌿</div>
            </div>
            <!-- Banner 2: Golf & Doanh nhân -->
            <div class="bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl p-5 text-white relative overflow-hidden shadow-sm flex flex-col justify-between">
              <div class="z-10">
                <span class="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider">Golf Edition</span>
                <h3 class="text-base font-extrabold mt-1 leading-tight">Polo Anti-UV<br/>DNT 30 Năm</h3>
                <button onclick="HDC.Views.ShopView.filterByCategory('polo')"
                        class="mt-3 bg-white text-amber-700 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-amber-50 transition shadow-sm">
                  Xem →
                </button>
              </div>
              <div class="absolute right-2 bottom-2 text-5xl opacity-25 select-none pointer-events-none">⛳</div>
            </div>
          </div>

          <!-- 2-Column Layout -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            
            <!-- SIDEBAR FILTERS (Desktop) -->
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

            <!-- MAIN PRODUCT AREA (Task 4 & 5) -->
            <div class="lg:col-span-9 space-y-4">
              
              <!-- PRODUCT GRID TOOLBAR (Task 4) -->
              <div class="flex items-center justify-between bg-white rounded-xl px-4 py-2.5 border border-gray-200 shadow-sm flex-wrap gap-2">
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
                  <div class="hidden sm:flex items-center gap-1 border border-gray-200 rounded-lg overflow-hidden p-0.5 bg-gray-50">
                    <button onclick="HDC.Views.ShopView.setViewMode(4)" id="view4btn"
                            class="px-2.5 py-1 bg-brand-green text-white rounded text-xs transition" title="4 cột">
                      <i class="fa-solid fa-grip text-[10px]"></i>
                    </button>
                    <button onclick="HDC.Views.ShopView.setViewMode(3)" id="view3btn"
                            class="px-2.5 py-1 bg-white text-gray-500 rounded text-xs transition hover:text-brand-green" title="3 cột">
                      <i class="fa-solid fa-table-columns text-[10px]"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- ACTIVE FILTER TAGS (Task 5) -->
              <div id="activeFiltersRow" class="flex flex-wrap gap-2 min-h-0"></div>

              <!-- GRID CATALOG -->
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
        } else if (e.detail.params && e.detail.params.category) {
          this.filterByCategory(e.detail.params.category);
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
    if (countEl) countEl.innerText = `${list.length} sản phẩm`;
  },

  setViewMode(cols) {
    this.currentViewMode = cols;
    const grid = document.getElementById('shopCatalogGrid');
    const btn4 = document.getElementById('view4btn');
    const btn3 = document.getElementById('view3btn');
    if (!grid) return;
    if (cols === 3) {
      grid.className = 'grid grid-cols-2 sm:grid-cols-3 gap-4';
      if (btn3) btn3.className = 'px-2.5 py-1 bg-brand-green text-white rounded text-xs transition';
      if (btn4) btn4.className = 'px-2.5 py-1 bg-white text-gray-500 rounded text-xs transition hover:text-brand-green';
    } else {
      grid.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4';
      if (btn4) btn4.className = 'px-2.5 py-1 bg-brand-green text-white rounded text-xs transition';
      if (btn3) btn3.className = 'px-2.5 py-1 bg-white text-gray-500 rounded text-xs transition hover:text-brand-green';
    }
  },

  filterByCategory(cat) {
    // Reset visual của tất cả chips
    document.querySelectorAll('.category-chip').forEach(btn => {
      btn.className = 'category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-gray-200 bg-white text-gray-700 hover:border-brand-green hover:text-brand-green transition whitespace-nowrap';
    });
    const saleChip = document.getElementById('chip-sale');
    if (saleChip) {
      saleChip.className = 'category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-brand-red bg-red-50 text-brand-red hover:bg-brand-red hover:text-white transition whitespace-nowrap';
    }

    // Highlight chip đang active
    const activeChip = document.getElementById('chip-' + cat);
    if (activeChip) {
      activeChip.className = 'category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-brand-green bg-brand-green text-white transition whitespace-nowrap shadow-sm';
    }

    if (cat === 'all') {
      this.renderCatalog(HDC.Data.products);
    } else {
      const filtered = HDC.Data.products.filter(p => p.category === cat);
      this.renderCatalog(filtered);
    }
    this.renderActiveFilters();
  },

  filterSaleItems() {
    document.querySelectorAll('.category-chip').forEach(btn => {
      btn.className = 'category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-gray-200 bg-white text-gray-700 hover:border-brand-green hover:text-brand-green transition whitespace-nowrap';
    });
    const saleChip = document.getElementById('chip-sale');
    if (saleChip) {
      saleChip.className = 'category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-brand-red bg-brand-red text-white transition whitespace-nowrap shadow-sm';
    }
    const saleList = HDC.Data.products.filter(p => {
      if (!p.oldPrice || p.oldPrice <= p.price) return false;
      const discountPct = ((p.oldPrice - p.price) / p.oldPrice) * 100;
      return discountPct >= 10;
    });
    this.renderCatalog(saleList);
    this.renderActiveFilters();
  },

  applyFilters() {
    const selectedMats = Array.from(new Set(Array.from(document.querySelectorAll('input[name="matFilter"]:checked')).map(c => c.value)));
    const selectedFeats = Array.from(new Set(Array.from(document.querySelectorAll('input[name="featFilter"]:checked')).map(c => c.value)));
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
    else if (sortVal === 'rating') filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    else if (sortVal === 'name') filtered.sort((a, b) => a.title.localeCompare(b.title));

    this.renderCatalog(filtered);
    this.renderActiveFilters();
  },

  renderActiveFilters() {
    const row = document.getElementById('activeFiltersRow');
    if (!row) return;
    const mats = Array.from(new Set(Array.from(document.querySelectorAll('input[name="matFilter"]:checked')).map(c => c.value)));
    const feats = Array.from(new Set(Array.from(document.querySelectorAll('input[name="featFilter"]:checked')).map(c => c.value)));
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
          <button onclick="HDC.Views.ShopView.removeFilter('${tag}')" class="ml-0.5 text-brand-green/60 hover:text-brand-red font-bold text-xs" title="Xóa lọc">&times;</button>
        </span>
      `).join('')}
      <button onclick="HDC.Views.ShopView.resetFilters()" class="text-[11px] text-brand-red font-bold hover:underline self-center ml-1">Xóa tất cả</button>
    `;
  },

  removeFilter(val) {
    // Uncheck checkbox tương ứng
    document.querySelectorAll(`input[name="matFilter"][value="${val}"], input[name="featFilter"][value="${val}"]`).forEach(cb => {
      cb.checked = false;
    });
    // Uncheck radio price nếu khớp
    const radio = document.querySelector(`input[name="priceRange"][value="${val}"]`);
    if (radio && radio.checked) {
      radio.checked = false;
      document.querySelectorAll('input[name="priceRange"][value="all"]').forEach(r => {
        r.checked = true;
      });
    }
    this.applyFilters();
  },

  resetFilters() {
    document.querySelectorAll('input[name="matFilter"]').forEach(c => (c.checked = false));
    document.querySelectorAll('input[name="featFilter"]').forEach(c => (c.checked = false));
    document.querySelectorAll('input[name="priceRange"][value="all"]').forEach(r => (r.checked = true));
    
    // Reset category chips
    document.querySelectorAll('.category-chip').forEach(btn => {
      btn.className = 'category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-gray-200 bg-white text-gray-700 hover:border-brand-green hover:text-brand-green transition whitespace-nowrap';
    });
    const allChip = document.getElementById('chip-all');
    if (allChip) {
      allChip.className = 'category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-brand-green bg-brand-green text-white transition whitespace-nowrap shadow-sm';
    }
    const saleChip = document.getElementById('chip-sale');
    if (saleChip) {
      saleChip.className = 'category-chip flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border-2 border-brand-red bg-red-50 text-brand-red hover:bg-brand-red hover:text-white transition whitespace-nowrap';
    }

    this.applyFilters();
  },

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
