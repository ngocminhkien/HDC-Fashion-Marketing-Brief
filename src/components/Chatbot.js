/**
 * HDC Fashion — AI Chatbot Component
 * Virtual assistant widget embedded with FAQ knowledge base
 */

window.HDC = window.HDC || {};
window.HDC.Components = window.HDC.Components || {};

window.HDC.Components.Chatbot = {
  render() {
    return `
      <!-- Floating Trigger Button -->
      <div class="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        <button onclick="window.scrollTo({top:0, behavior:'smooth'})" class="w-10 h-10 rounded-full bg-white text-gray-700 shadow-md border hover:bg-gray-100 flex items-center justify-center text-sm" title="Lên đầu">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
        <button onclick="HDC.Components.Chatbot.toggle()" class="bg-brand-green text-white font-bold text-xs py-2.5 px-4 rounded-full shadow-xl hover:bg-brand-greenDark transition flex items-center gap-2 border-2 border-white hover:scale-105">
          <i class="fa-solid fa-comments text-base"></i>
          <span>Trợ Lý Ảo AI (FAQ)</span>
        </button>
      </div>

      <!-- Chat Window -->
      <div id="chatbotBox" class="fixed bottom-20 right-5 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 hidden flex-col overflow-hidden animate-fadeIn">
        <div class="bg-brand-green text-white p-3.5 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">🌿</div>
            <div>
              <h4 class="font-bold text-xs">HDC AI Virtual Assistant</h4>
              <p class="text-[10px] text-emerald-200">Sẵn sàng giải đáp 72 câu hỏi</p>
            </div>
          </div>
          <button onclick="HDC.Components.Chatbot.toggle()" class="text-white/80 hover:text-white text-lg">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div id="chatMessages" class="p-3.5 space-y-3 h-64 overflow-y-auto text-xs bg-gray-50">
          <div class="bg-white p-2.5 rounded-lg rounded-tl-none border text-gray-800 shadow-sm max-w-[85%]">
            Xin chào Quý khách! Em là trợ lý ảo HDC Fashion. Quý khách muốn tìm hiểu về chất liệu xanh, chọn size hay đồng phục B2B ạ?
          </div>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <button onclick="HDC.Components.Chatbot.ask('Sơ mi có cần ủi không?')" class="bg-white border text-brand-green hover:bg-emerald-50 px-2 py-1 rounded text-[11px]">Không cần là ủi?</button>
            <button onclick="HDC.Components.Chatbot.ask('Chất liệu xanh là gì?')" class="bg-white border text-brand-green hover:bg-emerald-50 px-2 py-1 rounded text-[11px]">Sợi sen & chuối</button>
            <button onclick="HDC.Components.Chatbot.ask('Chính sách đồng phục B2B')" class="bg-white border text-brand-gold hover:bg-amber-50 px-2 py-1 rounded text-[11px]">Báo giá B2B</button>
            <button onclick="HDC.Components.Chatbot.ask('Đồng phục Vinschool')" class="bg-white border text-emerald-800 hover:bg-emerald-50 px-2 py-1 rounded text-[11px]">IHDC Kids</button>
          </div>
        </div>

        <div class="p-2.5 border-t bg-white flex gap-2">
          <input type="text" id="chatInput" placeholder="Nhập câu hỏi..." class="w-full border rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-brand-green" onkeypress="if(event.key==='Enter') HDC.Components.Chatbot.send()">
          <button onclick="HDC.Components.Chatbot.send()" class="bg-brand-green text-white px-3 py-1.5 rounded-lg text-xs hover:bg-brand-greenDark">
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    `;
  },

  toggle() {
    const box = document.getElementById('chatbotBox');
    if (box) {
      box.classList.toggle('hidden');
      box.classList.toggle('flex');
    }
  },

  ask(query) {
    const chat = document.getElementById('chatMessages');
    if (!chat) return;

    chat.innerHTML += `<div class="bg-emerald-600 text-white p-2 rounded-lg rounded-tr-none ml-auto text-xs max-w-[85%]">${query}</div>`;

    let answer = "";
    const q = query.toLowerCase();
    if (q.includes('ủi')) {
      answer = "Sơ mi chất liệu xanh của HDC được làm từ sợi sen, tơ chuối có cấu trúc tự phục hồi, giũ nhẹ sau giặt là phẳng phiu, hoàn toàn không cần dùng bàn là Quý khách nhé!";
    } else if (q.includes('sen') || q.includes('xanh') || q.includes('chuối')) {
      answer = "HDC sử dụng 6 loại sợi tự nhiên: Sen, Tơ chuối, Xơ dừa, Bạc hà, Bamboo, Modal. Kháng khuẩn tự nhiên, thoáng mát và siêu mềm mịn ạ.";
    } else if (q.includes('b2b') || q.includes('đồng phục')) {
      answer = "Dạ với đơn hàng đồng phục doanh nghiệp, bên em MIỄN PHÍ thiết kế 100%, sửa mẫu không giới hạn số lần và giao hàng miễn phí toàn quốc ạ!";
    } else if (q.includes('vinschool') || q.includes('kids') || q.includes('học sinh')) {
      answer = "IHDC Kids là đối tác đồng phục của Vinschool. Bên em nhận may đo và cung ứng trọn bộ polo, vest, váy xếp ly chuẩn mực, thoáng mát cho học sinh ạ!";
    } else {
      answer = "Dạ em đã ghi nhận yêu cầu của Quý khách. Chuyên viên HDC sẽ hỗ trợ tư vấn chi tiết ngay ạ!";
    }

    setTimeout(() => {
      chat.innerHTML += `<div class="bg-white p-2.5 rounded-lg rounded-tl-none border text-gray-800 shadow-sm max-w-[85%]">${answer}</div>`;
      chat.scrollTop = chat.scrollHeight;
    }, 350);
  },

  send() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    const val = input.value.trim();
    if (!val) return;
    input.value = '';
    this.ask(val);
  }
};
