/**
 * HDC Fashion — Checkout View
 * Handles order confirmation, recipient information, VAT e-invoicing, promo vouchers, and payment gateways
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
                  <input type="text" id="checkoutCustName" required placeholder="Họ và tên người nhận..." class="w-full p-2.5 border rounded-lg focus:border-brand-green focus:outline-none">
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block font-semibold mb-1">Số điện thoại *</label>
                    <input type="tel" id="checkoutCustPhone" required placeholder="Ví dụ: 0912 345 678" class="w-full p-2.5 border rounded-lg focus:border-brand-green focus:outline-none">
                  </div>
                  <div>
                    <label class="block font-semibold mb-1">Email</label>
                    <input type="email" id="checkoutCustEmail" placeholder="email@example.com (để nhận hóa đơn)" class="w-full p-2.5 border rounded-lg focus:border-brand-green focus:outline-none">
                  </div>
                </div>
                <div>
                  <label class="block font-semibold mb-1">Địa chỉ nhận hàng (Số nhà, đường, phường/xã) *</label>
                  <input type="text" id="checkoutCustAddress" required placeholder="Số nhà, tên đường, phường/xã, quận/huyện..." class="w-full p-2.5 border rounded-lg focus:border-brand-green focus:outline-none">
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

            <!-- Right: Order Summary & Voucher -->
            <div class="lg:col-span-5 space-y-4">
              <div class="bg-white p-6 rounded-2xl border space-y-4 shadow-sm">
                <h3 class="font-bold text-sm text-gray-900 uppercase">Tóm tắt đơn hàng</h3>
                <div class="space-y-3 text-xs divide-y divide-gray-100" id="checkoutItemsList">
                  <!-- Rendered dynamically -->
                </div>

                <!-- Voucher Promotion Box -->
                <div class="pt-4 border-t space-y-2">
                  <h4 class="font-bold text-xs text-gray-900 uppercase">Mã giảm giá / Voucher</h4>
                  <div class="flex gap-2">
                    <input type="text" id="voucherInputCheckout" placeholder="Nhập mã (VD: HDC50K, HDC100K)" class="flex-1 p-2 border rounded-lg text-xs uppercase focus:border-brand-green focus:outline-none">
                    <button type="button" onclick="HDC.Views.CheckoutView.applyVoucher()" class="bg-brand-green text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-greenDark transition">
                      Áp dụng
                    </button>
                  </div>
                  <p id="voucherMsg" class="text-[11px] hidden"></p>
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

      <!-- ORDER SUCCESS MODAL (PREMIUM & NO JAVASCRIPT ALERT) -->
      <div id="checkoutSuccessModal" class="fixed inset-0 z-50 bg-black/60 hidden items-center justify-center p-4">
        <div class="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-center space-y-5 animate-fadeIn shadow-2xl relative">
          <div class="w-16 h-16 bg-emerald-100 text-brand-green rounded-full flex items-center justify-center text-3xl mx-auto shadow-inner">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div>
            <span class="text-[10px] font-bold tracking-widest text-brand-gold uppercase">HDC Fashion trân trọng cảm ơn</span>
            <h3 class="text-xl font-bold text-gray-900 mt-1 font-heading">ĐẶT HÀNG THÀNH CÔNG!</h3>
            <p class="text-xs text-gray-500 mt-1">Đơn hàng của Quý khách đã được ghi nhận trên hệ thống và chuyển sang bộ phận điều phối đóng gói.</p>
          </div>
          <div class="bg-brand-grayBg p-4 rounded-2xl text-xs space-y-2 text-left border">
            <div class="flex justify-between">
              <span class="text-gray-500">Mã đơn hàng:</span>
              <span id="successOrderId" class="font-extrabold text-brand-green">HDC-2026-8899</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Người nhận:</span>
              <span id="successOrderCust" class="font-bold text-gray-800">Nguyễn Văn A</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Tổng thanh toán:</span>
              <span id="successOrderTotal" class="font-bold text-brand-red">0₫</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Phương thức:</span>
              <span id="successOrderMethod" class="font-medium text-gray-700">COD (Kiểm hàng thanh toán)</span>
            </div>
          </div>
          <p class="text-[11px] text-gray-400">Chuyên viên chăm sóc khách hàng HDC sẽ liên hệ xác nhận trong vòng 15 phút làm việc.</p>
          <div class="flex gap-2">
            <button onclick="HDC.Views.CheckoutView.closeSuccessModalAndGoHome()" class="w-full bg-brand-green hover:bg-brand-greenDark text-white font-bold py-3 rounded-xl text-xs uppercase transition shadow">
              Về Trang Chủ
            </button>
          </div>
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

  applyVoucher() {
    const input = document.getElementById('voucherInputCheckout');
    const msg = document.getElementById('voucherMsg');
    if (!input || !msg) return;

    const code = (input.value || '').trim().toUpperCase();
    const subtotal = HDC.Store.getCartSubtotal();

    msg.classList.remove('hidden', 'text-emerald-600', 'text-brand-red');

    if (!code) {
      msg.innerText = 'Vui lòng nhập mã voucher!';
      msg.classList.add('text-brand-red');
      msg.classList.remove('hidden');
      return;
    }

    if (code === 'HDC50K') {
      if (subtotal < 500000) {
        msg.innerText = `Mã HDC50K yêu cầu đơn tối thiểu 500.000₫ (hiện tại: ${HDC.Utils.formatCurrency(subtotal)})`;
        msg.classList.add('text-brand-red');
        msg.classList.remove('hidden');
        return;
      }
      HDC.Store.state.activeVoucher = { code: 'HDC50K', discount: 50000 };
      HDC.Store.notify();
      msg.innerText = '✓ Áp dụng mã HDC50K thành công: Giảm 50.000₫!';
      msg.classList.add('text-emerald-600');
      msg.classList.remove('hidden');
    } else if (code === 'HDC100K') {
      if (subtotal < 1000000) {
        msg.innerText = `Mã HDC100K yêu cầu đơn tối thiểu 1.000.000₫ (hiện tại: ${HDC.Utils.formatCurrency(subtotal)})`;
        msg.classList.add('text-brand-red');
        msg.classList.remove('hidden');
        return;
      }
      HDC.Store.state.activeVoucher = { code: 'HDC100K', discount: 100000 };
      HDC.Store.notify();
      msg.innerText = '✓ Áp dụng mã HDC100K thành công: Giảm 100.000₫!';
      msg.classList.add('text-emerald-600');
      msg.classList.remove('hidden');
    } else {
      msg.innerText = 'Mã giảm giá không hợp lệ hoặc đã hết hạn!';
      msg.classList.add('text-brand-red');
      msg.classList.remove('hidden');
    }
  },

  handleFinalCheckout(e) {
    e.preventDefault();
    if (HDC.Store.getCart().length === 0) {
      HDC.Utils.showToast('Giỏ hàng trống! Vui lòng chọn sản phẩm trước khi thanh toán.');
      return;
    }

    const name = document.getElementById('checkoutCustName')?.value || 'Quý khách';
    const total = HDC.Utils.formatCurrency(HDC.Store.getCartTotal());
    const randomId = 'HDC-2026-' + Math.floor(1000 + Math.random() * 9000);

    const methodRadio = document.querySelector('input[name="payMethod"]:checked');
    let methodText = 'COD (Thanh toán khi nhận hàng)';
    if (methodRadio && methodRadio.value === 'vnpay') methodText = 'Cổng VNPAY / Chuyển khoản QR';
    if (methodRadio && methodRadio.value === 'momo') methodText = 'Ví điện tử MoMo / ZaloPay';

    const modalIdEl = document.getElementById('successOrderId');
    const modalCustEl = document.getElementById('successOrderCust');
    const modalTotalEl = document.getElementById('successOrderTotal');
    const modalMethodEl = document.getElementById('successOrderMethod');

    if (modalIdEl) modalIdEl.innerText = randomId;
    if (modalCustEl) modalCustEl.innerText = name;
    if (modalTotalEl) modalTotalEl.innerText = total;
    if (modalMethodEl) modalMethodEl.innerText = methodText;

    const modal = document.getElementById('checkoutSuccessModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    HDC.Store.clearCart();
  },

  closeSuccessModalAndGoHome() {
    const modal = document.getElementById('checkoutSuccessModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
    HDC.Router.navigate('home');
  }
};
