/**
 * HDC Fashion — Luxury Product Detail & Quick View Modal
 * Interactive product showcase with size picker, color swatches, stock counter,
 * material lab test tabs, size chart modal, and 1-click buy now
 */

window.HDC = window.HDC || {};
window.HDC.Components = window.HDC.Components || {};

window.HDC.Components.QuickViewModal = {
  currentProduct: null,
  selectedSize: 'L',
  activeTab: 'specs',

  render() {
    return `
      <div id="quickViewModal" class="fixed inset-0 z-50 bg-black/65 hidden items-center justify-center p-3 sm:p-4 backdrop-blur-md">
        <div class="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-fadeIn flex flex-col md:flex-row max-h-[92vh]">
          
          <!-- Close Button -->
          <button onclick="HDC.Components.QuickViewModal.close()" class="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-gray-100 flex items-center justify-center text-gray-700 shadow-md transition" title="Đóng">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>

          <!-- Left Image Column -->
          <div class="md:w-1/2 bg-gray-100 relative group overflow-hidden flex items-center justify-center">
            <img id="modalImg" src="" alt="Sản phẩm HDC" class="w-full h-72 md:h-full object-cover product-img-hover">
            <span id="modalBadge" class="absolute top-4 left-4 bg-brand-green text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-lg">
              Chất liệu xanh
            </span>
            <div class="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md text-white text-[11px] py-1.5 px-3 rounded-xl flex items-center justify-between">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-shield-halved text-amber-300"></i> Bảo hành 12 tháng</span>
              <span id="modalStockStatus" class="font-bold text-emerald-300">✓ Còn hàng</span>
            </div>
          </div>

          <!-- Right Information & Tabs Column -->
          <div class="md:w-1/2 p-6 sm:p-7 flex flex-col justify-between overflow-y-auto space-y-4 text-xs">
            
            <div class="space-y-3">
              <div>
                <span id="modalCategory" class="text-[11px] font-bold text-brand-gold uppercase tracking-wider">
                  Sơ mi sinh học cao cấp
                </span>
                <h3 id="modalTitle" class="text-xl sm:text-2xl font-bold text-gray-900 mt-1 font-serif leading-tight">
                  Tên sản phẩm
                </h3>
                <div class="flex items-center gap-3 mt-2">
                  <span id="modalPrice" class="text-2xl font-extrabold text-brand-red font-heading">0₫</span>
                  <span id="modalOldPrice" class="text-xs text-gray-400 line-through">0₫</span>
                  <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                    Free Ship Toàn Quốc
                  </span>
                </div>
              </div>

              <!-- Interactive Tabs Header -->
              <div class="flex border-b border-gray-200 pt-1">
                <button onclick="HDC.Components.QuickViewModal.switchTab('specs')" id="tabBtnSpecs" class="py-2 px-3 font-bold border-b-2 border-brand-green text-brand-green transition">
                  Đặc tính & Sợi
                </button>
                <button onclick="HDC.Components.QuickViewModal.switchTab('size')" id="tabBtnSize" class="py-2 px-3 font-bold border-b-2 border-transparent text-gray-400 hover:text-gray-700 transition">
                  Bảng Size Chuẩn
                </button>
                <button onclick="HDC.Components.QuickViewModal.switchTab('policy')" id="tabBtnPolicy" class="py-2 px-3 font-bold border-b-2 border-transparent text-gray-400 hover:text-gray-700 transition">
                  Cam Kết
                </button>
              </div>

              <!-- Tab Content 1: Specs -->
              <div id="tabContentSpecs" class="space-y-2 py-1 text-gray-600">
                <p id="modalDescription" class="leading-relaxed">Mô tả sản phẩm...</p>
                <div class="grid grid-cols-2 gap-2 pt-1">
                  <div class="bg-brand-grayBg p-2.5 rounded-xl border border-gray-100">
                    <div class="font-bold text-brand-green flex items-center gap-1.5"><i class="fa-solid fa-leaf"></i> 100% Sợi Tự Nhiên</div>
                    <div class="text-[10px] text-gray-500 mt-0.5">Kháng khuẩn, phân hủy sinh học</div>
                  </div>
                  <div class="bg-brand-grayBg p-2.5 rounded-xl border border-gray-100">
                    <div class="font-bold text-brand-green flex items-center gap-1.5"><i class="fa-solid fa-wand-magic-sparkles text-brand-gold"></i> Không Cần Là Ủi</div>
                    <div class="text-[10px] text-gray-500 mt-0.5">Tự phẳng nếp gấp sau khi phơi</div>
                  </div>
                </div>
              </div>

              <!-- Tab Content 2: Size Chart -->
              <div id="tabContentSize" class="hidden space-y-2 py-1 text-gray-600">
                <p class="text-[11px] text-gray-500">Thông số form chuẩn may đo cho người Việt Nam:</p>
                <div class="border rounded-xl overflow-hidden text-[11px]">
                  <table class="w-full text-center">
                    <thead class="bg-brand-grayBg font-bold text-gray-700">
                      <tr>
                        <th class="py-1.5 px-2">Size</th>
                        <th class="py-1.5 px-2">Chiều cao</th>
                        <th class="py-1.5 px-2">Cân nặng</th>
                        <th class="py-1.5 px-2">Rộng vai</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                      <tr><td class="py-1.5 font-bold text-brand-green">38 (S)</td><td>158 - 165cm</td><td>50 - 58kg</td><td>42cm</td></tr>
                      <tr><td class="py-1.5 font-bold text-brand-green">39 (M)</td><td>165 - 172cm</td><td>58 - 66kg</td><td>43.5cm</td></tr>
                      <tr><td class="py-1.5 font-bold text-brand-green">40 (L)</td><td>170 - 178cm</td><td>66 - 76kg</td><td>45cm</td></tr>
                      <tr><td class="py-1.5 font-bold text-brand-green">41 (XL)</td><td>175 - 184cm</td><td>76 - 86kg</td><td>46.5cm</td></tr>
                      <tr><td class="py-1.5 font-bold text-brand-green">42 (XXL)</td><td>180 - 192cm</td><td>86 - 100kg</td><td>48cm</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Tab Content 3: Policy -->
              <div id="tabContentPolicy" class="hidden space-y-2 py-1 text-gray-600">
                <div class="p-3 bg-emerald-50 rounded-xl space-y-1.5 border border-emerald-200">
                  <div class="font-bold text-brand-green flex items-center gap-1.5">
                    <i class="fa-solid fa-rotate-left"></i> Đổi size 7 ngày miễn phí tận nhà
                  </div>
                  <p class="text-[11px] text-gray-600">Shipper mang áo mới đến tận nhà để Quý khách thử, hoàn toàn miễn phí 2 chiều.</p>
                </div>
                <div class="p-3 bg-amber-50 rounded-xl space-y-1.5 border border-amber-200">
                  <div class="font-bold text-amber-800 flex items-center gap-1.5">
                    <i class="fa-solid fa-money-bill-transfer"></i> Cam kết hoàn tiền 100%
                  </div>
                  <p class="text-[11px] text-gray-600">Nếu phát hiện sợi tổng hợp pha tạp không đúng cam kết, HDC hoàn lại 100% chi phí.</p>
                </div>
              </div>

              <!-- Size Selector Buttons -->
              <div class="space-y-1.5 pt-2">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-gray-800 text-xs">Chọn kích thước (Size):</span>
                  <button onclick="HDC.Router.navigate('quiz'); HDC.Components.QuickViewModal.close()" class="text-brand-green font-semibold underline text-[11px]">
                    <i class="fa-solid fa-ruler-combined text-brand-gold"></i> Đo size bằng AI &rarr;
                  </button>
                </div>
                <div class="flex gap-2" id="modalSizeButtons">
                  <button onclick="HDC.Components.QuickViewModal.selectSize('S', this)" class="modal-size-btn px-3 py-1.5 border rounded-xl font-bold">S</button>
                  <button onclick="HDC.Components.QuickViewModal.selectSize('M', this)" class="modal-size-btn px-3 py-1.5 border rounded-xl font-bold">M</button>
                  <button onclick="HDC.Components.QuickViewModal.selectSize('L', this)" class="modal-size-btn px-3 py-1.5 border rounded-xl font-bold bg-brand-green text-white shadow">L</button>
                  <button onclick="HDC.Components.QuickViewModal.selectSize('XL', this)" class="modal-size-btn px-3 py-1.5 border rounded-xl font-bold">XL</button>
                  <button onclick="HDC.Components.QuickViewModal.selectSize('XXL', this)" class="modal-size-btn px-3 py-1.5 border rounded-xl font-bold">XXL</button>
                </div>
              </div>

            </div>

            <!-- Action Buttons -->
            <div class="pt-4 border-t flex gap-3">
              <button onclick="HDC.Components.QuickViewModal.addToCart()" class="btn-shimmer flex-1 bg-brand-green hover:bg-brand-greenDark text-white py-3.5 rounded-2xl font-bold uppercase transition flex items-center justify-center gap-2 shadow-lg">
                <i class="fa-solid fa-cart-plus"></i> Thêm Vào Giỏ
              </button>
              <button onclick="HDC.Components.QuickViewModal.buyNow()" class="btn-shimmer flex-1 bg-brand-red hover:bg-brand-redHover text-white py-3.5 rounded-2xl font-bold uppercase transition shadow-lg">
                Mua Ngay
              </button>
            </div>

          </div>

        </div>
      </div>
    `;
  },

  open(productId) {
    const product = HDC.Data.products.find(p => p.id === productId) || HDC.Data.products[0];
    this.currentProduct = product;
    this.selectedSize = 'L';
    this.switchTab('specs');

    const titleEl = document.getElementById('modalTitle');
    const priceEl = document.getElementById('modalPrice');
    const oldPriceEl = document.getElementById('modalOldPrice');
    const imgEl = document.getElementById('modalImg');
    const badgeEl = document.getElementById('modalBadge');
    const catEl = document.getElementById('modalCategory');
    const descEl = document.getElementById('modalDescription');
    const stockEl = document.getElementById('modalStockStatus');

    if (titleEl) titleEl.innerText = product.title;
    if (priceEl) priceEl.innerText = HDC.Utils.formatCurrency(product.price);
    if (oldPriceEl) oldPriceEl.innerText = product.oldPrice ? HDC.Utils.formatCurrency(product.oldPrice) : '';
    if (imgEl) imgEl.src = product.img;
    if (badgeEl) badgeEl.innerText = product.badge || 'Mới';
    if (catEl) catEl.innerText = product.material ? `Chất liệu sợi ${product.material.toUpperCase()}` : 'Thời trang sinh học';
    if (descEl) descEl.innerText = product.description || '100% Sợi sinh học tự nhiên, tự phục hồi phẳng sau khi phơi.';
    if (stockEl) stockEl.innerText = `✓ Còn ${product.stock || 25} sản phẩm`;

    // Reset size buttons
    document.querySelectorAll('.modal-size-btn').forEach(btn => {
      if (btn.innerText.trim() === 'L') {
        btn.className = 'modal-size-btn px-3 py-1.5 border rounded-xl font-bold bg-brand-green text-white shadow';
      } else {
        btn.className = 'modal-size-btn px-3 py-1.5 border rounded-xl font-bold';
      }
    });

    const modal = document.getElementById('quickViewModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  },

  close() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  },

  switchTab(tab) {
    this.activeTab = tab;
    ['specs', 'size', 'policy'].forEach(t => {
      const btn = document.getElementById('tabBtn' + t.charAt(0).toUpperCase() + t.slice(1));
      const content = document.getElementById('tabContent' + t.charAt(0).toUpperCase() + t.slice(1));
      if (btn && content) {
        if (t === tab) {
          btn.className = 'py-2 px-3 font-bold border-b-2 border-brand-green text-brand-green transition';
          content.classList.remove('hidden');
        } else {
          btn.className = 'py-2 px-3 font-bold border-b-2 border-transparent text-gray-400 hover:text-gray-700 transition';
          content.classList.add('hidden');
        }
      }
    });
  },

  selectSize(size, btn) {
    this.selectedSize = size;
    document.querySelectorAll('.modal-size-btn').forEach(b => {
      b.className = 'modal-size-btn px-3 py-1.5 border rounded-xl font-bold';
    });
    if (btn) {
      btn.className = 'modal-size-btn px-3 py-1.5 border rounded-xl font-bold bg-brand-green text-white shadow';
    }
  },

  addToCart() {
    if (!this.currentProduct) return;
    HDC.Store.addToCart(this.currentProduct.id, this.selectedSize, 1);
    this.close();
    HDC.Utils.showToast(`Đã thêm vào giỏ hàng: ${this.currentProduct.title} (Size ${this.selectedSize})!`);
    HDC.Utils.triggerCartBounce();
  },

  buyNow() {
    if (!this.currentProduct) return;
    HDC.Store.addToCart(this.currentProduct.id, this.selectedSize, 1);
    this.close();
    HDC.Router.navigate('checkout');
  }
};
