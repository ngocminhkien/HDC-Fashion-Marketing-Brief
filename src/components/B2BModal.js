/**
 * HDC Fashion — B2B Quotation Modal Component
 * Dialog form for enterprise uniform requests and free 3D design sampling
 */

window.HDC = window.HDC || {};
window.HDC.Components = window.HDC.Components || {};

window.HDC.Components.B2BModal = {
  render() {
    return `
      <div id="b2bModal" class="fixed inset-0 z-50 bg-black/60 hidden items-center justify-center p-4 backdrop-blur-sm">
        <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-fadeIn text-xs">
          <button onclick="HDC.Components.B2BModal.close()" class="absolute top-4 right-4 text-gray-400 hover:text-black text-xl">
            <i class="fa-solid fa-xmark"></i>
          </button>
          
          <div class="text-center mb-4">
            <div class="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-2 text-xl">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <h3 class="text-base font-bold text-gray-900 font-heading uppercase">Tư Vấn & Báo Giá Đồng Phục B2B</h3>
            <p class="text-gray-500 mt-0.5">Miễn phí thiết kế 3D &bull; Sửa mẫu không giới hạn &bull; Ship toàn quốc</p>
          </div>

          <form onsubmit="HDC.Components.B2BModal.handleSubmit(event)" class="space-y-3">
            <div>
              <label class="block font-semibold mb-1">Tên Doanh nghiệp / Tổ chức / Nhà trường *</label>
              <input type="text" required placeholder="Tên công ty hoặc cơ quan..." class="w-full p-2.5 border rounded-lg focus:border-brand-green focus:outline-none">
            </div>
            
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold mb-1">Người liên hệ *</label>
                <input type="text" required placeholder="Họ và tên" class="w-full p-2.5 border rounded-lg focus:border-brand-green focus:outline-none">
              </div>
              <div>
                <label class="block font-semibold mb-1">Số điện thoại *</label>
                <input type="tel" required placeholder="09xx xxx xxx" class="w-full p-2.5 border rounded-lg focus:border-brand-green focus:outline-none">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block font-semibold mb-1">Số lượng áo dự kiến</label>
                <select id="b2bModalQty" class="w-full p-2.5 border rounded-lg bg-white">
                  <option>20 - 50 áo</option>
                  <option selected>50 - 200 áo</option>
                  <option>200 - 500 áo</option>
                  <option>500+ áo</option>
                </select>
              </div>
              <div>
                <label class="block font-semibold mb-1">Dòng sản phẩm</label>
                <select id="b2bModalProductType" class="w-full p-2.5 border rounded-lg bg-white">
                  <option>Sơ mi công sở sợi xanh tự nhiên</option>
                  <option>Polo Thể Thao Golf Anti-UV</option>
                  <option>Đồng phục IHDC Kids (Trường học)</option>
                  <option>Combo Áo + Cà vạt + Phụ kiện</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block font-semibold mb-1">Yêu cầu đặc biệt (in thêu logo, ngày giao...)</label>
              <textarea rows="2" placeholder="Ghi chú yêu cầu..." class="w-full p-2.5 border rounded-lg focus:border-brand-green focus:outline-none"></textarea>
            </div>

            <div class="p-2.5 bg-brand-cream rounded border border-brand-border text-[11px] text-gray-600">
              <i class="fa-solid fa-circle-info text-brand-gold mr-1"></i> HDC sẽ cử chuyên viên gửi bản phác thảo thiết kế 3D trong vòng 2-4 giờ làm việc.
            </div>

            <button type="submit" class="w-full bg-brand-green hover:bg-brand-greenDark text-white py-3 rounded-lg font-bold uppercase tracking-wider transition shadow">
              Gửi Yêu Cầu — Nhận Bản Vẽ 3D & Vải Mẫu Miễn Phí
            </button>
          </form>
        </div>
      </div>
    `;
  },

  open(type) {
    if (type) {
      const select = document.getElementById('b2bModalProductType');
      if (select) select.value = type;
    }
    const modal = document.getElementById('b2bModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  },

  close() {
    const modal = document.getElementById('b2bModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    this.close();
    alert("HDC Fashion đã nhận thông tin! Chuyên viên thiết kế B2B sẽ liên hệ gửi bản vẽ 3D và may mẫu vải miễn phí ngay trong ngày.");
  }
};
