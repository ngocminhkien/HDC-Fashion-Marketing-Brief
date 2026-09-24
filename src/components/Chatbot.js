/**
 * HDC Fashion — Customer Support & FAQ Chat Widget
 * Virtual assistant widget embedded with FAQ knowledge base (clean & transparent)
 */

window.HDC = window.HDC || {};
window.HDC.Components = window.HDC.Components || {};

window.HDC.Components.Chatbot = {
  render() {
    return `
      <!-- Floating Trigger Button -->
      <div class="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        <button onclick="window.scrollTo({top:0, behavior:'smooth'})" class="w-10 h-10 rounded-full bg-white text-gray-700 shadow-md border hover:bg-gray-100 flex items-center justify-center text-sm transition" title="Lên đầu trang">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
        <button onclick="HDC.Components.Chatbot.toggle()" class="bg-brand-green text-white font-bold text-xs py-2.5 px-4 rounded-full shadow-xl hover:bg-brand-greenDark transition flex items-center gap-2 border-2 border-white hover:scale-105">
          <i class="fa-solid fa-comments text-base"></i>
          <span>Tư Vấn & FAQ</span>
        </button>
      </div>

      <!-- Chat Window -->
      <div id="chatbotBox" class="fixed bottom-20 right-5 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 hidden flex-col overflow-hidden animate-fadeIn">
        <div class="bg-brand-green text-white p-3.5 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">🌿</div>
            <div>
              <h4 class="font-bold text-xs">Trợ Lý Tư Vấn HDC</h4>
              <p class="text-[10px] text-emerald-200">Sẵn sàng giải đáp 72 câu hỏi thường gặp</p>
            </div>
          </div>
          <button onclick="HDC.Components.Chatbot.toggle()" class="text-white/80 hover:text-white text-lg">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div id="chatMessages" class="p-3.5 space-y-3 h-72 overflow-y-auto text-xs bg-gray-50">
          <div class="bg-white p-2.5 rounded-lg rounded-tl-none border text-gray-800 shadow-sm max-w-[85%]">
            Xin chào Quý khách! Em là trợ lý tư vấn HDC Fashion. Quý khách muốn tìm hiểu về chất liệu tự nhiên, chọn size, thời gian giao hàng hay báo giá đồng phục B2B ạ?
          </div>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <button onclick="HDC.Components.Chatbot.ask('Sơ mi có cần là ủi không?')" class="bg-white border text-brand-green hover:bg-emerald-50 px-2 py-1 rounded text-[11px]">Không cần là ủi?</button>
            <button onclick="HDC.Components.Chatbot.ask('Tư vấn chọn size chuẩn')" class="bg-white border text-brand-green hover:bg-emerald-50 px-2 py-1 rounded text-[11px]">Chọn size</button>
            <button onclick="HDC.Components.Chatbot.ask('Chính sách giao hàng toàn quốc')" class="bg-white border text-brand-green hover:bg-emerald-50 px-2 py-1 rounded text-[11px]">Giao hàng free</button>
            <button onclick="HDC.Components.Chatbot.ask('Chính sách đổi trả 7 ngày')" class="bg-white border text-brand-green hover:bg-emerald-50 px-2 py-1 rounded text-[11px]">Đổi size 7 ngày</button>
            <button onclick="HDC.Components.Chatbot.ask('Chính sách may đồng phục B2B')" class="bg-white border text-brand-gold hover:bg-amber-50 px-2 py-1 rounded text-[11px]">Báo giá B2B</button>
            <button onclick="HDC.Components.Chatbot.ask('Đồng phục học sinh Vinschool')" class="bg-white border text-emerald-800 hover:bg-emerald-50 px-2 py-1 rounded text-[11px]">IHDC Kids</button>
          </div>
        </div>

        <div class="p-2.5 border-t bg-white flex gap-2">
          <input type="text" id="chatInput" placeholder="Nhập câu hỏi (size, ship, chất liệu, giá...)..." class="w-full border rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-brand-green" onkeypress="if(event.key==='Enter') HDC.Components.Chatbot.send()">
          <button onclick="HDC.Components.Chatbot.send()" class="bg-brand-green text-white px-3 py-1.5 rounded-lg text-xs hover:bg-brand-greenDark transition">
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

    if (q.includes('size') || q.includes('số đo') || q.includes('vừa không')) {
      answer = "Quý khách có thể sử dụng công cụ 'Trợ Lý Chọn Size' trên thanh menu (mục Chọn Size) để tính toán size áo S/M/L/XL/XXL chuẩn xác theo chiều cao & cân nặng nhé!";
    } else if (q.includes('ship') || q.includes('giao hàng') || q.includes('vận chuyển') || q.includes('bao lâu')) {
      answer = "HDC áp dụng chính sách MIỄN PHÍ VẬN CHUYỂN 100% TOÀN QUỐC cho mọi đơn hàng. Thời gian giao hàng từ 1-2 ngày đối với Hà Nội/TP.HCM và 2-3 ngày với các tỉnh thành khác ạ!";
    } else if (q.includes('đổi') || q.includes('trả') || q.includes('hoàn') || q.includes('bảo hành')) {
      answer = "Dạ HDC hỗ trợ ĐỔI SIZE MIỄN PHÍ 7 NGÀY tận nơi. Shipper mang áo size mới đến tận nhà đổi cho Quý khách, hoàn toàn không tốn công đi lại hay phát sinh chi phí!";
    } else if (q.includes('giá') || q.includes('bao nhiêu') || q.includes('bán lẻ')) {
      answer = "Sơ mi chất liệu xanh HDC có giá từ 489.000₫ - 929.000₫, Áo Polo Golf Anti-UV từ 489.000₫ - 529.000₫, Set Ngoại Giao cao cấp 1.490.000₫. Đang có mã HDC50K và HDC100K áp dụng tại bước thanh toán ạ!";
    } else if (q.includes('polo') || q.includes('golf') || q.includes('uv')) {
      answer = "Dòng Polo Golf & Doanh Nhân Trẻ của HDC đạt chuẩn chống nắng UPF 50+, co giãn 4 chiều và thấm hút đa điểm, giữ cảm giác mát lạnh suốt 18 hố golf!";
    } else if (q.includes('thanh toán') || q.includes('cod') || q.includes('chuyển khoản') || q.includes('vnpay') || q.includes('momo')) {
      answer = "HDC hỗ trợ đa dạng phương thức: Nhận hàng kiểm tra ưng ý mới thanh toán (COD), Quét mã QR chuyển khoản VNPAY liên kết mọi ngân hàng, và Ví điện tử MoMo / ZaloPay.";
    } else if (q.includes('ủi') || q.includes('nhăn')) {
      answer = "Sơ mi chất liệu xanh của HDC làm từ sợi sen, tơ chuối, modal có cấu trúc sợi tự phục hồi: giũ nhẹ sau khi giặt là phẳng phiu, hoàn toàn KHÔNG CẦN DÙNG BÀN LÀ Quý khách nhé!";
    } else if (q.includes('sen') || q.includes('xanh') || q.includes('chuối') || q.includes('dừa') || q.includes('chất liệu')) {
      answer = "HDC tiên phong sử dụng 6 loại sợi tự nhiên bản địa: Sợi Sen Đồng Tháp, Tơ Chuối, Xơ Dừa Bến Tre, Bạc Hà Mát Lạnh, Tre Bamboo và Modal. Thoáng mát, kháng khuẩn tự nhiên và thân thiện với làn da.";
    } else if (q.includes('b2b') || q.includes('đồng phục') || q.includes('doanh nghiệp')) {
      answer = "Dạ với đơn hàng đồng phục doanh nghiệp, HDC MIỄN PHÍ 100% thiết kế 3D, chỉnh sửa không giới hạn số lần, chiết khấu lên đến 35% và bảo hành đường may trọn đời ạ!";
    } else if (q.includes('vinschool') || q.includes('kids') || q.includes('học sinh') || q.includes('trường')) {
      answer = "IHDC Kids tự hào là đối tác đồng phục của Hệ thống Giáo dục Vinschool. Bên em nhận may đo polo, váy xếp ly, vest học đường đạt tiêu chuẩn quốc tế cho các trường học trên toàn quốc.";
    } else {
      answer = "Dạ em đã ghi nhận thắc mắc của Quý khách. Chuyên viên chăm sóc khách hàng HDC sẽ liên hệ giải đáp chi tiết ngay, hoặc Quý khách có thể gọi trực tiếp Hotline 1900 888 999 ạ!";
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
