/**
 * HDC Fashion — Footer Component
 * 4-column layout referencing j-p.vn, ministry of industry verification, and payment badges
 */

window.HDC = window.HDC || {};
window.HDC.Components = window.HDC.Components || {};

window.HDC.Components.Footer = {
  render() {
    return `
      <footer class="bg-brand-dark text-gray-300 pt-12 pb-6 border-t border-gray-800 text-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
            <!-- Col 1 -->
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <span class="font-serif text-2xl font-bold text-white">HDC</span>
                <span class="font-heading text-xs tracking-widest text-brand-gold uppercase">Fashion</span>
              </div>
              <p class="text-gray-400 leading-relaxed">
                HDC Fashion là thương hiệu thời trang tiên phong tại Việt Nam phát triển bền vững từ 100% sợi tự nhiên và tôn vinh giá trị văn hóa ngàn năm.
              </p>
              <div class="space-y-1 text-gray-400">
                <p><i class="fa-solid fa-location-dot text-brand-gold mr-1"></i> Tòa nhà HDC, Hà Nội & Hệ thống Showroom</p>
                <p><i class="fa-solid fa-phone text-brand-gold mr-1"></i> 1900 888 999 — 0916 305 533</p>
                <p><i class="fa-solid fa-envelope text-brand-gold mr-1"></i> cskh@hdcfashion.vn</p>
              </div>
              <div class="pt-1">
                <span class="inline-flex items-center gap-1.5 bg-blue-900/40 border border-blue-600/50 px-2.5 py-1 rounded text-[10px] text-blue-200">
                  <i class="fa-solid fa-shield-check text-blue-400"></i> Đã thông báo Bộ Công Thương
                </span>
              </div>
            </div>

            <!-- Col 2 -->
            <div class="space-y-2.5">
              <h4 class="font-bold text-sm text-white uppercase tracking-wider mb-2">Chính sách & Pháp lý</h4>
              <ul class="space-y-1.5 text-gray-400">
                <li><button onclick="HDC.Router.navigate('about')" class="hover:text-white transition flex items-center gap-1.5"><i class="fa-solid fa-feather text-brand-gold text-[10px]"></i> Câu chuyện thương hiệu</button></li>
                <li><button onclick="HDC.Components.LegalModal.open('returns')" class="hover:text-white transition flex items-center gap-1.5"><i class="fa-solid fa-rotate-left text-emerald-400 text-[10px]"></i> Đổi size 7 ngày & Bảo hành 12T</button></li>
                <li><button onclick="HDC.Components.LegalModal.open('privacy')" class="hover:text-white transition flex items-center gap-1.5"><i class="fa-solid fa-user-shield text-blue-400 text-[10px]"></i> Chính sách bảo mật thông tin</button></li>
                <li><button onclick="HDC.Components.LegalModal.open('terms')" class="hover:text-white transition flex items-center gap-1.5"><i class="fa-solid fa-file-contract text-amber-400 text-[10px]"></i> Điều khoản & Quy chế TMĐT</button></li>
                <li><button onclick="HDC.Router.navigate('faq')" class="hover:text-white transition flex items-center gap-1.5"><i class="fa-solid fa-circle-question text-gray-400 text-[10px]"></i> Trung tâm hỏi đáp (FAQ)</button></li>
              </ul>
            </div>

            <!-- Col 3 -->
            <div class="space-y-3">
              <h4 class="font-bold text-sm text-white uppercase tracking-wider mb-2">Cộng đồng HDC</h4>
              <p class="text-gray-400 leading-relaxed">Kết nối cùng hơn 50.000+ người yêu thích lối sống xanh và phong cách tự tin.</p>
              <div class="flex items-center gap-3">
                <a href="#" class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-80 transition"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="w-8 h-8 rounded-full bg-black border border-gray-700 text-white flex items-center justify-center hover:opacity-80 transition"><i class="fa-brands fa-tiktok"></i></a>
                <a href="#" class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 to-purple-600 text-white flex items-center justify-center hover:opacity-80 transition"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-[10px]">Zalo</a>
              </div>
            </div>

            <!-- Col 4 -->
            <div class="space-y-3">
              <h4 class="font-bold text-sm text-white uppercase tracking-wider mb-2">Đăng ký nhận khuyến mãi</h4>
              <p class="text-gray-400">Nhận ngay voucher 100K cho đơn hàng đầu tiên!</p>
              <form onsubmit="event.preventDefault(); HDC.Utils.showToast('Cảm ơn Quý khách đã đăng ký nhận ưu đãi!')" class="flex">
                <input type="email" required placeholder="Nhập email..." class="bg-gray-800 text-white px-3 py-2 text-xs rounded-l-md w-full focus:outline-none border border-gray-700">
                <button type="submit" class="bg-black hover:bg-brand-red text-white font-bold text-xs px-3.5 py-2 rounded-r-md uppercase transition shrink-0">ĐĂNG KÝ</button>
              </form>
            </div>
          </div>

          <div class="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
            <p>© Copyright 2026 By HDC Fashion / IHDC Fashion. Giấy chứng nhận ĐKKD số 0108889999.</p>
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 bg-gray-800 rounded text-white font-bold">VISA</span>
              <span class="px-2 py-0.5 bg-gray-800 rounded text-orange-400 font-bold">MasterCard</span>
              <span class="px-2 py-0.5 bg-blue-900 rounded text-white font-bold">VNPAY</span>
              <span class="px-2 py-0.5 bg-pink-900 rounded text-pink-300 font-bold">MoMo</span>
              <span class="px-2 py-0.5 bg-gray-800 rounded text-emerald-400 font-bold">COD</span>
            </div>
          </div>

        </div>
      </footer>
    `;
  }
};
