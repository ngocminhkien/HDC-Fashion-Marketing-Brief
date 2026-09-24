/**
 * HDC Fashion — Order Tracking & 7-Day Free Returns View
 * Track shipment progress and submit return/exchange requests
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.TrackingView = {
  render() {
    return `
      <div id="view-tracking" class="view-panel hidden animate-fadeIn py-10 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          
          <div class="text-center space-y-1">
            <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading uppercase">
              Trung Tâm Tra Cứu Đơn Hàng & Đổi Trả 7 Ngày
            </h1>
            <p class="text-xs text-gray-500">Kiểm tra lộ trình giao hàng trực tuyến hoặc gửi yêu cầu đổi size miễn phí tận nhà</p>
          </div>

          <!-- 2 Tab Toggle -->
          <div class="flex border-b">
            <button onclick="HDC.Views.TrackingView.switchTab('search')" id="tabTrackSearch" class="flex-1 py-3 text-xs sm:text-sm font-bold text-center border-b-2 border-brand-green text-brand-green">
              <i class="fa-solid fa-magnifying-glass-location mr-1"></i> Tra cứu lộ trình vận chuyển
            </button>
            <button onclick="HDC.Views.TrackingView.switchTab('return')" id="tabTrackReturn" class="flex-1 py-3 text-xs sm:text-sm font-bold text-center border-b-2 border-transparent text-gray-400 hover:text-gray-700">
              <i class="fa-solid fa-rotate-left mr-1"></i> Yêu cầu đổi size / Trả hàng
            </button>
          </div>

          <!-- TAB 1: SHIPMENT TRACKING -->
          <div id="trackingTabSearch" class="space-y-6">
            <div class="bg-gray-50 p-6 rounded-2xl border flex flex-col sm:flex-row gap-3">
              <input type="text" id="trackOrderInput" placeholder="Nhập mã đơn (VD: HDC-2026-8899) hoặc Số điện thoại..." class="flex-1 border rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-green bg-white">
              <button onclick="HDC.Views.TrackingView.checkOrder()" class="bg-brand-green hover:bg-brand-greenDark text-white text-xs font-bold px-6 py-3 rounded-xl uppercase transition shrink-0">
                Kiểm tra ngay
              </button>
            </div>

            <!-- Not Found State -->
            <div id="trackingNotFoundBox" class="hidden bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center space-y-2 animate-fadeIn">
              <div class="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xl mx-auto">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </div>
              <h4 class="font-bold text-sm text-gray-900">Không tìm thấy đơn hàng</h4>
              <p class="text-xs text-gray-600 max-w-md mx-auto">
                Không tìm thấy đơn hàng với mã <strong id="notFoundCode" class="text-brand-red"></strong>. Vui lòng kiểm tra lại mã vận đơn hoặc liên hệ hotline <a href="tel:1900888999" class="font-bold text-brand-green underline">1900 888 999</a> để được hỗ trợ tra cứu trực tiếp.
              </p>
            </div>

            <!-- Timeline Card -->
            <div id="trackingResultBox" class="hidden bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-6 animate-fadeIn">
              <div class="flex flex-col sm:flex-row justify-between pb-4 border-b gap-2">
                <div>
                  <span class="text-xs text-gray-400 font-medium">Mã đơn hàng:</span>
                  <span class="text-sm font-bold text-brand-green ml-1" id="trackOrderCodeDisplay">HDC-2026-8899</span>
                </div>
                <div>
                  <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-bold">
                    🚚 Đang vận chuyển tới Quý khách
                  </span>
                </div>
              </div>

              <!-- Steps Progress -->
              <div class="grid grid-cols-4 gap-2 text-center text-xs">
                <div class="space-y-1">
                  <div class="w-8 h-8 rounded-full bg-brand-green text-white mx-auto flex items-center justify-center font-bold text-xs"><i class="fa-solid fa-check"></i></div>
                  <p class="font-bold text-gray-800 text-[11px]">Đã nhận đơn</p>
                  <p class="text-[10px] text-gray-400">08:30 24/09</p>
                </div>
                <div class="space-y-1">
                  <div class="w-8 h-8 rounded-full bg-brand-green text-white mx-auto flex items-center justify-center font-bold text-xs"><i class="fa-solid fa-check"></i></div>
                  <p class="font-bold text-gray-800 text-[11px]">Đóng gói chuẩn</p>
                  <p class="text-[10px] text-gray-400">10:15 24/09</p>
                </div>
                <div class="space-y-1">
                  <div class="w-8 h-8 rounded-full bg-brand-green text-white mx-auto flex items-center justify-center font-bold text-xs animate-pulse">🚚</div>
                  <p class="font-bold text-brand-green text-[11px]">Đang giao hàng</p>
                  <p class="text-[10px] text-emerald-600 font-medium">Dự kiến hôm nay</p>
                </div>
                <div class="space-y-1">
                  <div class="w-8 h-8 rounded-full bg-gray-200 text-gray-400 mx-auto flex items-center justify-center font-bold text-xs"><i class="fa-solid fa-house"></i></div>
                  <p class="font-medium text-gray-400 text-[11px]">Giao thành công</p>
                  <p class="text-[10px] text-gray-400">Chờ nhận</p>
                </div>
              </div>

              <div class="p-4 bg-brand-grayBg rounded-xl text-xs space-y-1">
                <p><strong>Người nhận:</strong> Quý khách hàng HDC</p>
                <p><strong>Địa chỉ:</strong> Tòa nhà Landmark, Ba Đình, Hà Nội</p>
                <p><strong>Sản phẩm:</strong> Sơ mi Sợi Sen Cao Cấp (Size L, Trắng) x 1</p>
              </div>
            </div>
          </div>

          <!-- TAB 2: FREE RETURNS REQUEST FORM -->
          <div id="trackingTabReturn" class="hidden space-y-6">
            <form onsubmit="HDC.Views.TrackingView.handleReturnSubmit(event)" class="bg-gray-50 p-6 rounded-2xl border space-y-4 text-xs">
              <h3 class="font-bold text-sm text-gray-900 uppercase">Gửi Yêu Cầu Đổi Size / Trả Hàng Tận Nơi</h3>
              <p class="text-gray-500">HDC hỗ trợ đổi size miễn phí tận nhà trong vòng 7 ngày kể từ khi nhận hàng.</p>
              
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block font-semibold mb-1">Mã đơn hàng *</label>
                  <input type="text" required placeholder="HDC-xxxx-xxxx" class="w-full p-2.5 border rounded-lg bg-white">
                </div>
                <div>
                  <label class="block font-semibold mb-1">Số điện thoại đặt hàng *</label>
                  <input type="tel" required placeholder="09xx xxx xxx" class="w-full p-2.5 border rounded-lg bg-white">
                </div>
              </div>

              <div>
                <label class="block font-semibold mb-1">Lý do đổi / trả *</label>
                <select class="w-full p-2.5 border rounded-lg bg-white">
                  <option>Đổi sang size nhỏ hơn</option>
                  <option>Đổi sang size lớn hơn</option>
                  <option>Đổi sang màu sắc / sản phẩm khác</option>
                  <option>Sản phẩm có lỗi từ nhà sản xuất</option>
                </select>
              </div>

              <div>
                <label class="block font-semibold mb-1">Ghi chú yêu cầu đổi mẫu chi tiết</label>
                <textarea rows="3" placeholder="Ví dụ: Áo mặc hơi rộng vai, muốn đổi từ size XL sang size L..." class="w-full p-2.5 border rounded-lg bg-white"></textarea>
              </div>

              <button type="submit" class="bg-brand-gold hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl uppercase transition">
                Gửi Yêu Cầu Đổi Trả Miễn Phí
              </button>
            </form>
          </div>

        </div>
      </div>
    `;
  },

  switchTab(tab) {
    const searchPanel = document.getElementById('trackingTabSearch');
    const returnPanel = document.getElementById('trackingTabReturn');
    const searchBtn = document.getElementById('tabTrackSearch');
    const returnBtn = document.getElementById('tabTrackReturn');

    if (tab === 'search') {
      searchPanel?.classList.remove('hidden');
      returnPanel?.classList.add('hidden');
      searchBtn?.classList.add('border-brand-green', 'text-brand-green');
      returnBtn?.classList.remove('border-brand-green', 'text-brand-green');
    } else {
      searchPanel?.classList.add('hidden');
      returnPanel?.classList.remove('hidden');
      returnBtn?.classList.add('border-brand-green', 'text-brand-green');
      searchBtn?.classList.remove('border-brand-green', 'text-brand-green');
    }
  },

  checkOrder() {
    const input = document.getElementById('trackOrderInput');
    const val = (input ? input.value : '').trim();
    const resultBox = document.getElementById('trackingResultBox');
    const notFoundBox = document.getElementById('trackingNotFoundBox');
    const notFoundCode = document.getElementById('notFoundCode');
    const codeDisplay = document.getElementById('trackOrderCodeDisplay');

    if (!val) {
      HDC.Utils.showToast('Vui lòng nhập mã đơn hàng!');
      return;
    }

    // Demo valid matching codes: HDC-2026-8899 or HDC-2026-xxxx
    const upper = val.toUpperCase();
    if (upper === 'HDC-2026-8899' || upper.startsWith('HDC-2026') || upper === '0912345678') {
      if (codeDisplay) codeDisplay.innerText = upper;
      resultBox?.classList.remove('hidden');
      notFoundBox?.classList.add('hidden');
      HDC.Utils.showToast(`Đã tìm thấy lộ trình đơn hàng ${upper}!`);
    } else {
      resultBox?.classList.add('hidden');
      if (notFoundCode) notFoundCode.innerText = `"${val}"`;
      notFoundBox?.classList.remove('hidden');
    }
  },

  handleReturnSubmit(e) {
    e.preventDefault();
    HDC.Utils.showToast('Yêu cầu đổi trả đã được gửi thành công! HDC sẽ điều phối shipper đổi size trong 24h.');
    e.target.reset();
  }
};
