/**
 * HDC Fashion — Header & Navigation Component
 * Top utility bar, sticky navigation, quick search, and responsive mobile drawer
 */

window.HDC = window.HDC || {};
window.HDC.Components = window.HDC.Components || {};

window.HDC.Components.Header = {
  render() {
    return `
      <!-- TOP UTILITY BAR -->
      <div class="bg-brand-greenDark text-white text-[11px] py-2 px-4 border-b border-brand-green">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <div class="flex items-center gap-2.5">
            <span class="bg-brand-gold text-white px-2 py-0.5 rounded font-bold text-[9px] uppercase tracking-wider">HDC CAM KẾT</span>
            <span class="font-medium flex items-center gap-1.5">
              <i class="fa-solid fa-truck-fast text-brand-gold"></i> MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC CHO MỌI ĐƠN HÀNG
            </span>
          </div>
          <div class="flex items-center gap-4 text-gray-300">
            <span class="hidden md:inline"><i class="fa-solid fa-leaf text-emerald-400"></i> 100% Sợi Tự Nhiên &bull; Kháng Khuẩn &bull; Không Cần Là Ủi</span>
            <span class="hidden md:inline">|</span>
            <button onclick="HDC.Router.navigate('tracking')" class="hover:text-amber-300 transition flex items-center gap-1">
              <i class="fa-solid fa-box-archive"></i> Tra cứu đơn hàng & Đổi trả
            </button>
            <span>|</span>
            <a href="tel:1900888999" class="text-amber-300 font-bold hover:underline flex items-center gap-1">
              <i class="fa-solid fa-phone-volume"></i> Hotline B2B: 1900 888 999
            </a>
          </div>
        </div>
      </div>

      <!-- MAIN STICKY NAVIGATION -->
      <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          <!-- Mobile Menu Button -->
          <button onclick="HDC.Components.Header.toggleMobileMenu()" class="lg:hidden text-gray-700 hover:text-brand-green text-xl p-1" title="Menu">
            <i class="fa-solid fa-bars"></i>
          </button>

          <!-- BRAND LOGO -->
          <a href="javascript:void(0)" onclick="HDC.Router.navigate('home')" class="flex flex-col items-center select-none group">
            <div class="flex items-center gap-2">
              <span class="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-green group-hover:text-brand-greenDark transition">
                HDC
              </span>
              <span class="font-heading text-xs tracking-[0.25em] font-semibold text-brand-gold uppercase border-l pl-2 border-brand-gold/60">
                FASHION
              </span>
            </div>
            <span class="text-[9px] font-medium tracking-widest text-gray-400 uppercase -mt-0.5">Phong Cách Tạo Thành Công</span>
          </a>

          <!-- DESKTOP NAVIGATION -->
          <nav class="hidden lg:flex items-center gap-6 text-[13px] font-semibold tracking-wide uppercase">
            <button onclick="HDC.Router.navigate('home')" id="nav-home" class="nav-tab active py-2 transition hover:text-brand-green">
              Trang chủ
            </button>

            <button onclick="HDC.Router.navigate('shop')" id="nav-shop" class="nav-tab py-2 transition hover:text-brand-green flex items-center gap-1">
              Cửa Hàng (Shop) <span class="text-[9px] bg-emerald-100 text-brand-green px-1.5 py-0.2 rounded font-bold">Mới</span>
            </button>

            <button onclick="HDC.Router.navigate('b2b')" id="nav-b2b" class="nav-tab py-2 transition hover:text-brand-green flex items-center gap-1">
              <i class="fa-solid fa-briefcase text-brand-gold text-xs"></i> Đồng Phục B2B
            </button>

            <button onclick="HDC.Router.navigate('kids')" id="nav-kids" class="nav-tab py-2 transition hover:text-brand-green flex items-center gap-1">
              <i class="fa-solid fa-graduation-cap text-emerald-600 text-xs"></i> IHDC Kids
            </button>

            <button onclick="HDC.Router.navigate('quiz')" id="nav-quiz" class="nav-tab py-2 transition hover:text-brand-green flex items-center gap-1">
              <i class="fa-solid fa-ruler-combined text-brand-gold text-xs"></i> Trợ Lý Chọn Size
            </button>

            <button onclick="HDC.Router.navigate('faq')" id="nav-faq" class="nav-tab py-2 transition hover:text-brand-green">
              Hỏi Đáp (FAQ)
            </button>

            <button onclick="HDC.Router.navigate('shop', { filter: 'sale' })" id="nav-sale" class="nav-tab py-2 text-brand-red font-bold transition hover:text-brand-redHover flex items-center gap-1">
              SALE THÁNG 9 🔥
            </button>
          </nav>

          <!-- ACTIONS RIGHT -->
          <div class="flex items-center gap-3 sm:gap-4 text-gray-700">
            <button onclick="HDC.Components.Header.toggleSearch()" class="hover:text-brand-green p-1 transition" title="Tìm kiếm">
              <i class="fa-solid fa-magnifying-glass text-lg"></i>
            </button>

            <button onclick="HDC.Router.navigate('tracking')" class="hidden sm:inline-flex hover:text-brand-green p-1 transition text-xs font-semibold items-center gap-1" title="Tra cứu đơn">
              <i class="fa-solid fa-truck-ramp-box text-base"></i>
            </button>

            <button onclick="HDC.Utils.showToast('Danh sách yêu thích đã lưu ' + HDC.Store.getWishlistCount() + ' sản phẩm!')" class="hover:text-brand-red p-1 transition relative" title="Yêu thích">
              <i class="fa-regular fa-heart text-lg"></i>
              <span id="wishlistCountBadge" class="absolute -top-1 -right-1.5 bg-brand-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>

            <button onclick="HDC.Components.CartDrawer.open()" class="hover:text-brand-green p-1 transition relative" title="Giỏ hàng">
              <i class="fa-solid fa-bag-shopping text-xl text-brand-green"></i>
              <span id="cartCountBadge" class="absolute -top-1.5 -right-2 bg-brand-red text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold ring-2 ring-white">0</span>
            </button>

            <button onclick="HDC.Components.B2BModal.open()" class="btn-shimmer hidden md:inline-flex items-center gap-1.5 bg-brand-green text-white text-xs font-bold px-3.5 py-1.5 rounded-full hover:bg-brand-greenDark transition shadow-sm hover:scale-105 active:scale-95">
              <i class="fa-solid fa-paper-plane text-[10px]"></i> Báo giá B2B
            </button>
          </div>

        </div>

        <!-- SEARCH OVERLAY -->
        <div id="quickSearchBar" class="hidden border-t bg-gray-50 px-4 py-3 border-gray-200">
          <div class="max-w-4xl mx-auto flex items-center gap-3">
            <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
            <input type="text" id="globalSearchInput" onkeyup="if(event.key==='Enter') HDC.Components.Header.executeSearch()" placeholder="Tìm kiếm sơ mi sen, tơ chuối, modal, bamboo, polo golf anti-uv, trống đồng..." class="w-full bg-transparent text-xs sm:text-sm focus:outline-none text-gray-800">
            <button onclick="HDC.Components.Header.executeSearch()" class="bg-brand-green text-white text-xs font-semibold px-3 py-1.5 rounded hover:bg-brand-greenDark">Tìm</button>
            <button onclick="HDC.Components.Header.toggleSearch()" class="text-xs text-gray-500 hover:text-black font-semibold">Đóng</button>
          </div>
        </div>
      </header>

      <!-- MOBILE DRAWER -->
      <div id="mobileDrawer" class="fixed inset-0 z-50 bg-black/60 hidden transition-opacity" onclick="if(event.target===this) HDC.Components.Header.toggleMobileMenu()">
        <div class="w-4/5 max-w-sm bg-white h-full p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div class="flex items-center justify-between pb-4 border-b">
              <div class="flex items-center gap-2">
                <span class="font-serif text-2xl font-bold text-brand-green">HDC</span>
                <span class="font-heading text-xs tracking-widest text-brand-gold uppercase">Fashion</span>
              </div>
              <button onclick="HDC.Components.Header.toggleMobileMenu()" class="text-gray-500 hover:text-black text-xl">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="py-4 flex flex-col gap-2 font-semibold text-xs tracking-wider uppercase divide-y divide-gray-100">
              <button onclick="HDC.Router.navigate('home'); HDC.Components.Header.toggleMobileMenu()" class="text-left py-2.5 text-brand-green">Trang chủ</button>
              <button onclick="HDC.Router.navigate('shop'); HDC.Components.Header.toggleMobileMenu()" class="text-left py-2.5 text-gray-800">Cửa hàng & Bộ Lọc (Shop)</button>
              <button onclick="HDC.Router.navigate('b2b'); HDC.Components.Header.toggleMobileMenu()" class="text-left py-2.5 text-brand-gold">Đồng phục B2B (Doanh nghiệp & Golf)</button>
              <button onclick="HDC.Router.navigate('kids'); HDC.Components.Header.toggleMobileMenu()" class="text-left py-2.5 text-emerald-700">IHDC Kids — Trường Vinschool</button>
              <button onclick="HDC.Router.navigate('quiz'); HDC.Components.Header.toggleMobileMenu()" class="text-left py-2.5 text-gray-800">Trợ lý đo size & Chất liệu AI</button>
              <button onclick="HDC.Router.navigate('tracking'); HDC.Components.Header.toggleMobileMenu()" class="text-left py-2.5 text-gray-800">Tra cứu đơn hàng & Đổi trả</button>
              <button onclick="HDC.Router.navigate('faq'); HDC.Components.Header.toggleMobileMenu()" class="text-left py-2.5 text-gray-800">Hỏi đáp thường gặp (FAQ)</button>
              <button onclick="HDC.Router.navigate('shop', { filter: 'sale' }); HDC.Components.Header.toggleMobileMenu()" class="text-left py-2.5 text-brand-red font-bold">Sale Tháng 9 🔥</button>
            </div>
          </div>
          <div class="pt-4 border-t space-y-2">
            <button onclick="HDC.Components.B2BModal.open(); HDC.Components.Header.toggleMobileMenu()" class="w-full bg-brand-green text-white font-bold py-2.5 rounded-lg text-xs uppercase">
              Tư vấn đồng phục B2B miễn phí
            </button>
            <p class="text-[11px] text-gray-500 text-center font-medium">Hotline: 1900 888 999 &bull; Free Ship toàn quốc</p>
          </div>
        </div>
      </div>
    `;
  },

  init() {
    HDC.Store.subscribe(() => {
      const cartCountEl = document.getElementById('cartCountBadge');
      if (cartCountEl) cartCountEl.innerText = HDC.Store.getCartCount();

      const wishCountEl = document.getElementById('wishlistCountBadge');
      if (wishCountEl) wishCountEl.innerText = HDC.Store.getWishlistCount();
    });
  },

  toggleMobileMenu() {
    const el = document.getElementById('mobileDrawer');
    if (el) el.classList.toggle('hidden');
  },

  toggleSearch() {
    const bar = document.getElementById('quickSearchBar');
    if (bar) {
      bar.classList.toggle('hidden');
      if (!bar.classList.contains('hidden')) {
        document.getElementById('globalSearchInput').focus();
      }
    }
  },

  executeSearch() {
    const query = (document.getElementById('globalSearchInput').value || '').trim().toLowerCase();
    if (!query) return;
    this.toggleSearch();
    HDC.Router.navigate('shop', { search: query });
  }
};
