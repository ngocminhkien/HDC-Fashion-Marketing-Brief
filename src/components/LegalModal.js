/**
 * HDC Fashion — Legal & Policies Modal Component
 * Displays Privacy Policy, Terms of Service, and 7-30 Day Return Guarantee Modals
 */

window.HDC = window.HDC || {};
window.HDC.Components = window.HDC.Components || {};

window.HDC.Components.LegalModal = {
  activeType: 'privacy',

  policies: {
    privacy: {
      title: "Chính Sách Bảo Mật Thông Tin Khách Hàng",
      badge: "Tuân thủ Nghị định 13/2023/NĐ-CP & Luật An Ninh Mạng",
      content: `
        <div class="space-y-4 text-xs text-gray-600 leading-relaxed">
          <p><strong>1. Mục đích thu thập thông tin:</strong> HDC Fashion cam kết chỉ thu thập các thông tin cần thiết phục vụ cho việc xử lý đơn hàng, may đo đồng phục, giao nhận hàng hóa và chăm sóc khách hàng (họ tên, số điện thoại, địa chỉ, email xuất hóa đơn VAT).</p>
          <p><strong>2. Phạm vi sử dụng thông tin:</strong> Thông tin cá nhân của Quý khách chỉ được sử dụng nội bộ để xác nhận đơn hàng, hỗ trợ đổi size tận nơi và gửi thông báo ưu đãi độc quyền (nếu Quý khách đồng ý). Chúng tôi tuyệt đối <strong>không bán, chia sẻ hoặc tiết lộ</strong> cho bên thứ ba vì bất kỳ mục đích thương mại nào.</p>
          <p><strong>3. Bảo mật thanh toán:</strong> Mọi giao dịch qua cổng thanh toán VNPAY, MoMo hoặc ngân hàng số đều được mã hóa theo tiêu chuẩn bảo mật quốc tế SSL/TLS 256-bit cao cấp nhất.</p>
          <p><strong>4. Quyền của khách hàng:</strong> Quý khách có quyền yêu cầu tra cứu, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bất kỳ lúc nào bằng cách liên hệ hotline <strong>1900 888 999</strong> hoặc gửi email tới <strong>cskh@hdcfashion.vn</strong>.</p>
        </div>
      `
    },
    terms: {
      title: "Điều Khoản Sử Dụng & Quy Chế Hoạt Động",
      badge: "Quy chuẩn Thương mại điện tử Bộ Công Thương",
      content: `
        <div class="space-y-4 text-xs text-gray-600 leading-relaxed">
          <p><strong>1. Chấp thuận điều khoản:</strong> Khi truy cập và đặt mua sản phẩm tại nền tảng HDC Fashion, Quý khách đồng ý tuân thủ các quy chế bán hàng và cam kết cung cấp thông tin chính xác phục vụ cho công tác giao nhận.</p>
          <p><strong>2. Giá niêm yết & Khuyến mãi:</strong> Mọi mức giá niêm yết trên website đã bao gồm thuế Giá trị gia tăng (VAT) theo quy định của pháp luật Việt Nam. HDC Fashion cam kết không phát sinh bất kỳ khoản phụ phí ẩn nào ngoài giá trị đơn hàng.</p>
          <p><strong>3. Bản quyền thương hiệu & Sở hữu trí tuệ:</strong> Toàn bộ hình ảnh, tài liệu kĩ thuật, hoa văn di sản Trống Đồng Đông Sơn, nhãn hiệu HDC Fashion và IHDC Kids thuộc quyền sở hữu trí tuệ hợp pháp của HDC Fashion. Mọi hành vi sao chép nhằm mục đích thương mại khi chưa được chấp thuận đều vi phạm pháp luật.</p>
          <p><strong>4. Hóa đơn điện tử VAT Doanh nghiệp:</strong> Đối với đơn hàng doanh nghiệp hoặc khách hàng cá nhân có yêu cầu xuất hóa đơn VAT, HDC Fashion sẽ gửi hóa đơn điện tử hợp lệ tới email đăng ký trong vòng 24 giờ sau khi đơn hàng giao thành công.</p>
        </div>
      `
    },
    returns: {
      title: "Chính Sách Đổi Size Miễn Phí & Bảo Hành 12 Tháng",
      badge: "Cam kết Trải nghiệm Vượt Trội",
      content: `
        <div class="space-y-4 text-xs text-gray-600 leading-relaxed">
          <p><strong>1. Đổi size tận nơi miễn phí 7 ngày:</strong> Nếu sản phẩm mặc chưa thật sự vừa vặn hoặc Quý khách muốn đổi sang màu khác, nhân viên giao hàng của HDC sẽ mang size mới tới tận nhà để Quý khách thử và thu hồi lại sản phẩm cũ — <strong>hoàn toàn miễn phí vận chuyển 2 chiều</strong>.</p>
          <p><strong>2. Điều kiện đổi sản phẩm:</strong> Sản phẩm còn nguyên tem mác, chưa qua giặt ủi và không bị hư hại bởi tác động ngoại lực bất thường.</p>
          <p><strong>3. Bảo hành form dáng & Đường may 12 tháng:</strong> Toàn bộ âu phục Seamless và sơ mi sinh học của HDC Fashion được bảo hành nẹp áo, nút cúc và đường may liền trong suốt 12 tháng sử dụng.</p>
          <p><strong>4. Cam kết hoàn tiền 100%:</strong> Nếu Quý khách phát hiện sản phẩm pha sợi tổng hợp không đúng cam kết sinh học tự nhiên, chúng tôi hoàn tiền 100% không cần giải thích.</p>
        </div>
      `
    }
  },

  render() {
    return `
      <!-- LEGAL & POLICIES MODAL -->
      <div id="legalModal" class="fixed inset-0 z-50 bg-black/60 hidden items-center justify-center p-4">
        <div class="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 animate-fadeIn shadow-2xl relative max-h-[90vh] flex flex-col">
          <button onclick="HDC.Components.LegalModal.close()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div class="border-b pb-4 mb-4">
            <span id="legalModalBadge" class="text-[10px] font-bold tracking-widest text-brand-gold uppercase bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              Quy Chuẩn Pháp Lý
            </span>
            <h3 id="legalModalTitle" class="text-xl font-bold text-gray-900 mt-2 font-heading">
              Chính Sách HDC Fashion
            </h3>
          </div>

          <div id="legalModalBody" class="overflow-y-auto pr-2 flex-1">
            <!-- Dynamic content injected here -->
          </div>

          <div class="pt-4 mt-4 border-t flex justify-end">
            <button onclick="HDC.Components.LegalModal.close()" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold text-xs px-6 py-2.5 rounded-xl uppercase transition">
              Đã Hiểu & Đóng
            </button>
          </div>
        </div>
      </div>
    `;
  },

  open(type = 'privacy') {
    this.activeType = type;
    const policy = this.policies[type] || this.policies.privacy;

    const modal = document.getElementById('legalModal');
    const titleEl = document.getElementById('legalModalTitle');
    const badgeEl = document.getElementById('legalModalBadge');
    const bodyEl = document.getElementById('legalModalBody');

    if (titleEl) titleEl.innerText = policy.title;
    if (badgeEl) badgeEl.innerText = policy.badge;
    if (bodyEl) bodyEl.innerHTML = policy.content;

    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  },

  close() {
    const modal = document.getElementById('legalModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }
};
