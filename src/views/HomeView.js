/**
 * HDC Fashion — Haute Couture & Sensory Fashion Experience (HomeView)
 * Bespoke Art Direction & Radical Interactive Features:
 * - Editorial Luxury Hero with Obsidian/Emerald Couture Aesthetic & Sacred Đông Sơn Motif
 * - Scientific Temperature & Breathability Comparison (35.2°C vs 38.8°C)
 * - Interactive Digital Fiber Microscope HUD (100x Microscopic Zoom & Cellular Scan)
 * - Executive Capsule Fitting Studio (Interactive 1-Click Outfits)
 * - Smart AI Size & Fit Advisor (Real-time Height/Weight/Fit Calculator)
 * - Interactive B2B Corporate Uniform Cost Estimator
 * - Signature Best Sellers with Direct On-Card Size Selection
 * - Luxury Ticket Voucher Vault & Social Proof Wall (Vinschool & 30 Năm DNT)
 * - Floating Luxury Dock
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.HomeView = {
  activeFiber: 'sen',
  activeCategory: 'all',
  activeLookbook: 'executive',

  // Interactive Size Advisor State
  sizeAdvisor: {
    gender: 'nam',
    height: 172,
    weight: 68,
    fit: 'regular'
  },

  // Interactive B2B Estimator State
  b2bEstimator: {
    quantity: 150,
    fabric: 'sen'
  },

  // 6 Indigenous Green Fibers Database
  fiberData: {
    sen: {
      name: "Sợi Sen Đồng Tháp",
      region: "Đồng Tháp Mười, Miền Tây Nam Bộ",
      badge: "Kháng Khuẩn 99.8% • Tự Phục Hồi Phẳng",
      icon: "fa-solid fa-spa",
      colorTag: "emerald",
      color: "text-emerald-800 bg-emerald-50 border-emerald-300",
      description: "Chiết xuất từ cuống hoa sen Đồng Tháp, cấu trúc vi xốp rỗng 65% tự nhiên giúp điều hòa thân nhiệt, tự kéo phẳng nếp gấp sau 15 phút mặc và triệt tiêu 99.8% vi khuẩn gây mùi.",
      hudCode: "LOTUS-BIO-PORES: 65% HOLLOW CAVITY | UV-CUT: 97.4%",
      stats: [
        { label: "Kháng khuẩn sinh học", value: "99.8%", sub: "Chứng nhận AATCC 100" },
        { label: "Tự phục hồi phẳng", value: "98%", sub: "Không cần là ủi" },
        { label: "Thấm hút mồ hôi", value: "x2.5", sub: "Gấp 2.5 lần Cotton" }
      ],
      img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
      macroImg: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&auto=format&fit=crop&q=80",
      productSample: "Sơ mi Trắng Sợi Sen Cao Cấp 1001",
      productPrice: "649.000₫",
      productId: 1
    },
    chuoi: {
      name: "Tơ Chuối Bến Tre",
      region: "Vườn Chuối & Xứ Dừa Bến Tre",
      badge: "Siêu Nhẹ -30% • Kiểm Soát Ẩm 24H",
      icon: "fa-solid fa-leaf",
      colorTag: "amber",
      color: "text-amber-800 bg-amber-50 border-amber-300",
      description: "Khai thác từ thân chuối sau thu hoạch qua công nghệ phân tách sinh học, tạo sợi vải bền bỉ siêu nhẹ, giảm 30% trọng lượng so với âu phục thông thường và giữ form đứng dáng hoàn hảo.",
      hudCode: "BANANA-TENSILE: 780 MPa | DENSITY: 1.35 g/cm³",
      stats: [
        { label: "Trọng lượng âu phục", value: "-30%", sub: "Nhẹ lướt trên da" },
        { label: "Độ bền kéo chịu lực", value: "Cực Cao", sub: "Bền màu 100+ lần giặt" },
        { label: "Kiểm soát độ ẩm", value: "24 Giờ", sub: "Khô thoáng suốt ngày dài" }
      ],
      img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80",
      macroImg: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop&q=80",
      productSample: "Sơ mi Công Sở Tơ Chuối Kháng Khuẩn 4004",
      productPrice: "599.000₫",
      productId: 4
    },
    bamboo: {
      name: "Tre Bamboo Tây Bắc",
      region: "Vùng Rừng Tre Tự Nhiên Tây Bắc",
      badge: "Mềm Như Lụa • Chống Nắng UPF 50+",
      icon: "fa-solid fa-tree",
      colorTag: "teal",
      color: "text-teal-800 bg-teal-50 border-teal-300",
      description: "Hợp chất sinh học tự nhiên Bamboo Kun bảo vệ tế bào da tuyệt đối trước ánh nắng nhiệt đới. Thớ vải êm mềm lướt nhẹ, sinh ra dành riêng cho giới doanh nhân chơi golf và hoạt động ngoài trời.",
      hudCode: "BAMBOO-KUN: NATURAL ANTIMICROBIAL | UPF 50+ SOLAR",
      stats: [
        { label: "Chỉ số chống nắng", value: "UPF 50+", sub: "Ngăn 98% tia UVA/UVB" },
        { label: "Độ mềm cảm quan", value: "Như Lụa", sub: "Không gây rát da" },
        { label: "Kháng nấm mốc", value: "Tuyệt Đối", sub: "Không mùi ẩm mốc" }
      ],
      img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&auto=format&fit=crop&q=80",
      macroImg: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=600&auto=format&fit=crop&q=80",
      productSample: "Áo Polo Chống Tia Cực Tím HDC Golf 5005",
      productPrice: "489.000₫",
      productId: 5
    },
    bacha: {
      name: "Sợi Bạc Hà Mát Lạnh",
      region: "Nông Trại Bạc Hà Hữu Cơ",
      badge: "Hạ Nhiệt Da 2.8°C • Sảng Khoái",
      icon: "fa-solid fa-snowflake",
      colorTag: "cyan",
      color: "text-cyan-800 bg-cyan-50 border-cyan-300",
      description: "Tinh chất menthol hữu cơ được vi bọc trong từng tao sợi, giải phóng ion làm mát tự nhiên khi tiếp xúc với nhiệt cơ thể, lập tức xua tan cơn nóng bức ngột ngạt mùa hè.",
      hudCode: "MENTHOL-MICRO-CAPSULES: THERMAL-DISSIPATION -2.8°C",
      stats: [
        { label: "Hạ nhiệt tiếp xúc", value: "-2.8°C", sub: "Lạnh tức thì khi mặc" },
        { label: "Tốc độ bay hơi ẩm", value: "0.8 Giây", sub: "Không đọng vệt mồ hôi" },
        { label: "Hương thoảng nhẹ", value: "Thư Giãn", sub: "Giảm stress công sở" }
      ],
      img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&auto=format&fit=crop&q=80",
      macroImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
      productSample: "Sơ Mi Sợi Bạc Hà Hạ Nhiệt 1062",
      productPrice: "689.000₫",
      productId: 7
    },
    modal: {
      name: "Gỗ Sồi Modal Seamless",
      region: "Cellulose Rừng Trồng Sinh Thái",
      badge: "Dệt Liền 4D • Không Vết Hằn",
      icon: "fa-solid fa-feather",
      colorTag: "purple",
      color: "text-purple-800 bg-purple-50 border-purple-300",
      description: "Sự kết hợp giữa sợi cellulose gỗ sồi quý hiếm và công nghệ dệt liền Seamless 4D độc quyền, loại bỏ 100% đường may gây cọ xát ở vùng cổ và nách, cho chuyển động tự do không giới hạn.",
      hudCode: "SEAMLESS-4D: ZERO-FRICTION KNIT | RESILIENCE 99.4%",
      stats: [
        { label: "Co giãn đa chiều", value: "4D Stretch", sub: "Đàn hồi tự nhiên" },
        { label: "Công nghệ dệt", value: "Seamless", sub: "Loại bỏ đường may thô" },
        { label: "Độ bền màu sắc", value: "100+ Lần", sub: "Không phai nhạt" }
      ],
      img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
      macroImg: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=600&auto=format&fit=crop&q=80",
      productSample: "Sơ mi Seamless Co Giãn 4 Chiều 2002",
      productPrice: "789.000₫",
      productId: 2
    },
    xodua: {
      name: "Xơ Dừa Nam Bộ",
      region: "Thủ Phủ Dừa Bến Tre",
      badge: "Kinh Tế Tuần Hoàn • Chống Bám Bụi",
      icon: "fa-solid fa-seedling",
      colorTag: "yellow",
      color: "text-yellow-800 bg-yellow-50 border-yellow-300",
      description: "Biến phụ phẩm xơ dừa thành sợi dệt thời trang cao cấp. Khả năng chống tia cực tím tự nhiên, không tích điện và hoàn toàn có thể phân hủy sinh học trong đất mà không gây ô nhiễm.",
      hudCode: "COCONUT-CIRCULAR: ANTI-STATIC LEVEL-A | ZERO-WASTE",
      stats: [
        { label: "Thân thiện tự nhiên", value: "100%", sub: "Phân hủy sinh học" },
        { label: "Chống tích điện bụi", value: "Chuẩn A", sub: "Luôn sáng bóng" },
        { label: "Độ bền cọ xát", value: "5/5 Sao", sub: "Không xù lông" }
      ],
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
      macroImg: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop&q=80",
      productSample: "Sơ Mi Xơ Dừa Eco Classic",
      productPrice: "569.000₫",
      productId: 11
    }
  },

  // Curated Outfits Capsule Database
  lookbookData: {
    executive: {
      title: "Doanh Nhân Lãnh Đạo",
      subtitle: "Bản lĩnh đĩnh đạc trong mọi cuộc đàm phán cấp cao",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
      badge: "Khuyên Dùng Cho CEO / Quản Lý",
      items: [
        { name: "Sơ mi Trắng Sợi Sen Cao Cấp 1001", price: 649000, id: 1 },
        { name: "Sơ mi Seamless Co Giãn 4 Chiều 2002", price: 789000, id: 2 },
        { name: "Cà vạt Lụa Họa Tiết Trống Đồng", price: 299000, id: 3 }
      ],
      comboPrice: 1476000,
      originalPrice: 1737000,
      saving: "261.000₫ (Tiết kiệm 15%)"
    },
    golf: {
      title: "Golfer & Cuối Tuần Sang Trọng",
      subtitle: "Bảo vệ làn da trước nắng gắt, co giãn tối đa cho từng cú swing",
      img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&auto=format&fit=crop&q=80",
      badge: "Chứng Nhận Chống Nắng UPF 50+",
      items: [
        { name: "Áo Polo Chống Tia Cực Tím HDC Golf 5005", price: 489000, id: 5 },
        { name: "Áo Polo Sợi Tre Bamboo Kháng Khuẩn", price: 529000, id: 10 }
      ],
      comboPrice: 865000,
      originalPrice: 1018000,
      saving: "153.000₫ (Tiết kiệm 15%)"
    },
    heritage: {
      title: "Di Sản Văn Hóa Việt Nam",
      subtitle: "Khắc họa hoa văn Trống Đồng Đông Sơn 2.000 năm lịch sử",
      img: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800&auto=format&fit=crop&q=80",
      badge: "Bộ Sưu Tập Tự Hào Bản Sắc",
      items: [
        { name: "Sơ mi Khắc Họa Trống Đồng Cổ 3003", price: 899000, id: 3 },
        { name: "Sơ Mi Họa Tiết Hang Xóm Trại Di Sản", price: 849000, id: 8 }
      ],
      comboPrice: 1485000,
      originalPrice: 1748000,
      saving: "263.000₫ (Tiết kiệm 15%)"
    },
    kids: {
      title: "Học Đường Thế Hệ Mới (IHDC Kids)",
      subtitle: "Giải pháp đồng phục chuẩn quốc tế Vinschool an toàn cho da nhạy cảm",
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
      badge: "Đối Tác Chính Thức Vinschool",
      items: [
        { name: "Bộ Đồng Phục Học Sinh Tiêu Chuẩn Vinschool", price: 420000, id: 1 },
        { name: "Polo Thể Thao Học Đường Siêu Thoáng Khí", price: 290000, id: 2 }
      ],
      comboPrice: 603000,
      originalPrice: 710000,
      saving: "107.000₫ (Tiết kiệm 15%)"
    }
  },

  /**
   * Main Render Method
   */
  render() {
    const products = HDC.Data.products || [];
    const activeFiber = this.fiberData[this.activeFiber] || this.fiberData.sen;
    const activeLookbook = this.lookbookData[this.activeLookbook] || this.lookbookData.executive;

    return `
      <div id="view-home" class="view-panel hidden bg-[#faf9f5] text-gray-800">
        
        <!-- Continuous Brand Values Announcement Ticker -->
        <div class="bg-brand-greenDark text-amber-200/90 py-2 overflow-hidden text-[11px] font-bold tracking-widest uppercase border-b border-brand-gold/30 select-none">
          <div class="marquee-track flex gap-12 whitespace-nowrap">
            <span>✦ 100% SỢI SINH HỌC TỰ NHIÊN BẢN ĐỊA VIỆT NAM ✦</span>
            <span>⚡ CÔNG NGHỆ TỰ PHỤC HỒI 98% KHÔNG CẦN BÀN LÀ ⚡</span>
            <span>🏆 ĐỐI TÁC ĐỒNG PHỤC 30 NĂM DNT & HỆ THỐNG VINSCHOOL 🏆</span>
            <span>✨ MAY ĐO SEAMLESS 4D KHÔNG ĐƯỜNG MAY CỌ XÁT ✨</span>
            <span>🚚 MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC & ĐỔI SIZE 7 NGÀY TẬN NƠI 🚚</span>
          </div>
        </div>

        <!-- ========================================================
             1. HAUTE COUTURE EDITORIAL HERO COVER (LUMINOUS & RADIANT)
             ======================================================== -->
        <section class="relative overflow-hidden bg-gradient-to-b from-[#fbf9f4] via-[#f7f3e8] to-[#f0e9dc] text-gray-900 py-14 lg:py-24 border-b border-amber-200/70">
          
          <!-- Animated Sacred Đông Sơn Sun Motif in Background (Noble Gold Silk Watermark) -->
          <div class="absolute -top-40 -right-40 w-[600px] h-[600px] opacity-[0.14] pointer-events-none animate-dongson-slow">
            <svg viewBox="0 0 500 500" class="w-full h-full fill-none stroke-[#b89047] stroke-[1.4]">
              <circle cx="250" cy="250" r="230"/>
              <circle cx="250" cy="250" r="180" stroke-dasharray="8 6"/>
              <circle cx="250" cy="250" r="130"/>
              <circle cx="250" cy="250" r="80" stroke-dasharray="4 4"/>
              <circle cx="250" cy="250" r="30" fill="currentColor"/>
              ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => `
                <line x1="250" y1="250" x2="${250 + 220 * Math.cos(deg * Math.PI / 180)}" y2="${250 + 220 * Math.sin(deg * Math.PI / 180)}" opacity="0.6"/>
              `).join('')}
            </svg>
          </div>

          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <!-- Left Storytelling Content -->
              <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                <div class="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-300 shadow-sm">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></span>
                  <span class="text-xs font-bold text-brand-green uppercase tracking-widest font-heading">
                    Kỷ Nguyên Thời Trang Sinh Học Bản Địa 2026
                  </span>
                </div>

                <div class="space-y-3">
                  <h1 class="text-4xl sm:text-5xl lg:text-[62px] font-extrabold font-serif leading-[1.08] tracking-tight text-[#0f291a]">
                    Khí Chất Bản Lĩnh, <br class="hidden sm:inline">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-700 to-brand-gold">
                      Khắc Họa Di Sản
                    </span>
                  </h1>
                  <p class="text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                    Từ thớ sợi phù sa Sen Đồng Tháp, Tơ Chuối Bến Tre đến hào khí Trống Đồng ngàn năm. HDC Fashion kiến tạo thế hệ âu phục công sở & giải pháp đồng phục doanh nghiệp <strong class="text-brand-green font-bold">hoàn toàn không cần bàn là</strong>, tự thở và nâng tầm phong thái người dẫn đầu.
                  </p>
                </div>

                <!-- Three Key Pillars Badge Row (Luminous Pearl Style) -->
                <div class="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
                  <div class="bg-white/95 backdrop-blur p-3.5 rounded-2xl border border-amber-200/80 shadow-md text-center hover:scale-105 transition-transform">
                    <i class="fa-solid fa-wand-magic-sparkles text-brand-gold text-lg mb-1"></i>
                    <div class="font-bold text-xs text-gray-900">Tự Phẳng 98%</div>
                    <div class="text-[10px] text-gray-500 mt-0.5">Không cần bàn là</div>
                  </div>
                  <div class="bg-white/95 backdrop-blur p-3.5 rounded-2xl border border-amber-200/80 shadow-md text-center hover:scale-105 transition-transform">
                    <i class="fa-solid fa-temperature-arrow-down text-emerald-600 text-lg mb-1"></i>
                    <div class="font-bold text-xs text-gray-900">Hạ Nhiệt 2.8°C</div>
                    <div class="text-[10px] text-gray-500 mt-0.5">Sợi sen & bạc hà</div>
                  </div>
                  <div class="bg-white/95 backdrop-blur p-3.5 rounded-2xl border border-amber-200/80 shadow-md text-center hover:scale-105 transition-transform">
                    <i class="fa-solid fa-certificate text-brand-gold text-lg mb-1"></i>
                    <div class="font-bold text-xs text-gray-900">Chuẩn Vinschool</div>
                    <div class="text-[10px] text-gray-500 mt-0.5">Đối tác 30 năm DNT</div>
                  </div>
                </div>

                <!-- Primary Action Button Stack -->
                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <button onclick="HDC.Router.navigate('shop')" class="btn-shimmer bg-brand-green hover:bg-brand-greenDark text-white font-extrabold px-8 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-xl shadow-brand-green/25 flex items-center gap-2.5 hover:scale-[1.02] active:scale-[0.98]">
                    <span>Khám Phá Cửa Hàng</span>
                    <i class="fa-solid fa-arrow-right text-xs"></i>
                  </button>
                  <button onclick="HDC.Router.navigate('b2b')" class="bg-white hover:bg-emerald-50 text-brand-green border-2 border-brand-green/50 px-7 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
                    <i class="fa-solid fa-briefcase text-xs text-brand-gold"></i>
                    <span>Đồng Phục Doanh Nghiệp (B2B)</span>
                  </button>
                </div>

                <!-- Verified Stats Bar -->
                <div class="pt-4 border-t border-amber-200/60 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-600">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-600"></i>
                    <span>500+ Doanh nghiệp Việt tin dùng</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-truck-fast text-brand-gold"></i>
                    <span>Giao hàng hỏa tốc 24H</span>
                  </div>
                </div>

              </div>

              <!-- Right Centerpiece: High-Fashion Editorial Artwork -->
              <div class="lg:col-span-5 relative">
                <div class="relative mx-auto max-w-md">
                  
                  <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white card-lift group cursor-pointer gold-rim-glow" onclick="HDC.Components.QuickViewModal.open(1)">
                    <img src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80" alt="HDC Fashion Haute Couture" class="w-full h-[470px] sm:h-[510px] object-cover product-img-hover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                    
                    <!-- Floating Luxury Badges on Image -->
                    <div class="absolute top-4 left-4">
                      <span class="glass-luxury text-brand-green font-bold text-[10px] px-3.5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md border border-amber-300/60">
                        <i class="fa-solid fa-spa text-xs text-brand-gold"></i> 100% Sợi Sen Đồng Tháp
                      </span>
                    </div>

                    <div class="absolute top-4 right-4">
                      <span class="bg-brand-red text-white font-extrabold text-[10px] px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider animate-float">
                        Không Cần Bàn Là
                      </span>
                    </div>

                    <!-- Bottom Hero Information Plate -->
                    <div class="absolute bottom-5 left-5 right-5 text-white space-y-2">
                      <span class="text-[10px] uppercase font-bold tracking-widest text-emerald-300">Tuyệt Phẩm Di Sản 2026</span>
                      <h3 class="font-serif text-xl sm:text-2xl font-bold leading-tight">
                        Sơ Mi Doanh Nhân Sợi Sen Kháng Khuẩn 1001
                      </h3>
                      <div class="flex items-center justify-between pt-1 border-t border-white/20">
                        <span class="text-amber-300 font-extrabold text-base">649.000₫ <span class="text-xs text-white/70 line-through font-normal">799.000₫</span></span>
                        <span class="text-xs bg-brand-gold text-gray-950 px-3 py-1.5 rounded-xl font-extrabold group-hover:bg-white transition shadow">
                          Xem Chi Tiết &rarr;
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Floating Partner Micro-Card (Bottom Right) -->
                  <div class="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl border border-amber-200/80 flex items-center gap-3 animate-float-delay hidden sm:flex max-w-[240px]">
                    <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-lg font-bold shrink-0">
                      <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                      <div class="text-[10px] text-gray-400 font-bold uppercase">Nhà Cung Cấp Chính Thức</div>
                      <div class="text-xs font-bold text-gray-900">Đồng Phục Vinschool</div>
                      <div class="text-[10px] text-emerald-600 font-semibold">IHDC Kids Thế Hệ Mới</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        <!-- ========================================================
             2. ĐỐI CHỨNG THỰC NGHIỆM: SO SÁNH NHIỆT ĐỘ & ĐỘ THOÁNG KHÍ
             Bằng chứng thực nghiệm: 35.2°C vs 38.8°C
             ======================================================== -->
        <section class="py-16 lg:py-24 bg-gradient-to-b from-[#f0e9dc] via-[#f8f6f0] to-white text-gray-900 border-b border-gray-200 reveal-on-scroll relative overflow-hidden">
          
          <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            
            <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span class="text-[11px] font-bold text-brand-gold uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                ✦ Bằng Chứng Khoa Học Thực Nghiệm
              </span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-greenDark font-serif">
                Tại Sao Áo Sơ Mi HDC Mát Hơn 2.8°C?
              </h2>
              <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Chiêm ngưỡng bằng chứng khoa học thực nghiệm: Áo thường giữ nhiệt ngột ngạt VS Áo sợi sen HDC tự giải phóng thân nhiệt.
              </p>
            </div>

            <!-- Comparison Arena -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
              
              <!-- Left: Conventional Cotton/Poly -->
              <div class="bg-white rounded-3xl p-6 border-2 border-red-200 space-y-4 relative overflow-hidden shadow-lg hover:shadow-xl transition">
                <div class="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div class="text-xs font-bold text-red-600 uppercase tracking-wider flex items-center gap-2">
                    <i class="fa-solid fa-circle-xmark text-base"></i> Sơ Mi Cotton/Poly Thường
                  </div>
                  <span class="text-xs font-black px-2.5 py-0.5 rounded-full bg-red-100 text-red-600 border border-red-300">
                    🔥 38.8°C (Rất Nóng)
                  </span>
                </div>

                <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900">
                  <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80" alt="Cotton thường" class="w-full h-full object-cover">
                  
                  <div class="absolute bottom-3 left-3 bg-black/75 backdrop-blur px-3 py-1.5 rounded-xl text-[10px] text-gray-300 font-mono flex items-center gap-1.5">
                    <i class="fa-solid fa-triangle-exclamation text-amber-400"></i> CHỈ SỐ: BÍ BÁCH & TÍCH TỤ MỒ HÔI
                  </div>
                </div>

                <ul class="space-y-2 text-xs text-gray-600 pt-1">
                  <li class="flex items-start gap-2">
                    <span class="text-red-500 font-bold">✕</span>
                    <span>Thớ vải dệt chặt giữ nhiệt ẩm, gây ngột ngạt sau 2 giờ ngồi họp.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-red-500 font-bold">✕</span>
                    <span>Dễ ố vàng nách và tích tụ vi khuẩn tạo mùi cơ thể.</span>
                  </li>
                </ul>
              </div>

              <!-- Right: HDC Lotus Bio-Shirt -->
              <div class="bg-gradient-to-b from-white via-emerald-50/40 to-white rounded-3xl p-6 border-2 border-emerald-500 space-y-4 relative overflow-hidden shadow-xl hover:shadow-2xl transition">
                <div class="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div class="text-xs font-bold text-brand-green uppercase tracking-wider flex items-center gap-2 font-heading">
                    <i class="fa-solid fa-circle-check text-base"></i> Sơ Mi Sợi Sen Sinh Học HDC
                  </div>
                  <span class="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    ❄️ 35.2°C (Hạ Nhiệt -2.8°C)
                  </span>
                </div>

                <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-emerald-950">
                  <img src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80" alt="Sơ mi sen HDC" class="w-full h-full object-cover">

                  <div class="absolute bottom-3 left-3 bg-black/75 backdrop-blur px-3 py-1.5 rounded-xl text-[10px] text-emerald-300 font-mono flex items-center gap-1.5">
                    <i class="fa-solid fa-leaf text-emerald-400"></i> CHỈ SỐ: VI XỐP RỖNG LƯU THÔNG KHÍ MÁT
                  </div>
                </div>

                <ul class="space-y-2 text-xs text-gray-700 pt-1">
                  <li class="flex items-start gap-2">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>Hạ nhiệt độ tiếp xúc bề mặt da 2.8°C, mát lạnh suốt ngày dài làm việc.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-emerald-600 font-bold">✓</span>
                    <span>Kháng khuẩn sinh học 99.8% — không mùi hôi áo dù bay đường dài 12 tiếng.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>


        <!-- ========================================================
             3. WOW FACTOR 2: KÍNH HIỂN VI SOI THỚ SỢI ĐIỆN TỬ 100X
             Digital Fiber Microscope HUD & Cellular Structure Scan
             ======================================================== -->
        <section class="py-16 lg:py-24 bg-white border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span class="text-[11px] font-bold text-brand-gold uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                ✦ Phòng Thí Nghiệm Quang Học 100x
              </span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-greenDark font-serif">
                Kính Hiển Vi Soi Thớ Sợi Sinh Học
              </h2>
              <p class="text-xs sm:text-sm text-gray-500">
                Chọn mẫu sợi để khám phá cấu trúc vi mô độc quyền giúp áo tự thở và không cần là ủi
              </p>

              <!-- Fiber Selection Pills -->
              <div class="flex flex-wrap justify-center gap-2 pt-2" id="fiberMicroTabs">
                ${Object.keys(this.fiberData).map(key => {
                  const f = this.fiberData[key];
                  const isActive = key === this.activeFiber;
                  return `
                    <button onclick="HDC.Views.HomeView.selectFiber('${key}')" class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                      isActive 
                        ? 'bg-brand-green text-white shadow-md scale-105' 
                        : 'bg-brand-grayBg text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }">
                      <i class="${f.icon}"></i>
                      <span>${f.name}</span>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Microscope Visual HUD Box -->
            <div id="microscopeDisplayPanel" class="bg-gray-950 rounded-3xl p-6 sm:p-10 border border-gray-800 text-white shadow-2xl">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <!-- Left Telemetry & Lab Specs -->
                <div class="lg:col-span-7 space-y-5">
                  <div class="flex items-center gap-2">
                    <span class="text-[10px] font-mono bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/40">
                      ZOOM 100X • OPTICAL SCAN
                    </span>
                    <span class="text-xs text-gray-400 font-mono">STATUS: VERIFIED</span>
                  </div>

                  <h3 class="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                    ${activeFiber.name}
                  </h3>

                  <p class="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    ${activeFiber.description}
                  </p>

                  <!-- Technical Telemetry Data -->
                  <div class="p-3 bg-black/60 rounded-xl border border-gray-800 font-mono text-[11px] text-emerald-400 space-y-1">
                    <div>> TELEMETRY: ${activeFiber.hudCode}</div>
                    <div>> VÙNG NGUYÊN LIỆU: ${activeFiber.region}</div>
                    <div>> KIỂM ĐỊNH AATCC 100: ĐẠT TIÊU CHUẨN QUỐC TẾ</div>
                  </div>

                  <!-- 3 Metrics Gauges -->
                  <div class="grid grid-cols-3 gap-3 pt-1">
                    ${activeFiber.stats.map(s => `
                      <div class="bg-gray-900 p-3.5 rounded-2xl border border-gray-800 text-center">
                        <div class="text-xl sm:text-2xl font-black text-amber-300 font-heading">${s.value}</div>
                        <div class="text-xs font-bold text-gray-200 mt-0.5">${s.label}</div>
                        <div class="text-[10px] text-gray-500">${s.sub}</div>
                      </div>
                    `).join('')}
                  </div>

                  <div class="pt-2 flex items-center justify-between border-t border-gray-800">
                    <span class="text-xs text-gray-400">Ứng dụng trên: <strong>${activeFiber.productSample}</strong></span>
                    <button onclick="HDC.Components.QuickViewModal.open(${activeFiber.productId})" class="btn-shimmer bg-brand-gold text-gray-950 font-bold text-xs px-5 py-2.5 rounded-xl uppercase transition shadow">
                      Xem Chi Tiết Áo &rarr;
                    </button>
                  </div>
                </div>

                <!-- Right Microscope Magnifier Lens -->
                <div class="lg:col-span-5 relative flex items-center justify-center">
                  <div class="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-amber-300/60 shadow-2xl microscope-reticle group">
                    <img id="macroFiberImg" src="${activeFiber.macroImg}" alt="${activeFiber.name}" class="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700">
                    
                    <!-- HUD Crosshair Reticle -->
                    <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
                      <div class="w-full h-px bg-amber-300/30"></div>
                      <div class="h-full w-px bg-amber-300/30 absolute"></div>
                      <div class="w-20 h-20 border border-amber-300/50 rounded-full absolute"></div>
                    </div>

                    <div class="absolute bottom-3 inset-x-0 text-center pointer-events-none">
                      <span class="bg-black/80 text-amber-300 font-mono text-[10px] px-2.5 py-0.5 rounded-full border border-amber-300/30">
                        CẤU TRÚC VI MÔ 100X
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>




        <!-- ========================================================
             5. HAUTE COUTURE EXECUTIVE LOOKBOOK & CAPSULE OUTFITS
             ======================================================== -->
        <section class="py-16 bg-white border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span class="text-[11px] font-bold text-brand-gold uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                  ✦ Bản Đồ Phong Cách Doanh Nhân
                </span>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-greenDark font-serif mt-2">
                  Bộ Sưu Tập Phối Sẵn (Capsule Outfits)
                </h2>
                <p class="text-xs sm:text-sm text-gray-500 mt-1">
                  Đồng bộ phong cách không cần suy nghĩ — Đặt trọn bộ tiết kiệm ngay 15%
                </p>
              </div>

              <!-- Lookbook Switcher Tabs -->
              <div class="flex flex-wrap gap-2">
                ${Object.keys(this.lookbookData).map(k => {
                  const lb = this.lookbookData[k];
                  const isLbActive = k === this.activeLookbook;
                  return `
                    <button onclick="HDC.Views.HomeView.setLookbook('${k}')" class="px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm ${
                      isLbActive
                        ? 'bg-brand-green text-white shadow-md scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }">
                      ${lb.title}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Active Lookbook Detail Box -->
            <div id="lookbookDisplayPanel" class="bg-brand-grayBg rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <!-- Left Lookbook Cover Image -->
                <div class="lg:col-span-5 relative">
                  <div class="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] relative group">
                    <img src="${activeLookbook.img}" alt="${activeLookbook.title}" class="w-full h-full object-cover product-img-hover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                    <div class="absolute top-4 left-4">
                      <span class="bg-brand-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                        ${activeLookbook.badge}
                      </span>
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 text-white">
                      <h4 class="text-xl font-bold font-serif">${activeLookbook.title}</h4>
                      <p class="text-xs text-amber-200 mt-0.5">${activeLookbook.subtitle}</p>
                    </div>
                  </div>
                </div>

                <!-- Right Outfits Item Breakdown & Combo CTA -->
                <div class="lg:col-span-7 space-y-6">
                  <div>
                    <h3 class="text-2xl font-extrabold text-brand-greenDark font-serif">
                      Trọn Bộ: ${activeLookbook.title}
                    </h3>
                    <p class="text-xs text-gray-500 mt-1">${activeLookbook.subtitle}</p>
                  </div>

                  <!-- Individual Items in Bundle -->
                  <div class="space-y-3">
                    ${activeLookbook.items.map(item => `
                      <div class="flex items-center justify-between p-3.5 rounded-xl bg-white border border-gray-200 hover:border-brand-green/40 transition shadow-sm">
                        <div class="flex items-center gap-3">
                          <i class="fa-solid fa-shirt text-brand-green text-sm"></i>
                          <span class="text-xs font-bold text-gray-800">${item.name}</span>
                        </div>
                        <span class="text-xs font-bold text-brand-green">${item.price.toLocaleString('vi-VN')}₫</span>
                      </div>
                    `).join('')}
                  </div>

                  <!-- Combo Pricing Breakdown -->
                  <div class="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div class="text-[11px] text-gray-500">Tổng giá bán lẻ: <span class="line-through">${activeLookbook.originalPrice.toLocaleString('vi-VN')}₫</span></div>
                      <div class="text-xl font-extrabold text-brand-red font-heading">${activeLookbook.comboPrice.toLocaleString('vi-VN')}₫</div>
                      <div class="text-[11px] text-emerald-700 font-bold mt-0.5">✦ ${activeLookbook.saving}</div>
                    </div>
                    <button onclick="HDC.Views.HomeView.addComboToCart('${this.activeLookbook}')" class="btn-shimmer bg-brand-green hover:bg-brand-greenDark text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow flex items-center justify-center gap-2">
                      <i class="fa-solid fa-cart-plus"></i>
                      <span>Thêm Cả Bộ Vào Giỏ Hàng</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>


        <!-- ========================================================
             6. SMART AI SIZE & FIT ADVISOR
             ======================================================== -->
        <section id="smart-size-advisor" class="py-16 bg-white border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-5xl mx-auto px-4 sm:px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span class="text-[11px] font-bold text-brand-gold uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                ✦ Trợ Lý May Đo Kỹ Thuật Số
              </span>
              <h2 class="text-3xl font-extrabold text-brand-greenDark font-serif">
                Trợ Lý Chọn Size Chuẩn Xác (HDC Smart Fit)
              </h2>
              <p class="text-xs sm:text-sm text-gray-500">
                Nhập số đo cơ bản để nhận ngay size áo vừa vặn 98% chuẩn form dáng người Việt
              </p>
            </div>

            <!-- Size Calculator Interactive Box -->
            <div class="bg-gradient-to-br from-brand-grayBg via-white to-brand-grayBg p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xl">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <!-- Controls Column -->
                <div class="md:col-span-7 space-y-6">
                  
                  <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Giới Tính:</label>
                    <div class="grid grid-cols-2 gap-3">
                      <button id="sizeGenderMale" onclick="HDC.Views.HomeView.setSizeGender('nam')" class="py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 bg-brand-green text-white border-brand-green shadow-sm">
                        <i class="fa-solid fa-mars"></i> Nam Giới
                      </button>
                      <button id="sizeGenderFemale" onclick="HDC.Views.HomeView.setSizeGender('nu')" class="py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 bg-white text-gray-700 hover:bg-gray-100 border-gray-200">
                        <i class="fa-solid fa-venus"></i> Nữ Giới
                      </button>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between items-center text-xs font-bold text-gray-700 mb-1.5">
                      <span>Chiều Cao:</span>
                      <span id="heightDisplay" class="text-sm font-extrabold text-brand-green">172 cm</span>
                    </div>
                    <input type="range" min="150" max="195" value="172" class="slider-luxury" id="heightRange" oninput="HDC.Views.HomeView.updateSizeAdvisor()">
                    <div class="flex justify-between text-[10px] text-gray-400 mt-1">
                      <span>150 cm</span>
                      <span>175 cm</span>
                      <span>195 cm</span>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between items-center text-xs font-bold text-gray-700 mb-1.5">
                      <span>Cân Nặng:</span>
                      <span id="weightDisplay" class="text-sm font-extrabold text-brand-green">68 kg</span>
                    </div>
                    <input type="range" min="45" max="110" value="68" class="slider-luxury" id="weightRange" oninput="HDC.Views.HomeView.updateSizeAdvisor()">
                    <div class="flex justify-between text-[10px] text-gray-400 mt-1">
                      <span>45 kg</span>
                      <span>75 kg</span>
                      <span>110 kg</span>
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Gu Mặc Ưa Thích:</label>
                    <div class="grid grid-cols-3 gap-2">
                      <button onclick="HDC.Views.HomeView.setSizeFit('slim')" id="fitSlim" class="py-2 rounded-xl text-xs font-bold border transition bg-white text-gray-700 border-gray-200 hover:bg-gray-50">
                        Slim Fit (Ôm)
                      </button>
                      <button onclick="HDC.Views.HomeView.setSizeFit('regular')" id="fitRegular" class="py-2 rounded-xl text-xs font-bold border transition bg-brand-green text-white border-brand-green shadow-sm">
                        Regular (Vừa Vặn)
                      </button>
                      <button onclick="HDC.Views.HomeView.setSizeFit('loose')" id="fitLoose" class="py-2 rounded-xl text-xs font-bold border transition bg-white text-gray-700 border-gray-200 hover:bg-gray-50">
                        Thoải Mái
                      </button>
                    </div>
                  </div>

                </div>

                <!-- Result Gauge Column -->
                <div class="md:col-span-5 bg-gradient-to-b from-brand-greenDark to-brand-green rounded-2xl p-6 text-white text-center shadow-xl space-y-4">
                  <div class="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-amber-300">
                    <i class="fa-solid fa-sparkles"></i> Khuyến Nghị Chuẩn Xác
                  </div>
                  
                  <div>
                    <div class="text-xs text-emerald-200 uppercase font-semibold">Size Áo Phù Hợp Nhất:</div>
                    <div id="recommendedSizeBox" class="text-5xl font-black font-heading text-white tracking-wider my-1">
                      40 (L)
                    </div>
                    <div class="text-xs text-amber-300 font-bold">Độ chuẩn xác: 98% Form Chuẩn Việt</div>
                  </div>

                  <div class="grid grid-cols-3 gap-2 pt-3 border-t border-white/20 text-center">
                    <div class="bg-white/10 p-2 rounded-xl">
                      <div class="text-[10px] text-gray-300">Rộng Vai</div>
                      <div id="sizeShoulder" class="text-xs font-bold">45 cm</div>
                    </div>
                    <div class="bg-white/10 p-2 rounded-xl">
                      <div class="text-[10px] text-gray-300">Vòng Ngực</div>
                      <div id="sizeChest" class="text-xs font-bold">100 cm</div>
                    </div>
                    <div class="bg-white/10 p-2 rounded-xl">
                      <div class="text-[10px] text-gray-300">Dài Áo</div>
                      <div id="sizeLength" class="text-xs font-bold">73 cm</div>
                    </div>
                  </div>

                  <button onclick="HDC.Router.navigate('shop')" class="w-full btn-shimmer bg-brand-gold hover:bg-yellow-600 text-gray-950 font-extrabold text-xs py-3 rounded-xl transition shadow flex items-center justify-center gap-2">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <span>Xem Sản Phẩm Size Này</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>


        <!-- ========================================================
             7. INTERACTIVE B2B CORPORATE UNIFORM CALCULATOR
             ======================================================== -->
        <section class="py-16 bg-brand-cream/40 border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span class="text-[11px] font-bold text-brand-gold uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                ✦ Giải Pháp Doanh Nghiệp Toàn Diện (B2B)
              </span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-greenDark font-serif">
                Dự Toán Chi Phí Đồng Phục Tức Thì
              </h2>
              <p class="text-xs sm:text-sm text-gray-500">
                Đối tác chiến lược Hội Doanh Nhân Trẻ (DNT) Việt Nam & Vinschool. Nhận ngay báo giá ưu đãi và bộ mẫu vải tận văn phòng.
              </p>
            </div>

            <!-- B2B Calculator Component Box -->
            <div class="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xl max-w-5xl mx-auto">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <!-- Inputs & Sliders -->
                <div class="lg:col-span-7 space-y-6">
                  
                  <div>
                    <div class="flex justify-between items-center text-xs font-bold text-gray-700 mb-1.5">
                      <span>Quy Mô Số Lượng Đồng Phục:</span>
                      <span id="b2bQtyDisplay" class="text-base font-extrabold text-brand-green">150 Áo</span>
                    </div>
                    <input type="range" min="30" max="1000" step="10" value="150" class="slider-luxury" id="b2bQtyRange" oninput="HDC.Views.HomeView.updateB2BEstimator()">
                    <div class="flex justify-between text-[10px] text-gray-400 mt-1">
                      <span>30 Áo (Tối thiểu)</span>
                      <span>300 Áo</span>
                      <span>1.000+ Áo</span>
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Chọn Chất Liệu Cao Cấp:</label>
                    <div class="grid grid-cols-3 gap-2">
                      <button onclick="HDC.Views.HomeView.setB2BFabric('sen')" id="b2bFabricSen" class="p-3 rounded-xl text-left border transition bg-brand-green text-white border-brand-green shadow-sm">
                        <div class="text-xs font-bold">Sợi Sen Cao Cấp</div>
                        <div class="text-[10px] opacity-80">Kháng khuẩn, tự phẳng</div>
                      </button>
                      <button onclick="HDC.Views.HomeView.setB2BFabric('chuoi')" id="b2bFabricChuoi" class="p-3 rounded-xl text-left border transition bg-white text-gray-700 hover:bg-gray-50 border-gray-200">
                        <div class="text-xs font-bold">Tơ Chuối Bến Tre</div>
                        <div class="text-[10px] text-gray-400">Siêu nhẹ, bền bỉ</div>
                      </button>
                      <button onclick="HDC.Views.HomeView.setB2BFabric('bamboo')" id="b2bFabricBamboo" class="p-3 rounded-xl text-left border transition bg-white text-gray-700 hover:bg-gray-50 border-gray-200">
                        <div class="text-xs font-bold">Polo Tre Bamboo</div>
                        <div class="text-[10px] text-gray-400">Anti-UV, mát lạnh</div>
                      </button>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 gap-2 text-xs text-gray-600 pt-2 border-t border-gray-100">
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-circle-check text-emerald-600"></i>
                      <span>Miễn phí may mẫu & thử tận nơi</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-circle-check text-emerald-600"></i>
                      <span>Miễn phí in/thêu logo công nghệ Nhật</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-circle-check text-emerald-600"></i>
                      <span>Hóa đơn VAT điện tử nhanh chóng</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-circle-check text-emerald-600"></i>
                      <span>Bảo hành form dáng 12 tháng</span>
                    </div>
                  </div>

                </div>

                <!-- Live Quote Box -->
                <div class="lg:col-span-5 bg-gradient-to-br from-emerald-50 via-white to-amber-50/40 p-6 rounded-2xl border-2 border-brand-green shadow-lg space-y-4">
                  <div class="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span class="text-xs font-bold uppercase text-brand-green">Dự Toán Ngân Sách B2B</span>
                    <span id="b2bDiscountBadge" class="bg-brand-red text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      Chiết khấu 25%
                    </span>
                  </div>

                  <div class="space-y-1">
                    <div class="text-xs text-gray-500">Đơn giá ước tính / áo:</div>
                    <div id="b2bUnitPriceDisplay" class="text-3xl font-extrabold text-brand-greenDark font-heading">
                      486.000₫
                    </div>
                    <div class="text-[11px] text-gray-400 line-through">Giá lẻ niêm yết: 649.000₫</div>
                  </div>

                  <div class="pt-2 border-t border-gray-200 flex justify-between items-center text-xs">
                    <span class="font-semibold text-gray-600">Tổng ngân sách dự kiến:</span>
                    <span id="b2bTotalBudgetDisplay" class="font-extrabold text-brand-red text-base">72.900.000₫</span>
                  </div>

                  <div class="flex flex-col gap-2 pt-2">
                    <button onclick="HDC.Components.B2BModal.open()" class="btn-shimmer bg-brand-green hover:bg-brand-greenDark text-white font-bold text-xs py-3 rounded-xl transition shadow flex items-center justify-center gap-2">
                      <i class="fa-solid fa-box-open"></i>
                      <span>Đăng Ký Nhận Hộp Vải Mẫu Miễn Phí</span>
                    </button>
                    <a href="./catalogue-dong-phuc-hdc.pdf" download="Catalogue-Dong-Phuc-HDC-2026.pdf" class="bg-white hover:bg-gray-50 text-gray-700 font-bold text-xs py-2.5 rounded-xl border border-gray-300 transition shadow-sm flex items-center justify-center gap-2">
                      <i class="fa-solid fa-file-pdf text-brand-red"></i>
                      <span>Tải Catalogue Đồng Phục 2026 (PDF)</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>


        <!-- ========================================================
             8. SIGNATURE BEST SELLERS & INSTANT SIZE CARD
             ======================================================== -->
        <section class="py-16 bg-white border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span class="text-[11px] font-bold text-brand-gold uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                  ✦ Bán Chạy Nhất Tháng 9
                </span>
                <h2 class="text-3xl font-extrabold text-brand-greenDark font-serif mt-1">
                  Tuyệt Phẩm Thời Trang Sinh Học
                </h2>
                <p class="text-xs sm:text-sm text-gray-500 mt-1">
                  Được đặt may nhiều nhất bởi các lãnh đạo, doanh nhân và đối tác trường học
                </p>
              </div>

              <!-- Category Filter Tabs -->
              <div class="flex flex-wrap gap-2" id="homeFilterTabs">
                <button onclick="HDC.Views.HomeView.filterProducts('all')" class="home-tab px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-green text-white shadow-sm">
                  Tất Cả
                </button>
                <button onclick="HDC.Views.HomeView.filterProducts('sen')" class="home-tab px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Sơ Mi Sợi Sen
                </button>
                <button onclick="HDC.Views.HomeView.filterProducts('seamless')" class="home-tab px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Âu Phục Seamless
                </button>
                <button onclick="HDC.Views.HomeView.filterProducts('polo')" class="home-tab px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Polo Golf Anti-UV
                </button>
              </div>
            </div>

            <!-- Products Grid with Instant Size Picking on Card -->
            <div id="homeProductGrid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              ${this.renderProductCards(products.slice(0, 8))}
            </div>

            <!-- View All CTA -->
            <div class="text-center mt-10">
              <button onclick="HDC.Router.navigate('shop')" class="btn-shimmer bg-brand-green hover:bg-brand-greenDark text-white font-bold text-xs uppercase px-8 py-3.5 rounded-2xl transition shadow-lg inline-flex items-center gap-2">
                <span>Xem Toàn Bộ 12+ Sản Phẩm Cửa Hàng</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>

          </div>
        </section>


        <!-- ========================================================
             9. LUXURY TICKET VOUCHER VAULT
             ======================================================== -->
        <section class="py-12 bg-brand-cream/60 border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-5xl mx-auto px-4 sm:px-6">
            
            <div class="text-center mb-8 space-y-1">
              <span class="text-[10px] font-bold text-brand-gold uppercase tracking-widest bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200">
                Special Privilege
              </span>
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 font-serif">Mã Ưu Đãi Độc Quyền</h2>
              <p class="text-xs text-gray-500">Chạm sao chép và tự động áp dụng khi thanh toán</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <!-- Ticket 50K -->
              <div class="voucher-card p-5 rounded-2xl shadow-md flex items-center justify-between gap-4">
                <div class="flex items-center gap-3.5">
                  <div class="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center text-xl shrink-0">
                    <i class="fa-solid fa-gift"></i>
                  </div>
                  <div>
                    <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-red text-white">Giảm 50.000₫</span>
                    <h3 class="font-extrabold text-sm text-gray-900 mt-1 font-heading">VOUCHER: HDC50K</h3>
                    <p class="text-[11px] text-gray-500">Cho đơn hàng thời trang từ 500.000₫</p>
                  </div>
                </div>
                <button onclick="HDC.Utils.copyToClipboard('HDC50K')" class="btn-shimmer bg-brand-green hover:bg-brand-greenDark text-white text-xs font-bold px-4 py-2.5 rounded-xl uppercase transition shrink-0">
                  Sao chép
                </button>
              </div>

              <!-- Ticket 100K -->
              <div class="voucher-card p-5 rounded-2xl shadow-md flex items-center justify-between gap-4">
                <div class="flex items-center gap-3.5">
                  <div class="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center text-xl shrink-0">
                    <i class="fa-solid fa-crown"></i>
                  </div>
                  <div>
                    <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-gold text-white">Giảm 100.000₫</span>
                    <h3 class="font-extrabold text-sm text-gray-900 mt-1 font-heading">VOUCHER: HDC100K</h3>
                    <p class="text-[11px] text-gray-500">Cho đơn hàng thời trang từ 1.000.000₫</p>
                  </div>
                </div>
                <button onclick="HDC.Utils.copyToClipboard('HDC100K')" class="btn-shimmer bg-brand-gold hover:bg-yellow-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl uppercase transition shrink-0">
                  Sao chép
                </button>
              </div>

            </div>

          </div>
        </section>


        <!-- ========================================================
             10. SOCIAL PROOF & REAL VERIFIED TESTIMONIALS
             ======================================================== -->
        <section class="py-16 bg-white border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-b border-gray-100 pb-12 mb-12">
              <div class="space-y-1">
                <div class="text-3xl sm:text-4xl font-extrabold text-brand-green font-heading" data-counter="30">30+</div>
                <div class="text-xs text-gray-500 font-medium">Năm Di Sản May Đo</div>
              </div>
              <div class="space-y-1">
                <div class="text-3xl sm:text-4xl font-extrabold text-brand-gold font-heading" data-counter="500">500+</div>
                <div class="text-xs text-gray-500 font-medium">Doanh Nghiệp & Đối Tác</div>
              </div>
              <div class="space-y-1">
                <div class="text-3xl sm:text-4xl font-extrabold text-brand-green font-heading" data-counter="500000">500K+</div>
                <div class="text-xs text-gray-500 font-medium">Sản Phẩm Đã Đồng Hành</div>
              </div>
              <div class="space-y-1">
                <div class="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-heading">99.8%</div>
                <div class="text-xs text-gray-500 font-medium">Khách Hàng Hài Lòng</div>
              </div>
            </div>

            <!-- Partner Logos -->
            <div class="text-center mb-10">
              <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Được Tin Tưởng Bởi Các Thương Hiệu Đầu Ngành</span>
              <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-4 opacity-75 grayscale hover:grayscale-0 transition-all">
                <span class="font-extrabold text-sm sm:text-base text-gray-800 tracking-wider">HỘI DOANH NHÂN TRẺ VN</span>
                <span class="font-extrabold text-sm sm:text-base text-gray-800 tracking-wider">VINSCHOOL</span>
                <span class="font-extrabold text-sm sm:text-base text-gray-800 tracking-wider">FPT GROUP</span>
                <span class="font-extrabold text-sm sm:text-base text-gray-800 tracking-wider">SACOMBANK</span>
                <span class="font-extrabold text-sm sm:text-base text-gray-800 tracking-wider">VIETTEL</span>
              </div>
            </div>

            <!-- Real Testimonial Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div class="bg-brand-grayBg p-6 rounded-2xl border border-gray-100 space-y-4">
                <div class="flex items-center gap-1 text-amber-400 text-xs">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed italic">
                  "Tôi thường xuyên phải bay vào TP.HCM và họp liên tục từ sáng đến tối. Chiếc áo sơ mi Sợi Sen của HDC thực sự giải phóng tôi khỏi chiếc bàn là — ngồi máy bay 2 tiếng bước xuống áo vẫn phẳng phiu đĩnh đạc."
                </p>
                <div class="flex items-center gap-3 pt-2 border-t border-gray-200">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="CEO" class="w-9 h-9 rounded-full object-cover">
                  <div>
                    <div class="text-xs font-bold text-gray-900">Anh Nguyễn Hải Nam</div>
                    <div class="text-[10px] text-gray-500">CEO — Tập đoàn BĐS Hải Phát</div>
                  </div>
                </div>
              </div>

              <div class="bg-brand-grayBg p-6 rounded-2xl border border-gray-100 space-y-4">
                <div class="flex items-center gap-1 text-amber-400 text-xs">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed italic">
                  "Dòng Polo Golf Bamboo co giãn 4 chiều cực kỳ đã, đánh swing không hề bị giật vai áo. Đặc biệt khả năng chống nắng UPF 50+ đã được kiểm chứng dưới nắng hè 38 độ ở sân Đồng Mô."
                </p>
                <div class="flex items-center gap-3 pt-2 border-t border-gray-200">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Golfer" class="w-9 h-9 rounded-full object-cover">
                  <div>
                    <div class="text-xs font-bold text-gray-900">Anh Trần Quốc Huy</div>
                    <div class="text-[10px] text-gray-500">CLB Golf Doanh Nhân Hà Nội</div>
                  </div>
                </div>
              </div>

              <div class="bg-brand-grayBg p-6 rounded-2xl border border-gray-100 space-y-4">
                <div class="flex items-center gap-1 text-amber-400 text-xs">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed italic">
                  "Bé nhà mình da nhạy cảm rất hay ngứa khi mặc áo pha sợi tổng hợp. Chuyển sang đồng phục IHDC Kids chuẩn Vinschool chất sợi tự nhiên mát mịn, bé chạy nhảy cả ngày ở trường về vẫn thơm tho."
                </p>
                <div class="flex items-center gap-3 pt-2 border-t border-gray-200">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" alt="Phụ huynh" class="w-9 h-9 rounded-full object-cover">
                  <div>
                    <div class="text-xs font-bold text-gray-900">Chị Lê Phương Thảo</div>
                    <div class="text-[10px] text-gray-500">Phụ huynh học sinh Vinschool</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        <!-- ========================================================
             11. BOTTOM FLOATING LUXURY ACTION DOCK
             ======================================================== -->
        <div class="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-gray-950/90 backdrop-blur-md text-white px-4 py-2.5 rounded-full luxury-floating-dock flex items-center gap-3 sm:gap-5 border border-amber-300/30">
          <button onclick="HDC.Router.navigate('shop')" class="text-xs font-bold hover:text-amber-300 flex items-center gap-1.5 transition">
            <i class="fa-solid fa-store text-amber-300"></i>
            <span class="hidden sm:inline">Cửa Hàng</span>
          </button>
          
          <span class="w-px h-4 bg-gray-700"></span>

          <button onclick="HDC.Views.HomeView.scrollToSection('smart-size-advisor')" class="text-xs font-bold hover:text-amber-300 flex items-center gap-1.5 transition">
            <i class="fa-solid fa-ruler-combined text-emerald-400"></i>
            <span>Đo Size AI</span>
          </button>

          <span class="w-px h-4 bg-gray-700"></span>

          <button onclick="HDC.Components.CartDrawer.open()" class="text-xs font-bold hover:text-amber-300 flex items-center gap-1.5 transition relative">
            <i class="fa-solid fa-bag-shopping text-amber-300"></i>
            <span class="hidden sm:inline">Giỏ Hàng</span>
          </button>

          <span class="w-px h-4 bg-gray-700"></span>

          <button onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" class="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs text-gray-300 hover:text-white transition" title="Lên đầu trang">
            <i class="fa-solid fa-arrow-up"></i>
          </button>
        </div>

      </div>
    `;
  },

  /**
   * Render Luxury Product Cards with on-card size selection
   */
  renderProductCards(items) {
    const fallbackImg = "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80";

    return items.map(product => {
      const isWish = HDC.Store.isWishlisted(product.id);
      const wishIconClass = isWish ? 'fa-solid fa-heart text-brand-red' : 'fa-regular fa-heart';
      const discountPercent = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : null;

      return `
        <div class="product-item group card-lift p-3 rounded-2xl bg-white border border-gray-100 hover:border-brand-green/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between" onclick="HDC.Components.QuickViewModal.open(${product.id})">
          
          <div>
            <!-- Image & Micro Badges Container -->
            <div class="relative bg-gray-100 rounded-xl overflow-hidden aspect-[3/4] mb-3 shadow-inner">
              <span class="absolute top-2.5 left-2.5 z-10 bg-brand-green text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                ${product.badge || 'Mới'}
              </span>

              ${discountPercent ? `
                <span class="absolute top-2.5 right-11 z-10 bg-brand-red text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow">
                  -${discountPercent}%
                </span>
              ` : ''}

              <button onclick="event.stopPropagation(); HDC.Store.toggleWishlist(${product.id}); HDC.Utils.triggerWishlistPop(this)" class="absolute top-2.5 right-2.5 z-10 w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-brand-red transition shadow-sm hover:scale-110 active:scale-95" title="Yêu thích">
                <i class="${wishIconClass} text-xs transition-colors"></i>
              </button>

              <img src="${product.img}" alt="${product.title}" onerror="this.onerror=null; this.src='${fallbackImg}';" class="w-full h-full object-cover product-img-hover" loading="lazy">

              <!-- Quick View Floating Button on Hover -->
              <div class="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/75 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
                <span class="text-xs text-white font-semibold bg-brand-green/90 backdrop-blur-sm px-3.5 py-1.5 rounded-xl shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5 btn-shimmer">
                  <i class="fa-regular fa-eye text-[11px]"></i> Xem Chi Tiết
                </span>
              </div>
            </div>

            <!-- Product Title & Origin Tag -->
            <div class="space-y-1">
              <div class="text-[10px] text-brand-gold uppercase font-bold tracking-wider">
                ${product.material === 'sen' ? '🌾 Sợi Sen Đồng Tháp' : product.material === 'chuoi' ? '🍃 Tơ Chuối Bến Tre' : product.material === 'bamboo' ? '🎋 Tre Bamboo Tự Nhiên' : '🌱 Modal Gỗ Sồi Seamless'}
              </div>
              <h3 class="text-xs sm:text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-brand-green transition-colors">
                ${product.title}
              </h3>
              
              <!-- Pricing -->
              <div class="flex items-center gap-2 pt-0.5">
                <span class="text-sm font-extrabold text-brand-red">${product.price.toLocaleString('vi-VN')}₫</span>
                ${product.oldPrice ? `<span class="text-[11px] text-gray-400 line-through">${product.oldPrice.toLocaleString('vi-VN')}₫</span>` : ''}
              </div>
            </div>
          </div>

          <!-- Bottom Micro-Interaction: Direct On-Card Size Selector -->
          <div class="pt-3 mt-2 border-t border-gray-100" onclick="event.stopPropagation()">
            <div class="text-[10px] text-gray-400 font-semibold mb-1">Chọn size thêm nhanh vào giỏ:</div>
            <div class="flex items-center gap-1.5">
              ${(product.sizes || ['S', 'M', 'L', 'XL']).map(sz => `
                <button onclick="HDC.Views.HomeView.quickAddToCart(${product.id}, '${sz}')" class="size-pill text-[11px] font-bold px-2 py-0.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 hover:bg-brand-green hover:text-white transition">
                  ${sz}
                </button>
              `).join('')}
            </div>
          </div>

        </div>
      `;
    }).join('');
  },


  /**
   * 1-Click Direct Add to Cart with Selected Size
   */
  quickAddToCart(productId, size) {
    HDC.Store.addToCart(productId, size, 1);
    HDC.Utils.showToast(`Đã thêm vào giỏ hàng: Size ${size}!`);
    HDC.Utils.triggerCartBounce();
  },

  /**
   * Add Whole Curated Combo to Cart
   */
  addComboToCart(lookbookKey) {
    const lb = this.lookbookData[lookbookKey];
    if (!lb || !lb.items) return;

    lb.items.forEach(item => {
      HDC.Store.addToCart(item.id, 'L', 1);
    });

    HDC.Utils.showToast(`Đã thêm trọn bộ ${lb.title} vào giỏ hàng (Tiết kiệm 15%)!`);
    HDC.Utils.triggerCartBounce();
    HDC.Components.CartDrawer.open();
  },

  /**
   * Switch Active Fiber in Sensory Lab
   */
  selectFiber(fiberKey) {
    this.activeFiber = fiberKey;
    const fiber = this.fiberData[fiberKey];
    const panel = document.getElementById('microscopeDisplayPanel');
    if (!panel || !fiber) return;

    panel.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
        <div class="lg:col-span-7 space-y-5">
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-mono bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/40">
              ZOOM 100X • OPTICAL SCAN
            </span>
            <span class="text-xs text-gray-400 font-mono">STATUS: VERIFIED</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-white font-serif">
            ${fiber.name}
          </h3>

          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
            ${fiber.description}
          </p>

          <div class="p-3 bg-black/60 rounded-xl border border-gray-800 font-mono text-[11px] text-emerald-400 space-y-1">
            <div>> TELEMETRY: ${fiber.hudCode}</div>
            <div>> VÙNG NGUYÊN LIỆU: ${fiber.region}</div>
            <div>> KIỂM ĐỊNH AATCC 100: ĐẠT TIÊU CHUẨN QUỐC TẾ</div>
          </div>

          <div class="grid grid-cols-3 gap-3 pt-1">
            ${fiber.stats.map(s => `
              <div class="bg-gray-900 p-3.5 rounded-2xl border border-gray-800 text-center">
                <div class="text-xl sm:text-2xl font-black text-amber-300 font-heading">${s.value}</div>
                <div class="text-xs font-bold text-gray-200 mt-0.5">${s.label}</div>
                <div class="text-[10px] text-gray-500">${s.sub}</div>
              </div>
            `).join('')}
          </div>

          <div class="pt-2 flex items-center justify-between border-t border-gray-800">
            <span class="text-xs text-gray-400">Ứng dụng trên: <strong>${fiber.productSample}</strong></span>
            <button onclick="HDC.Components.QuickViewModal.open(${fiber.productId})" class="btn-shimmer bg-brand-gold text-gray-950 font-bold text-xs px-5 py-2.5 rounded-xl uppercase transition shadow">
              Xem Chi Tiết Áo &rarr;
            </button>
          </div>
        </div>

        <div class="lg:col-span-5 relative flex items-center justify-center">
          <div class="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-amber-300/60 shadow-2xl microscope-reticle group">
            <img id="macroFiberImg" src="${fiber.macroImg}" alt="${fiber.name}" class="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700">
            <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div class="w-full h-px bg-amber-300/30"></div>
              <div class="h-full w-px bg-amber-300/30 absolute"></div>
              <div class="w-20 h-20 border border-amber-300/50 rounded-full absolute"></div>
            </div>
            <div class="absolute bottom-3 inset-x-0 text-center pointer-events-none">
              <span class="bg-black/80 text-amber-300 font-mono text-[10px] px-2.5 py-0.5 rounded-full border border-amber-300/30">
                CẤU TRÚC VI MÔ 100X
              </span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Update active tab buttons
    const tabs = document.querySelectorAll('#fiberMicroTabs button');
    tabs.forEach(btn => {
      if (btn.innerText.includes(fiber.name)) {
        btn.className = 'px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 bg-brand-green text-white shadow-md scale-105';
      } else {
        btn.className = 'px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 bg-brand-grayBg text-gray-700 hover:bg-gray-200 border border-gray-200';
      }
    });
  },

  /**
   * Switch Active Lookbook Capsule
   */
  setLookbook(lookbookKey) {
    this.activeLookbook = lookbookKey;
    const lb = this.lookbookData[lookbookKey];
    const panel = document.getElementById('lookbookDisplayPanel');
    if (!panel || !lb) return;

    panel.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
        <div class="lg:col-span-5 relative">
          <div class="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] relative group">
            <img src="${lb.img}" alt="${lb.title}" class="w-full h-full object-cover product-img-hover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
            <div class="absolute top-4 left-4">
              <span class="bg-brand-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                ${lb.badge}
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <h4 class="text-xl font-bold font-serif">${lb.title}</h4>
              <p class="text-xs text-amber-200 mt-0.5">${lb.subtitle}</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-6">
          <div>
            <h3 class="text-2xl font-extrabold text-brand-greenDark font-serif">
              Trọn Bộ: ${lb.title}
            </h3>
            <p class="text-xs text-gray-500 mt-1">${lb.subtitle}</p>
          </div>

          <div class="space-y-3">
            ${lb.items.map(item => `
              <div class="flex items-center justify-between p-3.5 rounded-xl bg-white border border-gray-200 hover:border-brand-green/40 transition shadow-sm">
                <div class="flex items-center gap-3">
                  <i class="fa-solid fa-shirt text-brand-green text-sm"></i>
                  <span class="text-xs font-bold text-gray-800">${item.name}</span>
                </div>
                <span class="text-xs font-bold text-brand-green">${item.price.toLocaleString('vi-VN')}₫</span>
              </div>
            `).join('')}
          </div>

          <div class="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div class="text-[11px] text-gray-500">Tổng giá bán lẻ: <span class="line-through">${lb.originalPrice.toLocaleString('vi-VN')}₫</span></div>
              <div class="text-xl font-extrabold text-brand-red font-heading">${lb.comboPrice.toLocaleString('vi-VN')}₫</div>
              <div class="text-[11px] text-emerald-700 font-bold mt-0.5">✦ ${lb.saving}</div>
            </div>
            <button onclick="HDC.Views.HomeView.addComboToCart('${lookbookKey}')" class="btn-shimmer bg-brand-green hover:bg-brand-greenDark text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow flex items-center justify-center gap-2">
              <i class="fa-solid fa-cart-plus"></i>
              <span>Thêm Cả Bộ Vào Giỏ Hàng</span>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Filter Products on Homepage
   */
  filterProducts(category) {
    this.activeCategory = category;
    const grid = document.getElementById('homeProductGrid');
    const tabs = document.querySelectorAll('#homeFilterTabs button');
    if (!grid) return;

    tabs.forEach(tab => {
      tab.className = 'home-tab px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gray-100 text-gray-700 hover:bg-gray-200';
    });
    event?.currentTarget && (event.currentTarget.className = 'home-tab px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-green text-white shadow-sm');

    const products = HDC.Data.products || [];
    let filtered = products;
    if (category === 'sen') filtered = products.filter(p => p.material === 'sen');
    else if (category === 'seamless') filtered = products.filter(p => p.category === 'seamless');
    else if (category === 'polo') filtered = products.filter(p => p.category === 'polo');

    grid.innerHTML = this.renderProductCards(filtered.slice(0, 8));
  },

  /**
   * Update Smart AI Size Advisor
   */
  updateSizeAdvisor() {
    const h = parseInt(document.getElementById('heightRange')?.value || 172);
    const w = parseInt(document.getElementById('weightRange')?.value || 68);
    this.sizeAdvisor.height = h;
    this.sizeAdvisor.weight = w;

    document.getElementById('heightDisplay').innerText = h + ' cm';
    document.getElementById('weightDisplay').innerText = w + ' kg';

    let size = '39 (M)';
    let shoulder = 44;
    let chest = 96;
    let len = 71;

    if (h < 165 || w < 58) {
      size = '38 (S)';
      shoulder = 42; chest = 92; len = 69;
    } else if (h <= 172 && w <= 66) {
      size = '39 (M)';
      shoulder = 43.5; chest = 96; len = 71;
    } else if (h <= 178 && w <= 76) {
      size = '40 (L)';
      shoulder = 45; chest = 100; len = 73;
    } else if (h <= 184 && w <= 86) {
      size = '41 (XL)';
      shoulder = 46.5; chest = 105; len = 75;
    } else {
      size = '42 (XXL)';
      shoulder = 48; chest = 110; len = 77;
    }

    if (this.sizeAdvisor.fit === 'slim') {
      chest -= 2;
    } else if (this.sizeAdvisor.fit === 'loose') {
      chest += 4;
    }

    const box = document.getElementById('recommendedSizeBox');
    if (box) box.innerText = size;
    document.getElementById('sizeShoulder').innerText = shoulder + ' cm';
    document.getElementById('sizeChest').innerText = chest + ' cm';
    document.getElementById('sizeLength').innerText = len + ' cm';
  },

  setSizeGender(gender) {
    this.sizeAdvisor.gender = gender;
    const btnM = document.getElementById('sizeGenderMale');
    const btnF = document.getElementById('sizeGenderFemale');
    if (gender === 'nam') {
      btnM.className = 'py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 bg-brand-green text-white border-brand-green shadow-sm';
      btnF.className = 'py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 bg-white text-gray-700 hover:bg-gray-100 border-gray-200';
    } else {
      btnF.className = 'py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 bg-brand-green text-white border-brand-green shadow-sm';
      btnM.className = 'py-2.5 rounded-xl font-bold text-xs border transition flex items-center justify-center gap-2 bg-white text-gray-700 hover:bg-gray-100 border-gray-200';
    }
    this.updateSizeAdvisor();
  },

  setSizeFit(fit) {
    this.sizeAdvisor.fit = fit;
    ['fitSlim', 'fitRegular', 'fitLoose'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.className = 'py-2 rounded-xl text-xs font-bold border transition bg-white text-gray-700 border-gray-200 hover:bg-gray-50';
    });
    const target = fit === 'slim' ? 'fitSlim' : fit === 'loose' ? 'fitLoose' : 'fitRegular';
    const el = document.getElementById(target);
    if (el) el.className = 'py-2 rounded-xl text-xs font-bold border transition bg-brand-green text-white border-brand-green shadow-sm';
    this.updateSizeAdvisor();
  },

  /**
   * Update B2B Corporate Uniform Estimator
   */
  updateB2BEstimator() {
    const qty = parseInt(document.getElementById('b2bQtyRange')?.value || 150);
    this.b2bEstimator.quantity = qty;
    document.getElementById('b2bQtyDisplay').innerText = qty + ' Áo';

    let basePrice = 649000;
    if (this.b2bEstimator.fabric === 'chuoi') basePrice = 599000;
    if (this.b2bEstimator.fabric === 'bamboo') basePrice = 489000;

    let discountPercent = 15;
    if (qty >= 100 && qty < 300) discountPercent = 25;
    else if (qty >= 300 && qty < 500) discountPercent = 30;
    else if (qty >= 500) discountPercent = 35;

    const unitPrice = Math.round(basePrice * (1 - discountPercent / 100));
    const totalBudget = unitPrice * qty;

    document.getElementById('b2bDiscountBadge').innerText = `Chiết khấu ${discountPercent}%`;
    document.getElementById('b2bUnitPriceDisplay').innerText = unitPrice.toLocaleString('vi-VN') + '₫';
    document.getElementById('b2bTotalBudgetDisplay').innerText = totalBudget.toLocaleString('vi-VN') + '₫';
  },

  setB2BFabric(fabric) {
    this.b2bEstimator.fabric = fabric;
    ['b2bFabricSen', 'b2bFabricChuoi', 'b2bFabricBamboo'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.className = 'p-3 rounded-xl text-left border transition bg-white text-gray-700 hover:bg-gray-50 border-gray-200';
    });
    const target = fabric === 'sen' ? 'b2bFabricSen' : fabric === 'chuoi' ? 'b2bFabricChuoi' : 'b2bFabricBamboo';
    const el = document.getElementById(target);
    if (el) el.className = 'p-3 rounded-xl text-left border transition bg-brand-green text-white border-brand-green shadow-sm';
    this.updateB2BEstimator();
  },

  /**
   * Smooth scroll helper
   */
  scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};
