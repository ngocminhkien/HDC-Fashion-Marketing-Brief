/**
 * HDC Fashion — IHDC Kids School Uniform View
 * Vinschool educational uniform partnership, grade-level filtering, and kids size charts
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.KidsView = {
  render() {
    return `
      <div id="view-kids" class="view-panel hidden animate-fadeIn py-10 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          <!-- Header Banner -->
          <div class="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div class="max-w-2xl space-y-4 relative z-10">
              <span class="bg-amber-400 text-gray-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                IHDC Kids &bull; Thế Hệ Mới
              </span>
              <h1 class="text-3xl sm:text-4xl font-extrabold font-heading leading-tight">
                Đồng Phục Học Sinh: Để Mỗi Sáng Đến Trường Là Một Niềm Vui
              </h1>
              <p class="text-xs sm:text-sm text-gray-200">
                Cải cách các thiết kế gò bó truyền thống. Tự hào đồng hành cùng <strong>Hệ thống Giáo dục Vinschool</strong> mang lại trang phục học đường thoáng mát, thời trang và an toàn cho làn da trẻ.
              </p>
              <div class="flex flex-wrap gap-3 pt-2">
                <button onclick="document.getElementById('kidsUniformPicker').scrollIntoView({behavior:'smooth'})" class="bg-amber-400 hover:bg-amber-500 text-gray-900 px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition">
                  Chọn Đồ Đồng Phục Theo Trường
                </button>
                <button onclick="HDC.Components.B2BModal.open('Đồng phục trường học')" class="bg-white/10 hover:bg-white/20 border border-white/40 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase transition">
                  Liên Hệ Ban Giám Hiệu
                </button>
              </div>
              <div class="pt-2">
                <a href="./catalogue-dong-phuc-hdc.pdf" download="IHDC-Kids-Catalogue-Dong-Phuc.pdf" class="inline-flex items-center gap-2 text-xs text-white/90 hover:text-white underline font-semibold transition bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-lg border border-white/20">
                  <i class="fa-solid fa-file-pdf text-amber-300 text-sm"></i>
                  <span>Tải Catalogue Đồng Phục Học Sinh IHDC Kids (PDF 25MB)</span>
                </a>
              </div>
            </div>
          </div>

          <!-- KIDS UNIFORM PICKER -->
          <section id="kidsUniformPicker" class="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-200 space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b">
              <div>
                <h2 class="text-xl font-bold text-gray-900 font-heading uppercase">Cổng Đặt Mua & Bổ Sung Đồng Phục Học Sinh</h2>
                <p class="text-xs text-gray-500">Phụ huynh và nhà trường chọn cấp học để xem set đồ chuẩn</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-gray-700">Trường:</span>
                <select class="border rounded-lg p-2 text-xs bg-white font-semibold text-emerald-800">
                  <option>Hệ Thống Giáo Dục Vinschool</option>
                  <option>Trường Song Ngữ Quốc Tế ABC</option>
                  <option>Trường THPT Chất Lượng Cao</option>
                </select>
              </div>
            </div>

            <!-- Grade Tabs -->
            <div class="flex flex-wrap gap-2">
              <button onclick="HDC.Views.KidsView.filterGrade('all', this)" class="kids-grade-btn active bg-emerald-700 text-white px-3.5 py-1.5 rounded-full text-xs font-bold transition">Tất cả sản phẩm</button>
              <button onclick="HDC.Views.KidsView.filterGrade('tieu-hoc', this)" class="kids-grade-btn bg-white border text-gray-700 px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-100 transition">Tiểu học (Lớp 1 - 5)</button>
              <button onclick="HDC.Views.KidsView.filterGrade('thcs', this)" class="kids-grade-btn bg-white border text-gray-700 px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-100 transition">THCS (Lớp 6 - 9)</button>
              <button onclick="HDC.Views.KidsView.filterGrade('thpt', this)" class="kids-grade-btn bg-white border text-gray-700 px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-100 transition">THPT (Lớp 10 - 12)</button>
            </div>

            <!-- Grid Items -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4" id="kidsCatalogGrid">
              <!-- Rendered via JS -->
            </div>
          </section>

          <!-- KIDS SIZE CHART -->
          <section class="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 space-y-4">
            <h3 class="text-lg font-bold text-gray-900 font-heading uppercase text-center">Bảng Quy Chuẩn Size Đồng Phục Học Sinh IHDC Kids</h3>
            <p class="text-xs text-gray-500 text-center max-w-lg mx-auto">Vải có độ co giãn 4 chiều nhẹ và thoáng khí, phụ huynh nên chọn đúng theo bảng cân nặng để bé mặc thoải mái nhất.</p>

            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border border-gray-200 rounded-xl overflow-hidden">
                <thead class="bg-emerald-50 text-emerald-900 font-bold uppercase text-[11px]">
                  <tr>
                    <th class="p-3 border-b">Size</th>
                    <th class="p-3 border-b">Độ Tuổi</th>
                    <th class="p-3 border-b">Chiều Cao (cm)</th>
                    <th class="p-3 border-b">Cân Nặng (kg)</th>
                    <th class="p-3 border-b">Đề xuất khối lớp</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td class="p-3 font-bold text-brand-green">Size 6</td>
                    <td class="p-3">5 - 6 tuổi</td>
                    <td class="p-3">110 - 118 cm</td>
                    <td class="p-3">18 - 22 kg</td>
                    <td class="p-3">Lớp 1</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold text-brand-green">Size 8</td>
                    <td class="p-3">7 - 8 tuổi</td>
                    <td class="p-3">119 - 128 cm</td>
                    <td class="p-3">23 - 28 kg</td>
                    <td class="p-3">Lớp 2 - 3</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold text-brand-green">Size 10</td>
                    <td class="p-3">9 - 10 tuổi</td>
                    <td class="p-3">129 - 138 cm</td>
                    <td class="p-3">29 - 35 kg</td>
                    <td class="p-3">Lớp 4 - 5</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold text-brand-green">Size 12</td>
                    <td class="p-3">11 - 12 tuổi</td>
                    <td class="p-3">139 - 148 cm</td>
                    <td class="p-3">36 - 43 kg</td>
                    <td class="p-3">Lớp 6 - 7</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold text-brand-green">Size S / M</td>
                    <td class="p-3">13 - 18 tuổi</td>
                    <td class="p-3">150 - 170 cm</td>
                    <td class="p-3">45 - 65 kg</td>
                    <td class="p-3">Lớp 8 - 12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    `;
  },

  init() {
    this.renderCatalog(HDC.Data.kidsProducts);
  },

  renderCatalog(items) {
    const container = document.getElementById('kidsCatalogGrid');
    if (!container) return;

    container.innerHTML = items.map(k => `
      <div class="bg-white rounded-xl p-3 border shadow-sm group flex flex-col justify-between">
        <div>
          <img src="${k.img}" alt="${k.title}" class="w-full aspect-[3/4] object-cover rounded-lg mb-2">
          <h4 class="font-bold text-xs text-gray-900 line-clamp-1">${k.title}</h4>
          <p class="text-xs font-bold text-brand-red mt-1">${HDC.Utils.formatCurrency(k.price)}</p>
        </div>
        <button onclick="HDC.Views.KidsView.addKidsItem('${k.title}', ${k.price}, '${k.img}')" class="w-full mt-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold py-1.5 rounded transition">
          Thêm vào giỏ
        </button>
      </div>
    `).join('');
  },

  filterGrade(grade, btn) {
    document.querySelectorAll('.kids-grade-btn').forEach(b => {
      b.classList.remove('bg-emerald-700', 'text-white');
      b.classList.add('bg-white', 'text-gray-700');
    });
    btn.classList.add('bg-emerald-700', 'text-white');
    btn.classList.remove('bg-white', 'text-gray-700');

    const filtered = grade === 'all'
      ? HDC.Data.kidsProducts
      : HDC.Data.kidsProducts.filter(k => k.grade === grade);

    this.renderCatalog(filtered);
  },

  addKidsItem(title, price, img) {
    HDC.Store.addToCart({
      id: Date.now(),
      title: title,
      price: price,
      img: img
    }, 'Size 8');
    HDC.Components.CartDrawer.open();
  }
};
