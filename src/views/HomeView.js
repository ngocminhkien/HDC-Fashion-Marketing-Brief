/**
 * HDC Fashion — Home View
 * High-conversion homepage layout referencing j-p.vn structure
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.HomeView = {
  render() {
    const products5 = HDC.Data.products.slice(0, 5);
    const products10 = HDC.Data.products.slice(0, 10);
    const news = HDC.Data.news;

    return `
      <div id="view-home" class="view-panel animate-fadeIn">
        
        <!-- HERO BANNER & DEALS -->
        <section class="relative bg-gradient-to-r from-[#edf4f0] via-[#f8faf8] to-[#eef5f0] overflow-hidden border-b border-gray-100">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-14 relative">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <!-- Left Info & Vouchers -->
              <div class="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur rounded-full border border-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider shadow-sm">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Bộ Sưu Tập Thời Trang Bền Vững 2026
                </div>

                <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-greenDark tracking-tight font-heading leading-tight">
                  Khoác Lên <br/>
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-700 to-brand-gold">
                    Phong Cách Việt
                  </span>
                </h1>

                <p class="text-sm sm:text-base text-gray-600 max-w-xl mx-auto lg:mx-0 font-medium">
                  Sơ mi 100% sợi tự nhiên (sen, tơ chuối, bạc hà). Kháng khuẩn vượt trội, êm ái như làn da và <strong class="text-brand-green font-bold">hoàn toàn không cần là ủi</strong>.
                </p>

                <!-- Voucher Showcase Card -->
                <div class="bg-white/95 rounded-2xl p-4 sm:p-5 shadow-lg border border-brand-gold/30 backdrop-blur">
                  <div class="flex items-center justify-between mb-3 border-b pb-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1.5">
                      <i class="fa-solid fa-tags"></i> Deal Độc Quyền Tháng 9
                    </span>
                    <span class="text-[11px] text-gray-500 font-medium">Sao chép & dùng tại giỏ hàng</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="bg-gradient-to-r from-emerald-50 to-white p-3 rounded-xl border border-emerald-200 flex items-center justify-between">
                      <div>
                        <span class="text-xs font-bold text-emerald-800 uppercase block">VOUCHER 50K</span>
                        <span class="text-[11px] text-gray-600">Đơn từ 500.000đ</span>
                      </div>
                      <button onclick="HDC.Utils.copyToClipboard('HDC50K')" class="text-xs bg-brand-green text-white font-semibold px-2.5 py-1.5 rounded hover:bg-brand-greenDark transition">
                        Sao chép
                      </button>
                    </div>

                    <div class="bg-gradient-to-r from-amber-50 to-white p-3 rounded-xl border border-amber-200 flex items-center justify-between">
                      <div>
                        <span class="text-xs font-bold text-amber-900 uppercase block">VOUCHER 100K</span>
                        <span class="text-[11px] text-gray-600">Đơn từ 1.000.000đ</span>
                      </div>
                      <button onclick="HDC.Utils.copyToClipboard('HDC100K')" class="text-xs bg-brand-gold text-white font-semibold px-2.5 py-1.5 rounded hover:bg-yellow-600 transition">
                        Sao chép
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <button onclick="HDC.Router.navigate('shop')" class="bg-brand-red hover:bg-brand-redHover text-white px-7 py-3 rounded-md font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-brand-red/20 flex items-center gap-2">
                    <span>Khám Phá Cửa Hàng Ngay</span>
                    <i class="fa-solid fa-arrow-right text-xs"></i>
                  </button>
                  <button onclick="HDC.Router.navigate('b2b')" class="bg-white hover:bg-gray-50 text-brand-green border-2 border-brand-green px-6 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider transition flex items-center gap-2">
                    <i class="fa-solid fa-calculator"></i>
                    <span>Dự Toán Đồng Phục B2B</span>
                  </button>
                </div>

                <div class="flex items-center justify-center lg:justify-start gap-6 pt-1 text-xs text-gray-500 font-medium">
                  <span class="flex items-center gap-1"><i class="fa-solid fa-shield-halved text-brand-green"></i> Đổi size 7 ngày</span>
                  <span class="flex items-center gap-1"><i class="fa-solid fa-leaf text-brand-green"></i> 100% Eco-friendly</span>
                  <span class="flex items-center gap-1"><i class="fa-solid fa-truck text-brand-green"></i> Giao tận nơi miễn phí</span>
                </div>
              </div>

              <!-- Right Visual Montage -->
              <div class="lg:col-span-6 relative">
                <div class="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto">
                  <div class="space-y-3 pt-6">
                    <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-white relative group cursor-pointer" onclick="HDC.Router.navigate('shop')">
                      <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80" alt="Sơ mi sợi sen" class="w-full h-56 sm:h-72 object-cover product-img-hover">
                      <div class="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur py-1.5 px-2 rounded text-center text-xs font-bold text-brand-green shadow">
                        🌿 Sơ mi Sợi Sen & Tơ Chuối
                      </div>
                    </div>
                    <div class="rounded-2xl overflow-hidden shadow-lg border-2 border-white relative group cursor-pointer" onclick="HDC.Router.navigate('b2b')">
                      <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80" alt="Doanh nhân trẻ" class="w-full h-40 sm:h-48 object-cover product-img-hover">
                      <div class="absolute bottom-2 left-2 right-2 bg-brand-green/90 text-white py-1 px-2 rounded text-[11px] text-center font-semibold">
                        💼 Đồng Phục DNT Việt Nam
                      </div>
                    </div>
                  </div>

                  <div class="space-y-3">
                    <div class="rounded-2xl overflow-hidden shadow-lg border-2 border-white relative group cursor-pointer" onclick="HDC.Router.navigate('shop')">
                      <img src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&auto=format&fit=crop&q=80" alt="Polo Anti-UV" class="w-full h-44 sm:h-52 object-cover product-img-hover">
                      <div class="absolute top-2 right-2 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">Anti-UV</div>
                      <div class="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur py-1 px-2 rounded text-[11px] text-center font-bold text-gray-800">
                        ⛳ Polo Golf & Doanh Nhân
                      </div>
                    </div>
                    <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-white relative group cursor-pointer" onclick="HDC.Router.navigate('kids')">
                      <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80" alt="IHDC Kids Vinschool" class="w-full h-56 sm:h-68 object-cover product-img-hover">
                      <div class="absolute bottom-2 left-2 right-2 bg-emerald-700 text-white py-1.5 px-2 rounded-lg text-center text-xs font-bold shadow">
                        🎓 IHDC Kids — Vinschool
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- MÃ KHUYẾN MÃI TICKETS SECTION -->
        <section class="py-8 bg-brand-grayBg border-b border-gray-200">
          <div class="max-w-5xl mx-auto px-4">
            <div class="text-center mb-5">
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight uppercase font-heading">Mã khuyến mãi</h2>
              <p class="text-xs text-gray-500 mt-0.5">Áp dụng trực tiếp tại bước đặt hàng để nhận chiết khấu</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="voucher-card p-4 rounded-xl shadow-sm flex items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xl shrink-0">
                    <i class="fa-solid fa-gift"></i>
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-gray-900 text-sm sm:text-base">Giảm 50k</span>
                      <span class="text-[10px] bg-red-100 text-brand-red font-bold px-1.5 py-0.2 rounded">HDC50K</span>
                    </div>
                    <p class="text-xs text-gray-500">Đơn hàng tối thiểu 500k</p>
                    <p class="text-[11px] text-brand-red font-medium">Hết hạn trong 7 ngày</p>
                  </div>
                </div>
                <button onclick="HDC.Utils.copyToClipboard('HDC50K')" class="bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold px-4 py-2 rounded-md transition shadow">
                  Sao chép
                </button>
              </div>

              <div class="voucher-card p-4 rounded-xl shadow-sm flex items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center text-xl shrink-0">
                    <i class="fa-solid fa-crown"></i>
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-gray-900 text-sm sm:text-base">Giảm 100k</span>
                      <span class="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.2 rounded">HDC100K</span>
                    </div>
                    <p class="text-xs text-gray-500">Đơn hàng tối thiểu 1.000k</p>
                    <p class="text-[11px] text-brand-red font-medium">Hết hạn trong 7 ngày</p>
                  </div>
                </div>
                <button onclick="HDC.Utils.copyToClipboard('HDC100K')" class="bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold px-4 py-2 rounded-md transition shadow">
                  Sao chép
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- SẢN PHẨM MỚI (5 Cột chuẩn j-p.vn) -->
        <section class="py-12 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-8">
              <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight uppercase font-heading">SẢN PHẨM MỚI</h2>
              <div class="text-brand-green font-bold text-sm tracking-widest my-1">///</div>
              <p class="text-xs sm:text-sm text-gray-500 font-medium">Top trending tuần này — Bộ sưu tập sợi xanh & công nghệ Seamless</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
              ${products5.map(p => HDC.Components.ProductCard.render(p)).join('')}
            </div>

            <div class="flex flex-col items-center justify-center mt-8 gap-3">
              <button onclick="HDC.Router.navigate('shop')" class="text-xs sm:text-sm font-bold text-gray-800 hover:text-brand-green flex items-center gap-1 transition uppercase tracking-wider">
                <span>Xem tất cả sản phẩm mới</span>
                <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </section>

        <!-- CORE VALUE USP BANNER -->
        <section class="py-10 bg-brand-cream border-y border-brand-border">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div class="p-3">
                <div class="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-brand-green flex items-center justify-center text-xl mb-3">
                  <i class="fa-solid fa-leaf"></i>
                </div>
                <h3 class="font-bold text-sm text-gray-900 mb-1">100% Sợi Tự Nhiên</h3>
                <p class="text-xs text-gray-500">Sen, tơ chuối, xơ dừa, bạc hà. Kháng khuẩn tự nhiên & bảo vệ làn da.</p>
              </div>
              <div class="p-3">
                <div class="w-12 h-12 mx-auto rounded-full bg-amber-100 text-brand-gold flex items-center justify-center text-xl mb-3">
                  <i class="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <h3 class="font-bold text-sm text-gray-900 mb-1">Hoàn Toàn Không Cần Là Ủi</h3>
                <p class="text-xs text-gray-500">Giũ phẳng tự nhiên sau khi giặt. Tiết kiệm 15 phút mỗi sáng của người bận rộn.</p>
              </div>
              <div class="p-3">
                <div class="w-12 h-12 mx-auto rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl mb-3">
                  <i class="fa-solid fa-vest"></i>
                </div>
                <h3 class="font-bold text-sm text-gray-900 mb-1">Công Nghệ Seamless 4D</h3>
                <p class="text-xs text-gray-500">Không đường may tại nẹp, vạt, cổ tay. Co giãn 4 chiều, êm ái như làn da thứ hai.</p>
              </div>
              <div class="p-3">
                <div class="w-12 h-12 mx-auto rounded-full bg-red-100 text-brand-red flex items-center justify-center text-xl mb-3">
                  <i class="fa-solid fa-shield-halved"></i>
                </div>
                <h3 class="font-bold text-sm text-gray-900 mb-1">Di Sản Văn Hóa Việt</h3>
                <p class="text-xs text-gray-500">Lồng ghép Trống Đồng, Hang Xóm Trại, Núi Đầu Rồng. Khẳng định khí chất văn hóa.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- SẢN PHẨM BÁN CHẠY (BEST SELLER) -->
        <section class="py-12 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-8">
              <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight uppercase font-heading">
                SẢN PHẨM BÁN CHẠY
              </h2>
              <div class="inline-block mt-2">
                <span class="badge-dotted text-brand-red text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  BEST SELLER
                </span>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
              ${products10.map(p => HDC.Components.ProductCard.render(p)).join('')}
            </div>

            <div class="text-center mt-10">
              <button onclick="HDC.Router.navigate('shop')" class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-800 hover:text-brand-green uppercase tracking-wider transition">
                <span>Xem toàn bộ danh mục sản phẩm</span>
                <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </section>

        <!-- B2B & IHDC KIDS TEASER CARDS -->
        <section class="py-12 bg-brand-grayBg border-t border-gray-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-2xl p-6 shadow-md border flex flex-col justify-between">
                <div>
                  <span class="bg-brand-gold text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Dự án Quốc gia</span>
                  <h3 class="text-lg sm:text-xl font-bold text-gray-900 mt-2">Đồng Phục Doanh Nghiệp & Thể Thao Golf</h3>
                  <p class="text-xs text-gray-600 mt-1">Đơn vị thiết kế cho Giải Golf kỷ niệm 30 năm DNT Việt Nam. Tư vấn & thiết kế miễn phí 100%, sửa mẫu không giới hạn.</p>
                </div>
                <div class="pt-5 flex items-center gap-3">
                  <button onclick="HDC.Router.navigate('b2b')" class="bg-brand-green text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-brand-greenDark transition">
                    Cổng Tính Chiết Khấu B2B &rarr;
                  </button>
                  <button onclick="HDC.Components.B2BModal.open()" class="border text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-50">
                    Gửi yêu cầu mẫu
                  </button>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-6 shadow-md border flex flex-col justify-between">
                <div>
                  <span class="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Đối Tác Vinschool</span>
                  <h3 class="text-lg sm:text-xl font-bold text-gray-900 mt-2">IHDC Kids — Cải Cách Đồng Phục Học Sinh</h3>
                  <p class="text-xs text-gray-600 mt-1">Trang phục học đường thời trang, thoáng mát, mềm mại, chuẩn mực quốc tế. Đã hợp tác cùng Hệ thống Giáo dục Vinschool.</p>
                </div>
                <div class="pt-5 flex items-center gap-3">
                  <button onclick="HDC.Router.navigate('kids')" class="bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-emerald-800 transition">
                    Cổng Đồng Phục Học Đường &rarr;
                  </button>
                  <button onclick="HDC.Router.navigate('quiz')" class="border text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-50">
                    Bảng size trẻ em
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- TIN TỨC MỚI -->
        <section class="py-12 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-8">
              <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight uppercase font-heading">TIN TỨC MỚI</h2>
              <div class="text-brand-green font-bold text-sm tracking-widest my-1">///</div>
              <p class="text-xs sm:text-sm text-gray-500 font-medium">Bản tin phong cách, văn hóa di sản và xu hướng thời trang bền vững</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              ${news.map(n => `
                <article class="group bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div class="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img src="${n.img}" alt="${n.title}" class="w-full h-full object-cover product-img-hover" loading="lazy">
                  </div>
                  <div class="p-4 space-y-2">
                    <h3 class="text-xs sm:text-sm font-bold text-gray-900 uppercase line-clamp-2 group-hover:text-brand-green transition leading-snug">${n.title}</h3>
                    <p class="text-[11px] text-gray-400 font-medium">${n.date}</p>
                    <p class="text-xs text-gray-600 line-clamp-3">${n.desc}</p>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>
        </section>

      </div>
    `;
  }
};
