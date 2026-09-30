/**
 * HDC Fashion — Reusable Product Card Component
 * Generates semantic HTML for product items in grids with graceful image fallbacks,
 * luxury lift hover effects, color swatches, real pricing/discount badges, and quick add-to-cart.
 * All fake/virtual metrics (fabricated sold count, artificial urgency labels, simulated ratings) have been removed.
 */

window.HDC = window.HDC || {};
window.HDC.Components = window.HDC.Components || {};

window.HDC.Components.ProductCard = {
  /**
   * Render HTML string for a single product card
   * @param {Object} product
   * @returns {string}
   */
  render(product) {
    const isWish = HDC.Store.isWishlisted(product.id);
    const wishIconClass = isWish ? 'fa-solid fa-heart text-brand-red' : 'fa-regular fa-heart';
    const fallbackImg = "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80";

    // Tính % giảm giá thực tế (nếu có giá niêm yết cũ)
    const discountPct = product.oldPrice && product.oldPrice > product.price
      ? Math.round((product.oldPrice - product.price) / product.oldPrice * 100)
      : 0;

    return `
      <div class="product-item group cursor-pointer bg-white rounded-2xl border border-gray-100 hover:border-brand-green/40 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
           onclick="HDC.Components.QuickViewModal.open(${product.id})">
        
        <!-- IMAGE AREA -->
        <div class="relative bg-gray-100 overflow-hidden aspect-[3/4]">
          
          <!-- Top-left: Discount badge hoặc USP badge thực tế -->
          ${discountPct >= 10
            ? `<span class="absolute top-2 left-2 z-10 bg-brand-red text-white text-[11px] font-extrabold px-2 py-0.5 rounded-md shadow">
                 -${discountPct}%
               </span>`
            : (product.badge
                ? `<span class="absolute top-2 left-2 z-10 bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow">
                     ${product.badge}
                   </span>`
                : ''
              )
          }

          <!-- Top-right: Wishlist -->
          <button onclick="event.stopPropagation(); HDC.Store.toggleWishlist(${product.id}); if(window.HDC.Utils && HDC.Utils.triggerWishlistPop) HDC.Utils.triggerWishlistPop(this);"
                  class="absolute top-2 right-2 z-10 w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-brand-red transition shadow-sm hover:scale-110 active:scale-95" title="Yêu thích">
            <i class="${wishIconClass} text-xs transition-colors"></i>
          </button>

          <!-- Product image -->
          <img src="${product.img}" alt="${product.title}"
               onerror="this.onerror=null; this.src='${fallbackImg}';"
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">

          <!-- Hover overlay: Quick View -->
          <div class="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
            <span class="text-xs text-white font-semibold bg-brand-green/90 backdrop-blur-sm px-4 py-1.5 rounded-lg shadow flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <i class="fa-regular fa-eye text-[11px]"></i> Xem Nhanh
            </span>
          </div>
        </div>

        <!-- INFO AREA -->
        <div class="flex flex-col gap-1.5 p-3 flex-1 justify-between">
          
          <div class="space-y-1.5">
            <!-- Tên sản phẩm -->
            <h3 class="text-xs sm:text-[13px] font-semibold text-gray-800 line-clamp-2 group-hover:text-brand-green transition-colors leading-snug">
              ${product.title}
            </h3>

            <!-- Color swatches -->
            <div class="flex items-center gap-1 pt-0.5">
              ${(product.colors || []).slice(0, 4).map(c =>
                `<span class="w-3.5 h-3.5 rounded-full border border-gray-300 shadow-sm transition-transform hover:scale-125" style="background-color:${c}" title="${c}"></span>`
              ).join('')}
              ${product.colors && product.colors.length > 4 ? `<span class="text-[10px] text-gray-400">+${product.colors.length - 4}</span>` : ''}
            </div>
          </div>

          <!-- Price row -->
          <div class="flex items-center justify-between pt-2 border-t border-gray-50 mt-auto">
            <div class="flex items-baseline gap-1.5">
              <span class="text-sm sm:text-base font-extrabold text-brand-red">
                ${product.price.toLocaleString('vi-VN')}₫
              </span>
              ${product.oldPrice
                ? `<span class="text-[10px] text-gray-400 line-through">${product.oldPrice.toLocaleString('vi-VN')}₫</span>`
                : ''
              }
            </div>
            <!-- Quick Add to Cart button -->
            <button onclick="event.stopPropagation(); HDC.Store.addToCart(${product.id}, 'L', 1);"
                    class="w-7 h-7 rounded-full bg-brand-green hover:bg-brand-greenDark text-white flex items-center justify-center text-xs transition shadow-sm active:scale-90"
                    title="Thêm vào giỏ">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>

        </div>
      </div>
    `;
  }
};
