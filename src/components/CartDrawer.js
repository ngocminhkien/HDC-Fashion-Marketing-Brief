/**
 * HDC Fashion — Mini Cart Drawer Component
 * Slides in from the right, lists items, supports voucher inputs, and routes to checkout
 */

window.HDC = window.HDC || {};
window.HDC.Components = window.HDC.Components || {};

window.HDC.Components.CartDrawer = {
  render() {
    return `
      <div id="cartDrawer" class="fixed inset-0 z-50 bg-black/60 hidden justify-end transition-opacity">
        <div class="w-full max-w-md bg-white h-full p-5 flex flex-col justify-between shadow-2xl">
          <div>
            <div class="flex items-center justify-between pb-3 border-b">
              <h3 class="font-bold text-sm text-gray-900 flex items-center gap-2">
                <i class="fa-solid fa-bag-shopping text-brand-green"></i> Giỏ hàng của bạn (<span id="drawerCartCount">0</span>)
              </h3>
              <button onclick="HDC.Components.CartDrawer.close()" class="text-gray-400 hover:text-black text-xl">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div class="my-3 p-2 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 flex items-center gap-2">
              <i class="fa-solid fa-truck-fast text-emerald-600"></i>
              <span>Bạn đã được <strong>MIỄN PHÍ VẬN CHUYỂN</strong> toàn quốc!</span>
            </div>

            <div class="space-y-3 max-h-[50vh] overflow-y-auto pr-1 divide-y divide-gray-100" id="cartDrawerItems">
              <!-- Rendered dynamically -->
            </div>
          </div>

          <div class="border-t pt-4 space-y-3 text-xs">
            <div class="flex gap-2">
              <input type="text" id="cartVoucherInput" placeholder="Mã giảm giá (HDC50K...)" class="border rounded px-3 py-2 text-xs flex-1 uppercase">
              <button onclick="HDC.Components.CartDrawer.applyVoucher()" class="bg-gray-800 text-white px-3 py-2 rounded text-xs font-bold hover:bg-black">Áp dụng</button>
            </div>

            <div class="flex justify-between items-center text-sm font-bold text-gray-900">
              <span>Tổng tiền tạm tính:</span>
              <span id="cartTotalPrice" class="text-brand-red text-base">0₫</span>
            </div>

            <button onclick="HDC.Components.CartDrawer.proceedToCheckout()" class="w-full bg-brand-red hover:bg-brand-redHover text-white py-3 rounded-lg font-bold uppercase tracking-wider text-xs transition shadow-lg flex items-center justify-center gap-2">
              <span>Tiến Hành Đặt Hàng & Thanh Toán</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  init() {
    HDC.Store.subscribe(() => this.updateDrawerContent());
    this.updateDrawerContent();
  },

  open() {
    const el = document.getElementById('cartDrawer');
    if (el) {
      el.classList.remove('hidden');
      el.classList.add('flex');
    }
  },

  close() {
    const el = document.getElementById('cartDrawer');
    if (el) {
      el.classList.add('hidden');
      el.classList.remove('flex');
    }
  },

  updateDrawerContent() {
    const items = HDC.Store.getCart();
    const container = document.getElementById('cartDrawerItems');
    const countEl = document.getElementById('drawerCartCount');
    const totalEl = document.getElementById('cartTotalPrice');

    if (countEl) countEl.innerText = HDC.Store.getCartCount();
    if (totalEl) totalEl.innerText = HDC.Utils.formatCurrency(HDC.Store.getCartTotal());

    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `
        <div class="text-center py-10 text-gray-400 text-xs">
          <i class="fa-solid fa-cart-shopping text-3xl mb-2 text-gray-300"></i>
          <p>Giỏ hàng của bạn đang trống</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map((item, idx) => `
      <div class="pt-3 flex gap-3">
        <img src="${item.img}" alt="${item.title}" class="w-16 h-20 object-cover rounded">
        <div class="flex-1 text-xs space-y-1">
          <h4 class="font-bold text-gray-900 line-clamp-1">${item.title}</h4>
          <p class="text-gray-500">Size: ${item.size} &bull; SL: ${item.qty}</p>
          <div class="flex items-center justify-between pt-1">
            <span class="font-bold text-brand-red">${HDC.Utils.formatCurrency(item.price)}</span>
          </div>
        </div>
        <button onclick="HDC.Store.removeFromCart(${idx})" class="text-gray-400 hover:text-brand-red text-xs p-1" title="Xóa">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `).join('');
  },

  applyVoucher() {
    const input = document.getElementById('cartVoucherInput');
    if (input) {
      HDC.Store.applyVoucher(input.value);
    }
  },

  proceedToCheckout() {
    if (HDC.Store.getCart().length === 0) {
      HDC.Utils.showToast('Giỏ hàng trống, vui lòng chọn sản phẩm!');
      return;
    }
    this.close();
    HDC.Router.navigate('checkout');
  }
};
