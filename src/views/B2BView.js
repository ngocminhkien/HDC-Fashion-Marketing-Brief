/**
 * HDC Fashion — B2B Corporate & Golf Portal View
 * B2B discount & budget calculator, industry showcase, and 5-step uniform workflow
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.B2BView = {
  render() {
    return `
      <div id="view-b2b" class="view-panel hidden animate-fadeIn py-10 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <!-- B2B Hero Header -->
          <div class="bg-gradient-to-r from-brand-greenDark via-brand-green to-emerald-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div class="max-w-2xl space-y-4 relative z-10">
              <span class="bg-brand-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                B2B Uniform Solution
              </span>
              <h1 class="text-3xl sm:text-4xl font-extrabold font-heading leading-tight">
                Đồng Phục Doanh Nghiệp — Tôn Vinh Vị Thế & Bản Sắc Thương Hiệu
              </h1>
              <p class="text-xs sm:text-sm text-gray-200">
                Chính sách độc quyền: <strong>Tư vấn & Thiết kế 3D miễn phí</strong>, không giới hạn số lần sửa chữa mẫu. Đã thiết kế cho Giải Golf kỷ niệm 30 năm phong trào DNT Việt Nam.
              </p>
              <div class="flex flex-wrap gap-3 pt-2">
                <button onclick="document.getElementById('b2bCalculatorSection').scrollIntoView({behavior:'smooth'})" class="bg-brand-gold hover:bg-yellow-600 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition shadow">
                  Tính Dự Toán & Chiết Khấu Ngay
                </button>
                <button onclick="HDC.Components.B2BModal.open()" class="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition">
                  Gửi Yêu Cầu Thiết Kế Riêng
                </button>
              </div>
            </div>
            <div class="absolute right-0 bottom-0 opacity-15 pointer-events-none text-9xl text-white font-serif">
              HDC
            </div>
          </div>

          <!-- B2B DISCOUNT & BUDGET CALCULATOR -->
          <section id="b2bCalculatorSection" class="bg-brand-grayBg p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <div class="text-center max-w-xl mx-auto">
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 font-heading uppercase">
                Bảng Tính Chiết Khấu & Dự Toán Ngân Sách B2B
              </h2>
              <p class="text-xs text-gray-500 mt-1">Kéo thanh chọn số lượng để xem đơn giá sau chiết khấu và ưu đãi đính kèm</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 rounded-2xl border">
              <!-- Controls -->
              <div class="lg:col-span-7 space-y-5">
                <div>
                  <div class="flex justify-between items-center text-xs font-bold text-gray-700 mb-2">
                    <span>Số lượng áo dự kiến đặt may:</span>
                    <span id="calcQuantityLabel" class="text-base text-brand-green font-extrabold">100 bộ</span>
                  </div>
                  <input type="range" id="b2bQuantityRange" min="20" max="2000" step="10" value="100" oninput="HDC.Views.B2BView.calculateQuote()" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green">
                  <div class="flex justify-between text-[10px] text-gray-400 mt-1">
                    <span>20 áo</span>
                    <span>100 áo</span>
                    <span>500 áo</span>
                    <span>1.000 áo</span>
                    <span>2.000+ áo</span>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label class="block font-bold text-gray-700 mb-1">Dòng sản phẩm:</label>
                    <select id="calcProductType" onchange="HDC.Views.B2BView.calculateQuote()" class="w-full border rounded-lg p-2.5 bg-white text-xs focus:border-brand-green">
                      <option value="590000">Sơ mi Sợi Tự Nhiên (Sen / Bamboo / Modal)</option>
                      <option value="450000">Áo Polo Doanh Nhân / Golf Anti-UV</option>
                      <option value="750000">Sơ mi Seamless Không Đường May</option>
                      <option value="390000">Đồng Phục IHDC Kids Học Sinh</option>
                    </select>
                  </div>
                  <div>
                    <label class="block font-bold text-gray-700 mb-1">Dịch vụ in / thêu logo:</label>
                    <select id="calcEmbroidery" onchange="HDC.Views.B2BView.calculateQuote()" class="w-full border rounded-lg p-2.5 bg-white text-xs focus:border-brand-green">
                      <option value="0">Thêu vi tính cao cấp (Được tặng MIỄN PHÍ)</option>
                      <option value="15000">In kỹ thuật số HD đa sắc (+15k)</option>
                      <option value="0">Không in thêu logo</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Result Card -->
              <div class="lg:col-span-5 bg-gradient-to-br from-brand-cream to-amber-50 p-6 rounded-2xl border border-brand-gold/40 space-y-4">
                <div class="flex justify-between items-center text-xs pb-2 border-b border-brand-gold/30">
                  <span class="font-bold text-gray-700">Mức chiết khấu đạt được:</span>
                  <span id="calcDiscountTag" class="bg-brand-red text-white font-bold px-2 py-0.5 rounded text-[11px]">-20% Ưu Đãi</span>
                </div>
                
                <div class="space-y-1">
                  <p class="text-xs text-gray-500">Đơn giá tham khảo / bộ:</p>
                  <div class="flex items-baseline gap-2">
                    <span id="calcUnitAfter" class="text-2xl font-extrabold text-brand-green">472.000₫</span>
                    <span id="calcUnitBefore" class="text-xs text-gray-400 line-through">590.000₫</span>
                  </div>
                </div>

                <div class="pt-2 border-t border-brand-gold/30">
                  <p class="text-xs text-gray-500">Tổng ngân sách dự toán:</p>
                  <p id="calcTotalBudget" class="text-xl font-extrabold text-brand-red">47.200.000₫</p>
                  <p class="text-[10px] text-gray-500 mt-0.5">* Đã bao gồm miễn phí thiết kế mẫu, may mẫu thử và giao hàng toàn quốc.</p>
                </div>

                <button onclick="HDC.Views.B2BView.applyEstimateToModal()" class="w-full bg-brand-green hover:bg-brand-greenDark text-white py-2.5 rounded-lg text-xs font-bold uppercase transition shadow">
                  Khóa Giá Này & Nhận Thiết Kế 3D
                </button>
              </div>
            </div>
          </section>

          <!-- INDUSTRY SHOWCASE -->
          <section class="space-y-6">
            <div class="text-center max-w-xl mx-auto">
              <h2 class="text-xl sm:text-2xl font-bold text-gray-900 font-heading uppercase">
                Thư Viện Mẫu Thiết Kế Theo Ngành Nghề
              </h2>
              <p class="text-xs text-gray-500 mt-1">Đa dạng kiểu dáng, quy chuẩn nhận diện thương hiệu cho từng lĩnh vực</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div class="bg-gray-50 rounded-2xl overflow-hidden border group">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80" alt="Tài chính ngân hàng" class="w-full h-48 object-cover product-img-hover" loading="lazy">
                <div class="p-4">
                  <span class="text-[10px] font-bold text-brand-gold uppercase">Tài Chính & Ngân Hàng</span>
                  <h4 class="font-bold text-sm text-gray-900 mt-0.5">Sơ mi Trắng Sợi Sen & Vest Nghi Thức</h4>
                  <p class="text-xs text-gray-500 mt-1">Form chuẩn, cổ đứng lịch thiệp, không nhăn suốt ngày làm việc.</p>
                </div>
              </div>

              <div class="bg-gray-50 rounded-2xl overflow-hidden border group">
                <img src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&auto=format&fit=crop&q=80" alt="Giải Golf Thể Thao" class="w-full h-48 object-cover product-img-hover" loading="lazy">
                <div class="p-4">
                  <span class="text-[10px] font-bold text-emerald-700 uppercase">Sự Kiện & Golf Doanh Nhân</span>
                  <h4 class="font-bold text-sm text-gray-900 mt-0.5">Polo Golf Kỷ Niệm 30 Năm DNT</h4>
                  <p class="text-xs text-gray-500 mt-1">Thấm hút siêu nhanh, chuẩn chống nắng Anti-UV 50+, thoáng mát.</p>
                </div>
              </div>

              <div class="bg-gray-50 rounded-2xl overflow-hidden border group">
                <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80" alt="Bất Động Sản" class="w-full h-48 object-cover product-img-hover" loading="lazy">
                <div class="p-4">
                  <span class="text-[10px] font-bold text-blue-700 uppercase">Bất Động Sản & Công Nghệ</span>
                  <h4 class="font-bold text-sm text-gray-900 mt-0.5">Sơ mi Seamless 4D Năng Động</h4>
                  <p class="text-xs text-gray-500 mt-1">Không cọ xát, vận động ngoài trời dự án vẫn tự tin chỉn chu.</p>
                </div>
              </div>

              <div class="bg-gray-50 rounded-2xl overflow-hidden border group">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80" alt="Ngoại giao & Hội nghị" class="w-full h-48 object-cover product-img-hover" loading="lazy">
                <div class="p-4">
                  <span class="text-[10px] font-bold text-purple-700 uppercase">Đối Ngoại & Hội Thảo</span>
                  <h4 class="font-bold text-sm text-gray-900 mt-0.5">Sơ mi & Cà vạt Họa Tiết Trống Đồng</h4>
                  <p class="text-xs text-gray-500 mt-1">Gây ấn tượng văn hóa độc đáo với đối tác quốc tế.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- 5-STEP WORKFLOW -->
          <section class="bg-brand-cream p-6 sm:p-8 rounded-3xl border border-brand-border text-center space-y-6">
            <h3 class="text-lg font-bold text-brand-green uppercase font-heading">Quy Trình Hợp Tác Chuyên Nghiệp 5 Bước</h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
              <div class="bg-white p-4 rounded-xl border">
                <div class="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold mx-auto mb-2">1</div>
                <p class="font-bold text-gray-900">Tiếp nhận brief</p>
                <p class="text-gray-500 mt-1 text-[11px]">Tư vấn chất liệu & ngân sách dự kiến</p>
              </div>
              <div class="bg-white p-4 rounded-xl border">
                <div class="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold mx-auto mb-2">2</div>
                <p class="font-bold text-gray-900">Thiết kế 3D Free</p>
                <p class="text-gray-500 mt-1 text-[11px]">Sửa mẫu không giới hạn số lần</p>
              </div>
              <div class="bg-white p-4 rounded-xl border">
                <div class="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold mx-auto mb-2">3</div>
                <p class="font-bold text-gray-900">May mẫu thử</p>
                <p class="text-gray-500 mt-1 text-[11px]">Gửi tận tay doanh nghiệp kiểm tra</p>
              </div>
              <div class="bg-white p-4 rounded-xl border">
                <div class="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold mx-auto mb-2">4</div>
                <p class="font-bold text-gray-900">Sản xuất quy mô</p>
                <p class="text-gray-500 mt-1 text-[11px]">Kiểm soát QC chuẩn từng đường may</p>
              </div>
              <div class="bg-white p-4 rounded-xl border">
                <div class="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold mx-auto mb-2">5</div>
                <p class="font-bold text-gray-900">Giao hàng Free</p>
                <p class="text-gray-500 mt-1 text-[11px]">Đúng hẹn & bảo hành đổi mới nếu lỗi</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    `;
  },

  init() {
    this.calculateQuote();
  },

  calculateQuote() {
    const rangeEl = document.getElementById('b2bQuantityRange');
    const typeEl = document.getElementById('calcProductType');
    const embEl = document.getElementById('calcEmbroidery');
    if (!rangeEl || !typeEl || !embEl) return;

    const qty = parseInt(rangeEl.value);
    const basePrice = parseInt(typeEl.value);
    const extraPrint = parseInt(embEl.value);

    document.getElementById('calcQuantityLabel').innerText = qty + " bộ";

    let discountRate = 0.10;
    let discountLabel = "-10% Ưu Đãi";
    if (qty >= 100 && qty < 300) { discountRate = 0.20; discountLabel = "-20% Ưu Đãi"; }
    else if (qty >= 300 && qty < 800) { discountRate = 0.25; discountLabel = "-25% Ưu Đãi"; }
    else if (qty >= 800) { discountRate = 0.35; discountLabel = "-35% Ưu Đãi Tối Đa"; }

    const unitAfter = Math.round((basePrice + extraPrint) * (1 - discountRate));
    const totalBudget = unitAfter * qty;

    document.getElementById('calcDiscountTag').innerText = discountLabel;
    document.getElementById('calcUnitAfter').innerText = HDC.Utils.formatCurrency(unitAfter);
    document.getElementById('calcUnitBefore').innerText = HDC.Utils.formatCurrency(basePrice + extraPrint);
    document.getElementById('calcTotalBudget').innerText = HDC.Utils.formatCurrency(totalBudget);
  },

  applyEstimateToModal() {
    HDC.Components.B2BModal.open();
    const qty = parseInt(document.getElementById('b2bQuantityRange').value);
    const modalQty = document.getElementById('b2bModalQty');
    if (modalQty) {
      modalQty.value = qty > 500 ? "500+ áo" : "50 - 200 áo";
    }
  }
};
