/**
 * HDC Fashion — Quick View Modal Component
 * Displays product image gallery, size selector, fabric benefits, and instant buy buttons
 */

window.HDC = window.HDC || {};
window.HDC.Components = window.HDC.Components || {};

window.HDC.Components.QuickViewModal = {
  currentProduct: null,
  selectedSize: 'L',

  render() {
    return `
      <div id="quickViewModal" class="fixed inset-0 z-50 bg-black/60 hidden items-center justify-center p-4 backdrop-blur-sm">
        <div class="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-fadeIn flex flex-col md:flex-row max-h-[90vh]">
          <button onclick="HDC.Components.QuickViewModal.close()" class="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <!-- Image Left -->
          <div class="md:w-1/2 bg-gray-100 relative">
            <img id="modalImg" src="" alt="Sản phẩm HDC" class="w-full h-64 md:h-full object-cover">
            <span id="modalBadge" class="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
              Chất liệu xanh
            </span>
          </div>

          <!-- Info Right -->
          <div class="md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto space-y-4 text-xs">
            <div>
              <span id="modalCategory" class="text-xs font-bold text-brand-gold uppercase tracking-wider">Sơ mi cao cấp</span>
              <h3 id="modalTitle" class="text-lg font-bold text-gray-900 mt-1 leading-snug">Tên sản phẩm</h3>
              <div class="flex items-center gap-3 mt-2">
                <span id="modalPrice" class="text-xl font-bold text-brand-red">0₫</span>
                <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Free Ship toàn quốc</span>
              </div>

              <div class="my-3 p-2.5 bg-brand-cream rounded-lg space-y-1 text-gray-700 border border-brand-border">
                <p><i class="fa-solid fa-check text-brand-green mr-1"></i> 100% Sợi tự nhiên, kháng khuẩn</p>
                <p><i class="fa-solid fa-check text-brand-green mr-1"></i> <strong>Không cần là ủi</strong>, tự phẳng khi phơi</p>
                <p><i class="fa-solid fa-check text-brand-green mr-1"></i> Đổi size 7 ngày miễn phí tận nhà</p>
              </div>

              <!-- Sizes -->
              <div class="space-y-1 pt-2">
                <div class="flex justify-between items-center">
                  <span class="font-bold text-gray-700">Chọn Size:</span>
                  <button onclick="HDC.Router.navigate('quiz'); HDC.Components.QuickViewModal.close()" class="text-brand-green font-semibold underline text-[11px]">
                    Trợ lý đo size &rarr;
                  </button>
                </div>
                <div class="flex gap-2" id="modalSizeButtons">
                  <button onclick="HDC.Components.QuickViewModal.selectSize('S', this)" class="modal-size-btn px-3 py-1.5 border rounded font-semibold">S</button>
                  <button onclick="HDC.Components.QuickViewModal.selectSize('M', this)" class="modal-size-btn px-3 py-1.5 border rounded font-semibold">M</button>
                  <button onclick="HDC.Components.QuickViewModal.selectSize('L', this)" class="modal-size-btn px-3 py-1.5 border rounded font-semibold bg-brand-green text-white">L</button>
                  <button onclick="HDC.Components.QuickViewModal.selectSize('XL', this)" class="modal-size-btn px-3 py-1.5 border rounded font-semibold">XL</button>
                  <button onclick="HDC.Components.QuickViewModal.selectSize('XXL', this)" class="modal-size-btn px-3 py-1.5 border rounded font-semibold">XXL</button>
                </div>
              </div>
            </div>

            <div class="pt-3 border-t flex gap-2">
              <button onclick="HDC.Components.QuickViewModal.addToCart()" class="flex-1 bg-brand-green hover:bg-brand-greenDark text-white py-3 rounded-lg font-bold uppercase transition flex items-center justify-center gap-1.5 shadow">
                <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
              </button>
              <button onclick="HDC.Components.QuickViewModal.buyNow()" class="flex-1 bg-brand-red hover:bg-brand-redHover text-white py-3 rounded-lg font-bold uppercase transition shadow">
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

    document.getElementById('modalTitle').innerText = product.title;
    document.getElementById('modalPrice').innerText = HDC.Utils.formatCurrency(product.price);
    document.getElementById('modalImg').src = product.img;
    document.getElementById('modalBadge').innerText = product.badge || 'Mới';
    document.getElementById('modalCategory').innerText = product.material ? `Chất liệu sợi ${product.material.toUpperCase()}` : 'Thời trang xanh';

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

  selectSize(size, btn) {
    this.selectedSize = size;
    document.querySelectorAll('.modal-size-btn').forEach(b => {
      b.classList.remove('bg-brand-green', 'text-white');
    });
    btn.classList.add('bg-brand-green', 'text-white');
  },

  addToCart() {
    if (!this.currentProduct) return;
    HDC.Store.addToCart(this.currentProduct, this.selectedSize);
    this.close();
    HDC.Components.CartDrawer.open();
  },

  buyNow() {
    if (!this.currentProduct) return;
    HDC.Store.addToCart(this.currentProduct, this.selectedSize);
    this.close();
    HDC.Router.navigate('checkout');
  }
};
