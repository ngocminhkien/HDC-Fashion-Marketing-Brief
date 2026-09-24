/**
 * HDC Fashion — Checkout View
 * Handles order confirmation, recipient information, VAT e-invoicing, and payment gateways
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.CheckoutView = {
  render() {
    return `
      <div id="view-checkout" class="view-panel hidden animate-fadeIn py-10 bg-gray-50">
        <div class="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div class="pb-6 border-b mb-6 flex items-center justify-between">
            <h1 class="text-2xl font-bold text-gray-900 font-heading uppercase">Thanh Toán Đơn Hàng</h1>
            <button onclick="HDC.Router.navigate('shop')" class="text-xs text-brand-green font-semibold hover:underline">
              &larr; Tiếp tục mua hàng
            </button>
          </div>

          <form onsubmit="HDC.Views.CheckoutView.handleFinalCheckout(event)" class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <!-- Left: Recipient & Payment -->
            <div class="lg:col-span-7 space-y-5 bg-white p-6 rounded-2xl border">
              <h3 class="font-bold text-sm text-gray-900 uppercase">1. Thông tin người nhận hàng</h3>
              <div class="space-y-3 text-xs">
                <div>
                  <label class="block font-semibold mb-1">Họ và tên *</label>
                  <input type="text" required value="Nguyễn Văn A" class="w-full p-2.5 border rounded-lg focus:border-brand-green">
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block font-semibold mb-1">Số điện thoại *</label>
                    <input type="tel" required value="0912345678" class="w-full p-2.5 border rounded-lg focus:border-brand-green">
                  </div>
                  <div>
                    <label class="block font-semibold mb-1">Email</label>
                    <input type="email" value="khachhang@gmail.com" class="w-full p-2.5 border rounded-lg focus:border-brand-green">
                  </div>
                </div>
                <div>
                  <label class="block font-semibold mb-1">Địa chỉ nhận hàng (Số nhà, đường, phường/xã) *</label>
                  <input type="text" required value="Số 88 Phố Huế, Hoàn Kiếm, Hà Nội" class="w-full p-2.5 border rounded-lg focus:border-brand-green">
                </div>
              </div>

              <!-- VAT Invoice -->
              <div class="pt-4 border-t space-y-2">
                <label class="flex items-center gap-2 text-xs font-bold text-gray-800 cursor-pointer">
                  <input type="checkbox" id="chkInvoice" onchange="HDC.Views.CheckoutView.toggleInvoice()" class="rounded text-brand-green">
                  <span>Yêu cầu xuất hóa đơn điện tử VAT Doanh nghiệp (GTGT)</span>
                </label>
                <div id="invoiceFields" class="hidden p-3 bg-gray-50 rounded-lg space-y-2 text-xs border">
                  <input type="text" placeholder="Tên Công ty / Đơn vị" class="w-full p-2 border rounded bg-white">
                  <input type="text" placeholder="Mã số thuế (MST)" class="w-full p-2 border rounded bg-white">
                  <input type="text" placeholder="Địa chỉ đăng ký kinh doanh" class="w-full p-2 border rounded bg-white">
                </div>
              </div>

              <!-- Payment Gateways -->
              <div class="pt-4 border-t space-y-2.5">
                <h3 class="font-bold text-sm text-gray-900 uppercase">2. Chọn phương thức thanh toán</h3>
                <div class="space-y-2 text-xs">
                  <label class="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50 has-[:checked]:border-brand-green has-[:checked]:bg-emerald-50">
                    <input type="radio" name="payMethod" value="cod" checked class="text-brand-green">
                    <div>
                      <span class="font-bold">Thanh toán khi nhận hàng (COD)</span>
                      <p class="text-[11px] text-gray-500">Kiểm tra sản phẩm trước khi thanh toán cho shipper</p>
                    </div>
                  </label>
                  <label class="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50 has-[:checked]:border-brand-green has-[:checked]:bg-emerald-50">
                    <input type="radio" name="payMethod" value="vnpay" class="text-brand-green">
                    <div>
                      <span class="font-bold">Cổng VNPAY / Chuyển khoản QR</span>
                      <p class="text-[11px] text-gray-500">Quét mã QR từ mọi ứng dụng ngân hàng và ví điện tử</p>
                    </div>
                  </label>
                  <label class="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50 has-[:checked]:border-brand-green has-[:checked]:bg-emerald-50">
                    <input type="radio" name="payMethod" value="momo" class="text-brand-green">
                    <div>
                      <span class="font-bold">Ví điện tử MoMo / ZaloPay</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <!-- Right: Order Summary -->
            <div class="lg:col-span-5 space-y-4">
              <div class="bg-white p-6 rounded-2xl border space-y-4">
                <h3 class="font-bold text-sm text-gray-900 uppercase">Tóm tắt đơn hàng</h3>
                <div class="space-y-3 text-xs divide-y divide-gray-100" id="checkoutItemsList">
                  <!-- Rendered dynamically -->
                </div>

                <div class="pt-3 border-t space-y-1.5 text-xs text-gray-600">
                  <div class="flex justify-between">
                    <span>Tạm tính:</span>
                    <span id="checkoutSubtotal">0₫</span>
                  </div>
                  <div class="flex justify-between text-brand-green font-semibold">
                    <span>Phí vận chuyển toàn quốc:</span>
                    <span>MIỄN PHÍ</span>
                  </div>
                  <div class="flex justify-between text-brand-red font-semibold" id="checkoutDiscountRow">
                    <span>Mã giảm giá:</span>
                    <span id="checkoutDiscount">0₫</span>
                  </div>
                  <div class="flex justify-between text-sm font-extrabold text-gray-900 pt-2 border-t">
                    <span>Tổng tiền thanh toán:</span>
                    <span class="text-brand-red text-base" id="checkoutTotal">0₫</span>
                  </div>
                </div>

                <button type="submit" class="w-full bg-brand-red hover:bg-brand-redHover text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition shadow-lg">
                  Xác Nhận Đặt Hàng Ngay
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    `;
  },

  init() {
    HDC.Store.subscribe(() => this.updateCheckoutSummary());
    window.addEventListener('hdc:view-changed', (e) => {
      if (e.detail && e.detail.view === 'checkout') {
        this.updateCheckoutSummary();
      }
    });
  },

  updateCheckoutSummary() {
    const items = HDC.Store.getCart();
    const listEl = document.getElementById('checkoutItemsList');
    const subtotalEl = document.getElementById('checkoutSubtotal');
    const discountEl = document.getElementById('checkoutDiscount');
    const totalEl = document.getElementById('checkoutTotal');

    if (!listEl) return;

    if (items.length === 0) {
      listEl.innerHTML = `<p class="py-4 text-center text-gray-400">Không có sản phẩm nào trong giỏ</p>`;
    } else {
      listEl.innerHTML = items.map(item => `
        <div class="pt-2 flex justify-between">
          <span>${item.title} (${item.size}) x ${item.qty}</span>
          <span class="font-bold">${HDC.Utils.formatCurrency(item.price * item.qty)}</span>
        </div>
      `).join('');
    }

    const subtotal = HDC.Store.getCartSubtotal();
    const discount = HDC.Store.state.activeVoucher ? HDC.Store.state.activeVoucher.discount : 0;
    const total = HDC.Store.getCartTotal();

    if (subtotalEl) subtotalEl.innerText = HDC.Utils.formatCurrency(subtotal);
    if (discountEl) discountEl.innerText = '-' + HDC.Utils.formatCurrency(discount);
    if (totalEl) totalEl.innerText = HDC.Utils.formatCurrency(total);
  },

  toggleInvoice() {
    const box = document.getElementById('invoiceFields');
    const chk = document.getElementById('chkInvoice');
    if (box && chk) {
      box.classList.toggle('hidden', !chk.checked);
    }
  },

  handleFinalCheckout(e) {
    e.preventDefault();
    if (HDC.Store.getCart().length === 0) {
      HDC.Utils.showToast('Giỏ hàng trống!');
      return;
    }

    const randomId = 'HDC-2026-' + Math.floor(1000 + Math.random() * 9000);
    alert(`ĐẶT HÀNG THÀNH CÔNG!\n\nMã đơn của Quý khách: ${randomId}\nNhân viên chăm sóc khách hàng HDC sẽ liên hệ xác nhận trong 15 phút.\nCảm ơn Quý khách đã tin chọn thời trang bền vững HDC Fashion!`);

    HDC.Store.clearCart();
    HDC.Router.navigate('home');
  }
};
