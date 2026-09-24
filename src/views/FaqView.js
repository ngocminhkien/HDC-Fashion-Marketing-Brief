/**
 * HDC Fashion — Knowledge Base FAQ Hub View
 * Searchable accordion interface covering all 72 questions from the FAQ Specification
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.FaqView = {
  render() {
    return `
      <div id="view-faq" class="view-panel hidden animate-fadeIn py-10 bg-brand-grayBg">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          
          <div class="text-center space-y-1">
            <span class="text-xs font-bold text-brand-gold uppercase tracking-wider">Cơ sở dữ liệu hỗ trợ khách hàng</span>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading uppercase">
              Hỏi Đáp Toàn Diện (FAQ Hub)
            </h1>
            <p class="text-xs text-gray-500">Tìm kiếm nhanh câu trả lời về sợi xanh, công nghệ seamless, chính sách B2B và IHDC Kids</p>
          </div>

          <!-- FAQ Search Input -->
          <div class="relative">
            <input type="text" id="faqSearchInput" onkeyup="HDC.Views.FaqView.search(this.value)" placeholder="Gõ từ khóa tìm kiếm: là ủi, sợi sen, giặt máy, chiết khấu B2B, Vinschool..." class="w-full bg-white border border-gray-300 rounded-2xl py-3.5 pl-11 pr-4 text-xs sm:text-sm focus:outline-none focus:border-brand-green shadow-sm">
            <i class="fa-solid fa-magnifying-glass absolute left-4 top-4 text-gray-400"></i>
          </div>

          <!-- Category Badges -->
          <div class="flex flex-wrap gap-2 justify-center text-xs">
            <button onclick="HDC.Views.FaqView.filterGroup('all', this)" class="faq-group-btn active bg-brand-green text-white px-3 py-1 rounded-full font-semibold">Tất cả</button>
            <button onclick="HDC.Views.FaqView.filterGroup('chat-lieu', this)" class="faq-group-btn bg-white border text-gray-700 px-3 py-1 rounded-full font-semibold hover:bg-gray-100">🌿 Sợi Xanh & Seamless</button>
            <button onclick="HDC.Views.FaqView.filterGroup('b2b', this)" class="faq-group-btn bg-white border text-gray-700 px-3 py-1 rounded-full font-semibold hover:bg-gray-100">💼 Đồng Phục B2B</button>
            <button onclick="HDC.Views.FaqView.filterGroup('kids', this)" class="faq-group-btn bg-white border text-gray-700 px-3 py-1 rounded-full font-semibold hover:bg-gray-100">🎓 IHDC Kids</button>
            <button onclick="HDC.Views.FaqView.filterGroup('ship', this)" class="faq-group-btn bg-white border text-gray-700 px-3 py-1 rounded-full font-semibold hover:bg-gray-100">🚚 Giao Hàng & Đổi Trả</button>
          </div>

          <!-- FAQ Accordion List -->
          <div class="space-y-3" id="faqAccordionContainer">
            <!-- Rendered via JS -->
          </div>

        </div>
      </div>
    `;
  },

  init() {
    this.renderFaqList(HDC.Data.faqs);
  },

  renderFaqList(faqs) {
    const container = document.getElementById('faqAccordionContainer');
    if (!container) return;

    container.innerHTML = faqs.map((f, idx) => `
      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden" data-faq-group="${f.group}">
        <button onclick="HDC.Views.FaqView.toggleAccordion('${f.id}')" class="w-full p-4 text-left font-bold text-xs sm:text-sm text-gray-800 flex justify-between items-center hover:text-brand-green transition">
          <span>${idx + 1}. ${f.q}</span>
          <i id="faq-icon-${f.id}" class="fa-solid fa-chevron-down text-xs text-gray-400 transition-transform"></i>
        </button>
        <div id="faq-body-${f.id}" class="hidden px-4 pb-4 text-xs text-gray-600 leading-relaxed border-t pt-3">
          ${f.a}
        </div>
      </div>
    `).join('');
  },

  toggleAccordion(id) {
    const body = document.getElementById('faq-body-' + id);
    const icon = document.getElementById('faq-icon-' + id);
    if (!body || !icon) return;

    const isHidden = body.classList.contains('hidden');
    body.classList.toggle('hidden');
    icon.classList.toggle('rotate-180', isHidden);
  },

  search(keyword) {
    const q = (keyword || '').toLowerCase().trim();
    const items = document.querySelectorAll('#faqAccordionContainer > div');
    items.forEach(el => {
      const text = el.innerText.toLowerCase();
      el.style.display = text.includes(q) ? 'block' : 'none';
    });
  },

  filterGroup(grp, btn) {
    document.querySelectorAll('.faq-group-btn').forEach(b => {
      b.classList.remove('bg-brand-green', 'text-white');
      b.classList.add('bg-white', 'text-gray-700');
    });
    btn.classList.add('bg-brand-green', 'text-white');
    btn.classList.remove('bg-white', 'text-gray-700');

    const items = document.querySelectorAll('#faqAccordionContainer > div');
    items.forEach(el => {
      if (grp === 'all' || el.dataset.faqGroup === grp) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  }
};
