/**
 * HDC Fashion — Brand Story & Heritage View (AboutView)
 * Storytelling: "Từ Phù Sa Đồng Tháp Đến Phòng Họp Tầng 30",
 * The "91 Giờ/Năm" time-saving philosophy, 3 core pillars, timeline, and eco-manifesto
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.AboutView = {
  render() {
    return `
      <div id="view-about" class="view-panel hidden animate-fadeIn py-10 bg-white">
        
        <!-- 1. BRAND STORY HERO -->
        <section class="relative overflow-hidden bg-gradient-to-b from-[#f4f7f4] via-white to-white py-12 lg:py-20 border-b border-gray-100">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
            <div class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              <span class="text-xs font-bold text-brand-green uppercase tracking-widest font-heading">
                Câu Chuyện Thương Hiệu HDC Fashion
              </span>
            </div>

            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-greenDark font-serif leading-tight">
              Từ Phù Sa Đồng Tháp <br class="hidden sm:inline">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-700 to-brand-gold">
                Đến Phòng Họp Tầng 30
              </span>
            </h1>

            <p class="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
              <em>"Từ mảnh đất phù sa này, một chiếc áo ra đời — mang theo hơi thở của đất, của người, của văn hóa ngàn năm và khí chất của người dẫn đầu."</em>
            </p>

            <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button onclick="HDC.Router.navigate('shop')" class="btn-shimmer bg-brand-green hover:bg-brand-greenDark text-white font-bold text-xs uppercase px-8 py-3.5 rounded-2xl shadow-lg transition flex items-center gap-2">
                <span>Khám Phá Bộ Sưu Tập</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </button>
              <button onclick="HDC.Router.navigate('b2b')" class="bg-white hover:bg-emerald-50 text-brand-green border-2 border-brand-green/60 font-bold text-xs uppercase px-7 py-3 rounded-2xl shadow-sm transition flex items-center gap-2">
                <i class="fa-solid fa-briefcase text-xs"></i>
                <span>Đồng Phục Doanh Nghiệp</span>
              </button>
            </div>
          </div>
        </section>

        <!-- 2. BÀI TOÁN 91 GIỜ / NĂM — NỖI ĐAU & GIẢI PHÁP -->
        <section class="py-16 bg-brand-cream/40 border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-5xl mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div class="md:col-span-5 text-center md:text-left space-y-4">
                <span class="text-xs font-bold text-brand-gold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Triết Lý Thời Gian Của Doanh Nhân
                </span>
                <div class="text-5xl sm:text-6xl font-black text-brand-green font-heading leading-none">
                  91 Giờ
                </div>
                <h3 class="text-xl font-bold text-gray-900 font-serif">
                  Là thời gian bạn mất cho bàn là mỗi năm. Đã đến lúc đòi lại!
                </h3>
                <p class="text-xs text-gray-600 leading-relaxed">
                  15 phút mỗi sáng × 365 ngày = <strong>91 giờ/năm</strong>. Số thời gian đó đủ để bạn hoàn thành một khóa MBA ngắn hạn, đọc trọn 18 cuốn sách chiến lược, hay đơn giản là tận hưởng bữa sáng trọn vẹn bên gia đình.
                </p>
              </div>

              <div class="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xl space-y-4">
                <h4 class="font-bold text-sm text-brand-green uppercase tracking-wider font-heading border-b pb-3">
                  ✦ Cam Kết Đột Phá Từ HDC Fashion:
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-700">
                  <div class="p-4 rounded-2xl bg-brand-grayBg border border-gray-100 space-y-1.5">
                    <div class="text-brand-green font-bold text-sm flex items-center gap-1.5">
                      <i class="fa-solid fa-wand-magic-sparkles text-brand-gold"></i> Tự Phẳng 98%
                    </div>
                    <p class="text-gray-500">Giặt xong treo phơi, cấu trúc sợi sinh học tự căng phẳng nếp gấp. Lấy áo ra mặc, bước đi tự tin.</p>
                  </div>
                  <div class="p-4 rounded-2xl bg-brand-grayBg border border-gray-100 space-y-1.5">
                    <div class="text-brand-green font-bold text-sm flex items-center gap-1.5">
                      <i class="fa-solid fa-temperature-arrow-down text-cyan-600"></i> Hạ Nhiệt 2.8°C
                    </div>
                    <p class="text-gray-500">Thớ sợi vi xốp thông minh liên tục giải phóng nhiệt ẩm, mát lạnh tức thì suốt ngày dài làm việc.</p>
                  </div>
                  <div class="p-4 rounded-2xl bg-brand-grayBg border border-gray-100 space-y-1.5">
                    <div class="text-brand-green font-bold text-sm flex items-center gap-1.5">
                      <i class="fa-solid fa-shield-virus text-emerald-600"></i> Kháng Khuẩn 99.8%
                    </div>
                    <p class="text-gray-500">Hợp chất tự nhiên triệt tiêu vi khuẩn gây mùi. Bay 5 tiếng bước xuống áo vẫn thơm mát.</p>
                  </div>
                  <div class="p-4 rounded-2xl bg-brand-grayBg border border-gray-100 space-y-1.5">
                    <div class="text-brand-green font-bold text-sm flex items-center gap-1.5">
                      <i class="fa-solid fa-feather text-purple-600"></i> Seamless 4D
                    </div>
                    <p class="text-gray-500">Loại bỏ hoàn toàn đường may thô cọ xát ở nẹp và cổ áo, êm ái như làn da thứ hai.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- 3. HÀNH TRÌNH PHÁT TRIỂN & CỘT MỐC DI SẢN -->
        <section class="py-16 bg-white border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
            
            <div class="text-center space-y-2 max-w-2xl mx-auto">
              <span class="text-xs font-bold text-brand-gold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                ✦ Di Sản & Đột Phá
              </span>
              <h2 class="text-3xl font-extrabold text-brand-greenDark font-serif">
                Hành Trình Kiến Tạo Vị Thế
              </h2>
              <p class="text-xs text-gray-500">Những mốc son khẳng định năng lực và uy tín của HDC Fashion</p>
            </div>

            <div class="relative border-l-2 border-brand-green/30 ml-4 sm:ml-32 space-y-10">
              
              <!-- Milestone 1 -->
              <div class="relative pl-8 sm:pl-10">
                <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-brand-green border-4 border-white shadow"></div>
                <div class="sm:absolute sm:-left-32 sm:top-0 text-xs font-extrabold text-brand-green font-heading uppercase">Khởi Nguyên</div>
                <h4 class="text-base font-bold text-gray-900">Di Sản May Đo Truyền Thống</h4>
                <p class="text-xs text-gray-600 mt-1 max-w-xl">
                  Bắt đầu từ xưởng may đo âu phục thủ công gia truyền, tích lũy hơn 30 năm kinh nghiệm xử lý phom dáng chuẩn mực cho thể hình người Việt Nam.
                </p>
              </div>

              <!-- Milestone 2 -->
              <div class="relative pl-8 sm:pl-10">
                <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow"></div>
                <div class="sm:absolute sm:-left-32 sm:top-0 text-xs font-extrabold text-brand-gold font-heading uppercase">Cách Mạng Xanh</div>
                <h4 class="text-base font-bold text-gray-900">Tiên Phong Dệt May Sợi Sinh Học Bản Địa</h4>
                <p class="text-xs text-gray-600 mt-1 max-w-xl">
                  Hợp tác với các viện nghiên cứu dệt may và các hợp tác xã Đồng Tháp Mười, Bến Tre để thuần hóa cuống sen, thân chuối, xơ dừa thành sợi vải cao cấp không cần là ủi.
                </p>
              </div>

              <!-- Milestone 3 -->
              <div class="relative pl-8 sm:pl-10">
                <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-emerald-600 border-4 border-white shadow"></div>
                <div class="sm:absolute sm:-left-32 sm:top-0 text-xs font-extrabold text-emerald-600 font-heading uppercase">Sự Kiện Quốc Gia</div>
                <h4 class="text-base font-bold text-gray-900">Đồng Phục Giải Golf 30 Năm DNT Việt Nam</h4>
                <p class="text-xs text-gray-600 mt-1 max-w-xl">
                  Vinh dự được Hội Doanh Nhân Trẻ Việt Nam chọn làm nhà cung cấp độc quyền toàn bộ trang phục thi đấu cho hơn 500 golfer và doanh nhân lãnh đạo cấp cao.
                </p>
              </div>

              <!-- Milestone 4 -->
              <div class="relative pl-8 sm:pl-10">
                <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-brand-greenDark border-4 border-white shadow"></div>
                <div class="sm:absolute sm:-left-32 sm:top-0 text-xs font-extrabold text-brand-greenDark font-heading uppercase">Thế Hệ Tương Lai</div>
                <h4 class="text-base font-bold text-gray-900">Đối Tác Chính Thức Hệ Thống Vinschool</h4>
                <p class="text-xs text-gray-600 mt-1 max-w-xl">
                  Thương hiệu con IHDC Kids trở thành đối tác đồng phục học sinh cho hệ thống giáo dục Vinschool — chinh phục tiêu chuẩn kiểm định an toàn và độ bền khắt khe nhất.
                </p>
              </div>

            </div>

          </div>
        </section>

        <!-- 4. ECO-MANIFESTO (BẢN TUYÊN NGÔN BỀN VỮNG) -->
        <section class="py-16 bg-brand-green text-white">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <span class="text-amber-300 font-bold text-xs uppercase tracking-widest bg-white/10 px-4 py-1 rounded-full border border-white/20">
              HDC Eco-Manifesto
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold font-serif">
              "Chúng Tôi Không Bán Một Chiếc Áo, <br>Chúng Tôi Đồng Hành Cùng Tương Lai Bền Vững"
            </h2>
            <p class="text-xs sm:text-sm text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Mỗi mét vải HDC sử dụng đồng nghĩa với việc hàng trăm kilôgam phụ phẩm nông nghiệp được tái sinh thành giá trị cao, tạo công ăn việc làm ổn định cho bà con nông dân và giảm thiểu hàng tấn khí thải carbon vào bầu khí quyển.
            </p>
            <div class="pt-4 flex flex-wrap justify-center gap-6 text-xs text-amber-200 font-semibold">
              <span class="flex items-center gap-2"><i class="fa-solid fa-leaf"></i> 100% Thuần Tự Nhiên</span>
              <span class="flex items-center gap-2"><i class="fa-solid fa-ban"></i> Zero Formaldehyde</span>
              <span class="flex items-center gap-2"><i class="fa-solid fa-recycle"></i> 100% Phân Hủy Sinh Học</span>
            </div>
          </div>
        </section>

      </div>
    `;
  }
};
