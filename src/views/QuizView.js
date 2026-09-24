/**
 * HDC Fashion — Smart Advisor Quiz View
 * Sizing recommendation engine and fabric match based on body shape and work environment
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.QuizView = {
  render() {
    return `
      <div id="view-quiz" class="view-panel hidden animate-fadeIn py-10 bg-brand-grayBg">
        <div class="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div class="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-200 space-y-6">
            <div class="text-center space-y-1">
              <span class="text-xs font-bold text-brand-gold uppercase tracking-wider">HDC Smart Advisor</span>
              <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading uppercase">
                Trợ Lý Tư Vấn Size & Chất Liệu Chuẩn Xác
              </h1>
              <p class="text-xs text-gray-500">Nhập số đo và nhu cầu làm việc để nhận đề xuất trang phục phù hợp nhất</p>
            </div>

            <form onsubmit="HDC.Views.QuizView.handleSubmit(event)" class="space-y-6">
              
              <!-- Step 1: Gender -->
              <div class="space-y-3">
                <label class="block font-bold text-xs text-gray-700 uppercase tracking-wider">1. Giới tính & Form người:</label>
                <div class="grid grid-cols-3 gap-3 text-xs">
                  <label class="border-2 rounded-xl p-3 text-center cursor-pointer hover:border-brand-green transition flex flex-col items-center gap-1.5 has-[:checked]:border-brand-green has-[:checked]:bg-emerald-50">
                    <input type="radio" name="advGender" value="nam" checked class="hidden">
                    <i class="fa-solid fa-person text-xl text-brand-green"></i>
                    <span class="font-bold">Nam giới</span>
                  </label>
                  <label class="border-2 rounded-xl p-3 text-center cursor-pointer hover:border-brand-green transition flex flex-col items-center gap-1.5 has-[:checked]:border-brand-green has-[:checked]:bg-emerald-50">
                    <input type="radio" name="advGender" value="nu" class="hidden">
                    <i class="fa-solid fa-person-dress text-xl text-pink-600"></i>
                    <span class="font-bold">Nữ giới</span>
                  </label>
                  <label class="border-2 rounded-xl p-3 text-center cursor-pointer hover:border-brand-green transition flex flex-col items-center gap-1.5 has-[:checked]:border-brand-green has-[:checked]:bg-emerald-50">
                    <input type="radio" name="advGender" value="kids" class="hidden">
                    <i class="fa-solid fa-child text-xl text-amber-500"></i>
                    <span class="font-bold">Học sinh / Trẻ em</span>
                  </label>
                </div>
              </div>

              <!-- Step 2: Measurements -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold text-xs text-gray-700 mb-1">Chiều cao (cm):</label>
                  <input type="number" id="advHeight" required min="100" max="210" value="172" class="w-full border rounded-xl p-3 text-sm font-semibold focus:border-brand-green focus:outline-none">
                </div>
                <div>
                  <label class="block font-bold text-xs text-gray-700 mb-1">Cân nặng (kg):</label>
                  <input type="number" id="advWeight" required min="20" max="150" value="68" class="w-full border rounded-xl p-3 text-sm font-semibold focus:border-brand-green focus:outline-none">
                </div>
              </div>

              <!-- Step 3: Pain Points & Environment -->
              <div class="space-y-3">
                <label class="block font-bold text-xs text-gray-700 uppercase tracking-wider">2. Môi trường & Nỗi đau cần giải quyết nhất:</label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <label class="border p-3 rounded-xl flex items-start gap-2.5 cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" name="advNeed" value="no-iron" checked class="mt-0.5 text-brand-green rounded">
                    <div>
                      <p class="font-bold text-gray-800">Không có thời gian là ủi</p>
                      <p class="text-[11px] text-gray-500">Cần áo giũ là phẳng phiu ngay lập tức</p>
                    </div>
                  </label>
                  <label class="border p-3 rounded-xl flex items-start gap-2.5 cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" name="advNeed" value="sweat" checked class="mt-0.5 text-brand-green rounded">
                    <div>
                      <p class="font-bold text-gray-800">Dễ đổ mồ hôi & sợ mùi</p>
                      <p class="text-[11px] text-gray-500">Cần vải sợi tự nhiên kháng khuẩn</p>
                    </div>
                  </label>
                  <label class="border p-3 rounded-xl flex items-start gap-2.5 cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" name="advNeed" value="outdoor" class="mt-0.5 text-brand-green rounded">
                    <div>
                      <p class="font-bold text-gray-800">Di chuyển ngoài trời / Chơi Golf</p>
                      <p class="text-[11px] text-gray-500">Cần bảo vệ chống tia UV 50+</p>
                    </div>
                  </label>
                  <label class="border p-3 rounded-xl flex items-start gap-2.5 cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" name="advNeed" value="meeting" class="mt-0.5 text-brand-green rounded">
                    <div>
                      <p class="font-bold text-gray-800">Gặp đối tác & ngoại giao</p>
                      <p class="text-[11px] text-gray-500">Cần sự ấn tượng từ họa tiết văn hóa</p>
                    </div>
                  </label>
                </div>
              </div>

              <button type="submit" class="w-full bg-brand-green hover:bg-brand-greenDark text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <span>Phân Tích & Đề Xuất Trang Phục Chuẩn Xác</span>
              </button>
            </form>

            <!-- Result Card -->
            <div id="advisorResult" class="hidden p-6 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl border border-emerald-200 space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center text-xl">
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <div>
                  <h3 class="font-bold text-base text-gray-900">Kết Quả Phân Tích Thông Minh</h3>
                  <p class="text-xs text-gray-600">Độ khớp vóc dáng đạt <strong class="text-brand-green">98.5%</strong></p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div class="bg-white p-3.5 rounded-xl border">
                  <p class="text-gray-400 font-bold uppercase text-[10px]">Kích thước khuyên dùng:</p>
                  <p class="text-xl font-extrabold text-brand-red mt-1" id="resSize">Size L (Slim-fit)</p>
                  <p class="text-gray-500 text-[11px] mt-0.5">Vừa vặn vai, tà áo chuẩn sơ vin hoặc thả tự nhiên.</p>
                </div>
                <div class="bg-white p-3.5 rounded-xl border">
                  <p class="text-gray-400 font-bold uppercase text-[10px]">Chất liệu tối ưu nhất:</p>
                  <p class="text-sm font-bold text-brand-green mt-1" id="resFabric">Sợi Sen Tự Nhiên & Bamboo</p>
                  <p class="text-gray-500 text-[11px] mt-0.5">Thoáng mát, kháng khuẩn tự nhiên, không cần là ủi.</p>
                </div>
              </div>

              <div class="pt-2 flex gap-3">
                <button onclick="HDC.Router.navigate('shop')" class="flex-1 bg-brand-green text-white py-2.5 rounded-lg text-xs font-bold uppercase hover:bg-brand-greenDark">
                  Xem Các Mẫu Phù Hợp &rarr;
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    `;
  },

  handleSubmit(e) {
    e.preventDefault();
    const h = parseInt(document.getElementById('advHeight').value);
    const w = parseInt(document.getElementById('advWeight').value);

    let size = "Size M (Vừa vặn)";
    if (w < 55) size = "Size S (Thon gọn)";
    else if (w >= 55 && w < 65) size = "Size M (Chuẩn người)";
    else if (w >= 65 && w < 75) size = "Size L (Rộng rãi nhẹ)";
    else if (w >= 75 && w < 85) size = "Size XL (Thoải mái)";
    else size = "Size XXL (Form rộng)";

    document.getElementById('resSize').innerText = size;
    const resultBox = document.getElementById('advisorResult');
    if (resultBox) {
      resultBox.classList.remove('hidden');
      resultBox.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
