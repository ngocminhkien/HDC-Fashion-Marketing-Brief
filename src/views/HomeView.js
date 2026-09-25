/**
 * HDC Fashion — Complete Redesigned Home View (UI/UX Version 2.0)
 * Ground-up Luxury Sustainable Fashion Architecture:
 * - Editorial Luxury Hero Cover with Curated Lookbook Montage
 * - Sensory Fabric Laboratory (Before/After Pain-Point Slider & 6 Indigenous Fibers)
 * - Interactive Capsule Outfits & Lookbook Builder with 1-Click Combo Add
 * - Smart AI Size & Fit Advisor (Real-time Height/Weight/Fit Calculator)
 * - Interactive B2B Corporate Uniform Cost & Solution Estimator
 * - Signature Best Sellers with Direct On-Card Size Selection
 * - Luxury Ticket Voucher Vault & HDC Privé VIP Privilege Club
 * - Social Proof, Partner Trust Wall (Vinschool, DNT 30 Năm) & Verified Client Reviews
 * - Farm-to-Boardroom Heritage Traceability Journey
 * - Bottom Floating Luxury Dock with Quick Action Controls
 */

window.HDC = window.HDC || {};
window.HDC.Views = window.HDC.Views || {};

window.HDC.Views.HomeView = {
  activeFiber: 'sen',
  activeCategory: 'all',
  activeLookbook: 'executive',
  comparisonMode: 'hdc', // 'hdc' or 'traditional'
  
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
      region: "Đồng Tháp Mười, Tây Nam Bộ",
      badge: "Kháng Khuẩn 99.8% • Tự Phục Hồi Phẳng",
      icon: "fa-solid fa-spa",
      colorTag: "emerald",
      color: "text-emerald-800 bg-emerald-50 border-emerald-300",
      description: "Chiết xuất tinh túy từ cuống hoa sen Đồng Tháp, cấu trúc vi xốp rỗng tự nhiên giúp điều hòa thân nhiệt, tự phẳng nếp gấp sau 15 phút mặc và loại bỏ 99.8% vi khuẩn gây mùi.",
      stats: [
        { label: "Kháng khuẩn sinh học", value: "99.8%", sub: "Chứng nhận AATCC 100" },
        { label: "Tự phục hồi phẳng", value: "98%", sub: "Không cần là ủi" },
        { label: "Thấm hút mồ hôi", value: "x2.5", sub: "Gấp 2.5 lần Cotton" }
      ],
      img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
      productSample: "Sơ mi Trắng Sợi Sen Cao Cấp 1001",
      productPrice: "649.000₫",
      productId: 1
    },
    chuoi: {
      name: "Tơ Chuối Bến Tre",
      region: "Xứ Dừa & Vườn Chuối Bến Tre",
      badge: "Siêu Nhẹ • Kiểm Soát Ẩm Tối Đa",
      icon: "fa-solid fa-leaf",
      colorTag: "amber",
      color: "text-amber-800 bg-amber-50 border-amber-300",
      description: "Tận dụng thân chuối sau thu hoạch qua công nghệ phân tách sinh học, tạo sợi vải bền bỉ siêu nhẹ, giảm 30% trọng lượng so với âu phục thông thường và giữ form đứng dáng hoàn hảo.",
      stats: [
        { label: "Trọng lượng âu phục", value: "-30%", sub: "Nhẹ lướt trên da" },
        { label: "Độ bền kéo chịu lực", value: "Cực Cao", sub: "Bền màu 100+ lần giặt" },
        { label: "Kiểm soát độ ẩm", value: "24 Giờ", sub: "Khô thoáng suốt ngày dài" }
      ],
      img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80",
      productSample: "Sơ mi Công Sở Tơ Chuối Kháng Khuẩn 4004",
      productPrice: "599.000₫",
      productId: 4
    },
    xodua: {
      name: "Xơ Dừa Nam Bộ",
      region: "Vùng Nguyên Liệu Dừa Bến Tre",
      badge: "Kinh Tế Tuần Hoàn • Chống Bám Bụi",
      icon: "fa-solid fa-seedling",
      colorTag: "yellow",
      color: "text-yellow-800 bg-yellow-50 border-yellow-300",
      description: "Biến phụ phẩm xơ dừa thành sợi dệt thời trang cao cấp. Khả năng chống tia cực tím tự nhiên, không tích điện và hoàn toàn có thể phân hủy sinh học trong đất mà không gây ô nhiễm.",
      stats: [
        { label: "Thân thiện tự nhiên", value: "100%", sub: "Phân hủy sinh học" },
        { label: "Chống tích điện bụi", value: "Chuẩn A", sub: "Luôn sáng bóng" },
        { label: "Độ bền cọ xát", value: "5/5 Sao", sub: "Không xù lông" }
      ],
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
      productSample: "Sơ Mi Xơ Dừa Eco Classic",
      productPrice: "569.000₫",
      productId: 11
    },
    bamboo: {
      name: "Tre Bamboo Tây Bắc",
      region: "Vùng Rừng Tre Tự Nhiên Tây Bắc",
      badge: "Mềm Mịn Như Lụa • Chống UV UPF 50+",
      icon: "fa-solid fa-tree",
      colorTag: "teal",
      color: "text-teal-800 bg-teal-50 border-teal-300",
      description: "Hợp chất sinh học tự nhiên Bamboo Kun giúp bảo vệ tế bào da tuyệt đối trước ánh nắng nhiệt đới. Thớ vải êm mềm lướt nhẹ, sinh ra dành riêng cho giới doanh nhân chơi golf và hoạt động ngoài trời.",
      stats: [
        { label: "Chỉ số chống nắng", value: "UPF 50+", sub: "Ngăn 98% tia UVA/UVB" },
        { label: "Độ mềm cảm quan", value: "Như Lụa", sub: "Không gây rát da" },
        { label: "Kháng nấm mốc", value: "Tuyệt Đối", sub: "Không mùi ẩm mốc" }
      ],
      img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&auto=format&fit=crop&q=80",
      productSample: "Áo Polo Chống Tia Cực Tím HDC Golf 5005",
      productPrice: "489.000₫",
      productId: 5
    },
    bacha: {
      name: "Sợi Bạc Hà Mát Lạnh",
      region: "Nông Trại Bạc Hà Hữu Cơ",
      badge: "Hạ Nhiệt Da 2-3°C • Sảng Khoái",
      icon: "fa-solid fa-snowflake",
      colorTag: "cyan",
      color: "text-cyan-800 bg-cyan-50 border-cyan-300",
      description: "Tinh chất menthol hữu cơ được vi bọc trong từng tao sợi, giải phóng ion làm mát tự nhiên khi tiếp xúc với nhiệt cơ thể, lập tức xua tan cơn nóng bức ngột ngạt mùa hè.",
      stats: [
        { label: "Hạ nhiệt tiếp xúc", value: "-2.8°C", sub: "Lạnh tức thì khi mặc" },
        { label: "Tốc độ bay hơi ẩm", value: "0.8 Giây", sub: "Không đọng vệt mồ hôi" },
        { label: "Hương thoảng nhẹ", value: "Thư Giãn", sub: "Giảm stress công sở" }
      ],
      img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&auto=format&fit=crop&q=80",
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
      stats: [
        { label: "Co giãn đa chiều", value: "4D Stretch", sub: "Đàn hồi tự nhiên" },
        { label: "Công nghệ dệt", value: "Seamless", sub: "Loại bỏ đường may thô" },
        { label: "Độ bền màu sắc", value: "100+ Lần", sub: "Không phai nhạt" }
      ],
      img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
      productSample: "Sơ mi Seamless Co Giãn 4 Chiều 2002",
      productPrice: "789.000₫",
      productId: 2
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
      <div id="view-home" class="view-panel hidden bg-brand-cream/30 text-gray-800">
        
        <!-- Continuous Brand Values Announcement Ticker -->
        <div class="bg-brand-green text-white/90 py-1.5 overflow-hidden text-[11px] font-semibold tracking-wider uppercase border-b border-emerald-900 select-none">
          <div class="marquee-track flex gap-12 whitespace-nowrap">
            <span>🌿 100% Sợi Sinh Học Tự Nhiên Bản Địa Việt Nam</span>
            <span>⚡ Công Nghệ Tự Phục Hồi 98% Không Cần Là Ủi</span>
            <span>🏆 Nhà Cung Cấp Đồng Phục Đối Tác 30 Năm DNT & Vinschool</span>
            <span>✨ May Đo Seamless 4D Không Đường May Cọ Xát</span>
            <span>🚚 Miễn Phí Vận Chuyển Toàn Quốc & Đổi Trả 30 Ngày</span>
            <span>🌿 100% Sợi Sinh Học Tự Nhiên Bản Địa Việt Nam</span>
            <span>⚡ Công Nghệ Tự Phục Hồi 98% Không Cần Là Ủi</span>
            <span>🏆 Nhà Cung Cấp Đồng Phục Đối Tác 30 Năm DNT & Vinschool</span>
          </div>
        </div>

        <!-- ==========================================
             1. EDITORIAL LUXURY HERO COVER SECTION
             ========================================== -->
        <section class="relative overflow-hidden bg-gradient-to-b from-[#f5f8f5] via-white to-brand-cream/40 pt-10 pb-16 lg:py-20 border-b border-gray-100">
          <!-- Subtle Heritage Radial Motif -->
          <div class="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute top-1/2 -left-32 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <!-- Left High-Fashion Editorial Typography -->
              <div class="lg:col-span-7 space-y-7 text-center lg:text-left">
                <div class="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full border border-brand-green/20 shadow-sm">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></span>
                  <span class="text-xs font-bold text-brand-green uppercase tracking-widest font-heading">
                    Kỷ Nguyên Thời Trang Bền Vững 2026
                  </span>
                </div>

                <div class="space-y-4">
                  <h1 class="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-brand-greenDark font-serif leading-[1.12] tracking-tight">
                    Khí Chất Bản Lĩnh, <br class="hidden sm:inline">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-700 to-brand-gold">
                      Khắc Họa Di Sản
                    </span>
                  </h1>
                  <p class="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                    Từ thớ sợi phù sa Sen Đồng Tháp, Tơ Chuối Bến Tre đến hào khí Trống Đồng ngàn năm. HDC Fashion tiên phong mang đến thế hệ âu phục công sở & giải pháp đồng phục doanh nghiệp <strong class="text-brand-green font-bold">hoàn toàn không cần là ủi</strong>, tự thở và nâng tầm phong thái người dẫn đầu.
                  </p>
                </div>

                <!-- Three Key Pillars Badge Row -->
                <div class="grid grid-cols-3 gap-3 pt-1 max-w-lg mx-auto lg:mx-0">
                  <div class="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm text-center">
                    <i class="fa-solid fa-wand-magic-sparkles text-brand-gold text-lg mb-1"></i>
                    <div class="font-extrabold text-xs text-gray-900 font-heading">Không Là Ủi</div>
                    <div class="text-[10px] text-gray-500 mt-0.5">Tự phẳng nếp gấp</div>
                  </div>
                  <div class="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm text-center">
                    <i class="fa-solid fa-shield-virus text-brand-green text-lg mb-1"></i>
                    <div class="font-extrabold text-xs text-gray-900 font-heading">Kháng Khuẩn 99%</div>
                    <div class="text-[10px] text-gray-500 mt-0.5">Sợi sen & bạc hà</div>
                  </div>
                  <div class="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm text-center">
                    <i class="fa-solid fa-certificate text-emerald-600 text-lg mb-1"></i>
                    <div class="font-extrabold text-xs text-gray-900 font-heading">Chuẩn Vinschool</div>
                    <div class="text-[10px] text-gray-500 mt-0.5">Đối tác 30 năm DNT</div>
                  </div>
                </div>

                <!-- Primary Action Button Stack -->
                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <button onclick="HDC.Router.navigate('shop')" class="btn-shimmer bg-brand-green hover:bg-brand-greenDark text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-brand-green/25 flex items-center gap-2.5 hover:scale-[1.02] active:scale-[0.98]">
                    <span>Khám Phá Cửa Hàng</span>
                    <i class="fa-solid fa-arrow-right text-xs"></i>
                  </button>
                  <button onclick="HDC.Router.navigate('b2b')" class="bg-white hover:bg-emerald-50 text-brand-green border-2 border-brand-green/60 hover:border-brand-green px-7 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
                    <i class="fa-solid fa-briefcase text-xs"></i>
                    <span>Đồng Phục Doanh Nghiệp (B2B)</span>
                  </button>
                  <button onclick="HDC.Views.HomeView.scrollToSection('smart-size-advisor')" class="text-xs font-bold text-gray-600 hover:text-brand-green flex items-center gap-1.5 underline underline-offset-4 py-2">
                    <i class="fa-solid fa-ruler-combined text-brand-gold"></i> Đo Size Bằng AI
                  </button>
                </div>

                <!-- Trusted Endorsement Byline -->
                <div class="pt-3 border-t border-gray-100 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-500">
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

              <!-- Right Interactive Fashion Cover Montage -->
              <div class="lg:col-span-5 relative">
                <div class="relative mx-auto max-w-md">
                  
                  <!-- Main Fashion Centerpiece -->
                  <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white card-lift group cursor-pointer" onclick="HDC.Router.navigate('shop')">
                    <img src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80" alt="HDC Fashion Hero Cover" class="w-full h-[460px] sm:h-[500px] object-cover product-img-hover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                    
                    <!-- Floating Luxury Badges on Image -->
                    <div class="absolute top-4 left-4">
                      <span class="glass-luxury-dark text-amber-300 font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-lg border border-amber-300/30">
                        <i class="fa-solid fa-spa text-xs"></i> 100% Sợi Sen Đồng Tháp
                      </span>
                    </div>

                    <div class="absolute top-4 right-4">
                      <span class="bg-brand-red text-white font-extrabold text-[10px] px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider animate-float">
                        Không Cần Là Ủi
                      </span>
                    </div>

                    <!-- Bottom Hero Information Plate -->
                    <div class="absolute bottom-5 left-5 right-5 text-white space-y-2">
                      <span class="text-[10px] uppercase font-bold tracking-widest text-emerald-300">Bộ Sưu Tập Tiên Phong 2026</span>
                      <h3 class="font-serif text-xl sm:text-2xl font-bold leading-tight">
                        Sơ Mi Doanh Nhân Sợi Sen Kháng Khuẩn 1001
                      </h3>
                      <div class="flex items-center justify-between pt-1 border-t border-white/20">
                        <span class="text-amber-300 font-extrabold text-base">649.000₫ <span class="text-xs text-white/70 line-through font-normal">799.000₫</span></span>
                        <span class="text-xs bg-white text-brand-green px-3 py-1 rounded-xl font-bold group-hover:bg-brand-gold group-hover:text-white transition">
                          Xem Chi Tiết &rarr;
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Floating Partner Micro-Card (Bottom Right) -->
                  <div class="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3 animate-float-delay hidden sm:flex max-w-[240px]">
                    <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-lg font-bold shrink-0">
                      <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                      <div class="text-[10px] text-gray-400 font-bold uppercase">Nhà Cung Cấp Chính Thức</div>
                      <div class="text-xs font-bold text-gray-900">Đồng Phục Vinschool</div>
                      <div class="text-[10px] text-emerald-600 font-semibold">IHDC Kids Thế Hệ Mới</div>
                    </div>
                  </div>

                  <!-- Floating Review Micro-Card (Top Right) -->
                  <div class="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-float hidden sm:flex">
                    <span class="text-amber-400 text-xs"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>
                    <span class="text-xs font-bold text-gray-800">4.9/5 (1.2k Đánh giá)</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ==========================================
             2. SENSORY FABRIC LABORATORY (INNOVATION)
             Interactive Before/After Pain-Point & 6 Fibers
             ========================================== -->
        <section id="fabric-innovation-lab" class="py-16 lg:py-24 bg-white border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            
            <!-- Section Header -->
            <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span class="text-[11px] font-bold text-brand-gold uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                ✦ Bản Quyền Nghiên Cứu Độc Quyền
              </span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-brand-greenDark font-serif">
                Phòng Thí Nghiệm Chất Liệu Sinh Học
              </h2>
              <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Giải quyết triệt để nỗi ám ảnh <em>"Áo sơ mi nhăn nhúm sau 2 tiếng họp"</em> và <em>"Mỗi sáng vật lộn 15 phút với bàn là"</em> bằng 6 loại sợi tự nhiên bản địa Việt Nam.
              </p>
            </div>

            <!-- Pain Point Comparison Interactive Switcher -->
            <div class="bg-brand-grayBg p-6 sm:p-8 rounded-3xl border border-gray-200/80 mb-12">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                <!-- Conventional Problem Card -->
                <div class="bg-white p-6 rounded-2xl border border-red-200 shadow-sm space-y-4">
                  <div class="flex items-center justify-between border-b border-red-100 pb-3">
                    <div class="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
                      <i class="fa-solid fa-circle-xmark text-base"></i> Áo Sơ Mi Truyền Thống (Cotton/Poly)
                    </div>
                    <span class="text-[10px] bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded">Nỗi Đau Phổ Biến</span>
                  </div>
                  <ul class="space-y-3 text-xs text-gray-600">
                    <li class="flex items-start gap-2.5">
                      <span class="text-brand-red font-bold">✕</span>
                      <span><strong>Nhăn nhúm sau 2h ngồi xe:</strong> Nếp gấp ở khuỷu tay và vạt áo làm mất đi vẻ đĩnh đạc khi gặp đối tác quan trọng.</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-brand-red font-bold">✕</span>
                      <span><strong>Nóng bí & đọng mồ hôi:</strong> Vải không thoát hơi ẩm khiến lưng áo bết dính và tích tụ mùi hôi cuối ngày.</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-brand-red font-bold">✕</span>
                      <span><strong>Mất 15 phút là ủi mỗi sáng:</strong> Tốn kém thời gian quý giá và chi phí giặt hấp đắt đỏ.</span>
                    </li>
                  </ul>
                </div>

                <!-- HDC Green Solution Card -->
                <div class="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 p-6 rounded-2xl border-2 border-brand-green shadow-md space-y-4 relative">
                  <div class="absolute -top-3 right-6 bg-brand-green text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                    Đột Phá HDC Fashion
                  </div>
                  <div class="flex items-center justify-between border-b border-emerald-200 pb-3">
                    <div class="flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-wider font-heading">
                      <i class="fa-solid fa-circle-check text-base text-emerald-600"></i> Sơ Mi Sinh Học HDC (Sợi Sen & Tơ Chuối)
                    </div>
                    <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Giải Pháp Hoàn Hảo</span>
                  </div>
                  <ul class="space-y-3 text-xs text-gray-700">
                    <li class="flex items-start gap-2.5">
                      <span class="text-emerald-600 font-bold">✓</span>
                      <span><strong>Tự phục hồi phẳng sau 15 phút:</strong> Cấu trúc sợi tự sắp xếp lại độ căng bề mặt, phẳng lì tự nhiên không cần bàn là.</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-emerald-600 font-bold">✓</span>
                      <span><strong>Hạ nhiệt bề mặt 2.8°C & Kháng khuẩn 99.8%:</strong> Cấu trúc vi xốp rỗng lưu thông khí mát, triệt tiêu vi khuẩn gây mùi.</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-emerald-600 font-bold">✓</span>
                      <span><strong>Lấy áo ra mặc, bước đi tự tin:</strong> Tiết kiệm 100 giờ mỗi năm cho công việc và gia đình.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            <!-- 6 Indigenous Fibers Navigation Tabs -->
            <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8" id="fiberTabsContainer">
              ${Object.keys(this.fiberData).map(key => {
                const f = this.fiberData[key];
                const isActive = key === this.activeFiber;
                return `
                  <button onclick="HDC.Views.HomeView.selectFiber('${key}')" class="px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                    isActive 
                      ? 'bg-brand-green text-white shadow-lg scale-105 border border-brand-green' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                  }">
                    <i class="${f.icon}"></i>
                    <span>${f.name}</span>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Dynamic Fiber Spotlight Showcase Card -->
            <div id="fiberSpotlightPanel" class="bg-gradient-to-br from-white via-brand-grayBg/60 to-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl transition-all">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                <div class="lg:col-span-7 space-y-5">
                  <div class="flex flex-wrap items-center gap-2.5">
                    <span class="text-xs font-extrabold px-3 py-1 rounded-full border ${activeFiber.color}">
                      ${activeFiber.badge}
                    </span>
                    <span class="text-xs text-gray-400 font-medium">
                      <i class="fa-solid fa-location-dot text-brand-gold"></i> Vùng nguyên liệu: ${activeFiber.region}
                    </span>
                  </div>

                  <h3 class="text-2xl sm:text-3xl font-extrabold text-brand-greenDark font-serif">
                    ${activeFiber.name}
                  </h3>

                  <p class="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    ${activeFiber.description}
                  </p>

                  <!-- 3 Metrics Data Gauges -->
                  <div class="grid grid-cols-3 gap-3 pt-2">
                    ${activeFiber.stats.map(s => `
                      <div class="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm text-center">
                        <div class="text-xl sm:text-2xl font-extrabold text-brand-green font-heading">${s.value}</div>
                        <div class="text-xs font-bold text-gray-800 mt-0.5">${s.label}</div>
                        <div class="text-[10px] text-gray-400">${s.sub}</div>
                      </div>
                    `).join('')}
                  </div>

                  <!-- Sample Matching Product CTA -->
                  <div class="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
                    <div class="space-y-0.5">
                      <span class="text-[10px] text-gray-400 uppercase font-semibold">Sản phẩm tiêu biểu ứng dụng:</span>
                      <div class="text-xs sm:text-sm font-bold text-gray-900">${activeFiber.productSample}</div>
                    </div>
                    <button onclick="HDC.Components.QuickViewModal.open(${activeFiber.productId})" class="btn-shimmer bg-brand-gold hover:bg-yellow-600 text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow flex items-center gap-2">
                      <span>Xem Chi Tiết Áo</span>
                      <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                  </div>
                </div>

                <!-- Fiber Visual Spotlight Image -->
                <div class="lg:col-span-5">
                  <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-square border-4 border-white group">
                    <img id="fiberSpotlightImg" src="${activeFiber.img}" alt="${activeFiber.name}" class="w-full h-full object-cover product-img-hover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                    <div class="absolute bottom-5 left-5 right-5 text-white flex justify-between items-end">
                      <div>
                        <span class="text-[10px] bg-white/30 backdrop-blur-md px-2.5 py-0.5 rounded font-bold uppercase">Ứng dụng thực tế</span>
                        <div class="font-bold text-sm sm:text-base mt-1 line-clamp-1">${activeFiber.productSample}</div>
                      </div>
                      <span class="text-base font-extrabold text-amber-300 shrink-0">${activeFiber.productPrice}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        <!-- ==========================================
             3. INTERACTIVE CAPSULE LOOKBOOK & OUTFITS
             Curated Bundles for Executives & Golfers
             ========================================== -->
        <section class="py-16 bg-brand-cream/50 border-b border-gray-100 reveal-on-scroll">
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
                        ? 'bg-brand-green text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }">
                      ${lb.title}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Active Lookbook Detail Box -->
            <div id="lookbookDisplayPanel" class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl">
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
                      <div class="flex items-center justify-between p-3.5 rounded-xl bg-brand-grayBg border border-gray-100 hover:border-brand-green/30 transition">
                        <div class="flex items-center gap-3">
                          <i class="fa-solid fa-shirt text-brand-green text-sm"></i>
                          <span class="text-xs font-bold text-gray-800">${item.name}</span>
                        </div>
                        <span class="text-xs font-bold text-brand-green">${item.price.toLocaleString('vi-VN')}₫</span>
                      </div>
                    `).join('')}
                  </div>

                  <!-- Combo Pricing Breakdown -->
                  <div class="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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

        <!-- ==========================================
             4. SMART AI SIZE & FIT ADVISOR
             Interactive Widget directly on Homepage
             ========================================== -->
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
                  
                  <!-- Gender Switch -->
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

                  <!-- Height Slider -->
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

                  <!-- Weight Slider -->
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

                  <!-- Fit Preference -->
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

                  <!-- Estimated Body Measurements -->
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

                  <button onclick="HDC.Router.navigate('shop')" class="w-full btn-shimmer bg-brand-gold hover:bg-yellow-600 text-white font-bold text-xs py-3 rounded-xl transition shadow flex items-center justify-center gap-2">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <span>Xem Sản Phẩm Size Này</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>

        <!-- ==========================================
             5. INTERACTIVE B2B CORPORATE UNIFORM CALCULATOR
             Live Estimator for HR & Enterprise Buyers
             ========================================== -->
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
                  
                  <!-- Quantity Slider -->
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

                  <!-- Fabric Selection Tabs -->
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

                  <!-- B2B Enterprise Guarantees -->
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

        <!-- ==========================================
             6. SIGNATURE BEST SELLERS & INSTANT SIZE CARD
             Grid with Direct Quick-Size on Card
             ========================================== -->
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

        <!-- ==========================================
             7. LUXURY TICKET VOUCHER VAULT
             Direct 1-Click Copy with Animated Feedback
             ========================================== -->
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

        <!-- ==========================================
             8. SOCIAL PROOF & REAL VERIFIED TESTIMONIALS
             CEOs, Golfers, Vinschool Parents
             ========================================== -->
        <section class="py-16 bg-white border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            
            <!-- Real Counters Row -->
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
              <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                <span class="font-extrabold text-sm sm:text-base text-gray-800 tracking-wider">HỘI DOANH NHÂN TRẺ VN</span>
                <span class="font-extrabold text-sm sm:text-base text-gray-800 tracking-wider">VINSCHOOL</span>
                <span class="font-extrabold text-sm sm:text-base text-gray-800 tracking-wider">FPT GROUP</span>
                <span class="font-extrabold text-sm sm:text-base text-gray-800 tracking-wider">SACOMBANK</span>
                <span class="font-extrabold text-sm sm:text-base text-gray-800 tracking-wider">VIETTEL</span>
              </div>
            </div>

            <!-- Real Testimonial Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <!-- Review 1: CEO -->
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

              <!-- Review 2: Golfer -->
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

              <!-- Review 3: Parent Vinschool -->
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

        <!-- ==========================================
             9. HERITAGE SUSTAINABILITY JOURNEY
             From Farm to Boardroom
             ========================================== -->
        <section class="py-16 bg-brand-cream/40 border-b border-gray-100 reveal-on-scroll">
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            
            <div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span class="text-[11px] font-bold text-brand-gold uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                ✦ Chu Trình Minh Bạch Sinh Thái
              </span>
              <h2 class="text-3xl font-extrabold text-brand-greenDark font-serif">
                Hành Trình Từ Cánh Đồng Đến Phòng Họp
              </h2>
              <p class="text-xs sm:text-sm text-gray-500">
                Mỗi chiếc áo là một tác phẩm kết tinh từ nguồn nguyên liệu bản địa và bàn tay thợ may Việt
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-brand-green flex items-center justify-center font-bold text-base">
                  01
                </div>
                <h4 class="font-bold text-sm text-gray-900">Vùng Nguyên Liệu Xanh</h4>
                <p class="text-xs text-gray-500 leading-relaxed">
                  Thu hoạch thân sen Đồng Tháp, thân chuối Bến Tre và rừng tre tự nhiên bền vững, tạo thu nhập cho nông dân.
                </p>
              </div>

              <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <div class="w-10 h-10 rounded-xl bg-amber-100 text-brand-gold flex items-center justify-center font-bold text-base">
                  02
                </div>
                <h4 class="font-bold text-sm text-gray-900">Thủy Phân Sinh Học</h4>
                <p class="text-xs text-gray-500 leading-relaxed">
                  Công nghệ enzyme không hóa chất độc hại, bảo toàn trọn vẹn đặc tính kháng khuẩn và tự phục hồi phẳng của sợi.
                </p>
              </div>

              <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-base">
                  03
                </div>
                <h4 class="font-bold text-sm text-gray-900">Dệt May Liền Seamless</h4>
                <p class="text-xs text-gray-500 leading-relaxed">
                  Dây chuyền tự động hóa loại bỏ đường may cọ xát, đưa hoa văn Trống Đồng Đông Sơn tinh xảo lên nẹp và cổ áo.
                </p>
              </div>

              <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-base">
                  04
                </div>
                <h4 class="font-bold text-sm text-gray-900">Đồng Hành Thành Công</h4>
                <p class="text-xs text-gray-500 leading-relaxed">
                  Trao đến tay 50.000+ doanh nhân và học sinh Việt Nam diện mạo chỉn chu, đĩnh đạc và tự hào bản sắc.
                </p>
              </div>

            </div>

          </div>
        </section>

        <!-- ==========================================
             10. BOTTOM FLOATING LUXURY ACTION DOCK
             ========================================== -->
        <div class="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-gray-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-full luxury-floating-dock flex items-center gap-3 sm:gap-5 border border-white/20">
          <button onclick="HDC.Router.navigate('shop')" class="text-xs font-bold hover:text-amber-300 flex items-center gap-1.5 transition">
            <i class="fa-solid fa-store text-emerald-400"></i>
            <span class="hidden sm:inline">Cửa Hàng</span>
          </button>
          
          <span class="w-px h-4 bg-gray-700"></span>

          <button onclick="HDC.Views.HomeView.scrollToSection('smart-size-advisor')" class="text-xs font-bold hover:text-amber-300 flex items-center gap-1.5 transition">
            <i class="fa-solid fa-ruler-combined text-brand-gold"></i>
            <span>Đo Size AI</span>
          </button>

          <span class="w-px h-4 bg-gray-700"></span>

          <button onclick="HDC.Components.CartDrawer.open()" class="text-xs font-bold hover:text-amber-300 flex items-center gap-1.5 transition relative">
            <i class="fa-solid fa-bag-shopping text-emerald-400"></i>
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
    const panel = document.getElementById('fiberSpotlightPanel');
    if (!panel || !fiber) return;

    panel.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fadeIn">
        <div class="lg:col-span-7 space-y-5">
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="text-xs font-extrabold px-3 py-1 rounded-full border ${fiber.color}">
              ${fiber.badge}
            </span>
            <span class="text-xs text-gray-400 font-medium">
              <i class="fa-solid fa-location-dot text-brand-gold"></i> Vùng nguyên liệu: ${fiber.region}
            </span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-brand-greenDark font-serif">
            ${fiber.name}
          </h3>

          <p class="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            ${fiber.description}
          </p>

          <div class="grid grid-cols-3 gap-3 pt-2">
            ${fiber.stats.map(s => `
              <div class="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div class="text-xl sm:text-2xl font-extrabold text-brand-green font-heading">${s.value}</div>
                <div class="text-xs font-bold text-gray-800 mt-0.5">${s.label}</div>
                <div class="text-[10px] text-gray-400">${s.sub}</div>
              </div>
            `).join('')}
          </div>

          <div class="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100">
            <div class="space-y-0.5">
              <span class="text-[10px] text-gray-400 uppercase font-semibold">Sản phẩm tiêu biểu ứng dụng:</span>
              <div class="text-xs sm:text-sm font-bold text-gray-900">${fiber.productSample}</div>
            </div>
            <button onclick="HDC.Components.QuickViewModal.open(${fiber.productId})" class="btn-shimmer bg-brand-gold hover:bg-yellow-600 text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow flex items-center gap-2">
              <span>Xem Chi Tiết Áo</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-square border-4 border-white group">
            <img id="fiberSpotlightImg" src="${fiber.img}" alt="${fiber.name}" class="w-full h-full object-cover product-img-hover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
            <div class="absolute bottom-5 left-5 right-5 text-white flex justify-between items-end">
              <div>
                <span class="text-[10px] bg-white/30 backdrop-blur-md px-2.5 py-0.5 rounded font-bold uppercase">Ứng dụng thực tế</span>
                <div class="font-bold text-sm sm:text-base mt-1 line-clamp-1">${fiber.productSample}</div>
              </div>
              <span class="text-base font-extrabold text-amber-300 shrink-0">${fiber.productPrice}</span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Update active tab buttons
    const tabs = document.querySelectorAll('#fiberTabsContainer button');
    tabs.forEach(btn => {
      if (btn.innerText.includes(fiber.name)) {
        btn.className = 'px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 bg-brand-green text-white shadow-lg scale-105 border border-brand-green';
      } else {
        btn.className = 'px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm';
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
              <div class="flex items-center justify-between p-3.5 rounded-xl bg-brand-grayBg border border-gray-100 hover:border-brand-green/30 transition">
                <div class="flex items-center gap-3">
                  <i class="fa-solid fa-shirt text-brand-green text-sm"></i>
                  <span class="text-xs font-bold text-gray-800">${item.name}</span>
                </div>
                <span class="text-xs font-bold text-brand-green">${item.price.toLocaleString('vi-VN')}₫</span>
              </div>
            `).join('')}
          </div>

          <div class="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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

    // Calculate Recommended Size
    let size = '39 (M)';
    let shoulder = 44;
    let chest = 96;
    let len = 71;

    const bmi = w / ((h / 100) * (h / 100));

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
