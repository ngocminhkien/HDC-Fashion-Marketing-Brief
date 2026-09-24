/**
 * HDC Fashion — Reusable Product Card Component
 * Generates semantic HTML for product items in grids with graceful image fallbacks,
 * luxury lift hover effects, and animated micro-interactions
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
    const oldPriceFormatted = product.oldPrice ? product.oldPrice.toLocaleString('vi-VN') + '₫' : '';
    const fallbackImg = "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80";

    return `
      <div class="product-item group cursor-pointer card-lift p-2 sm:p-2.5 rounded-2xl bg-white border border-gray-100/80 hover:border-brand-green/30" onclick="HDC.Components.QuickViewModal.open(${product.id})">
        <div class="relative bg-gray-100 rounded-xl overflow-hidden aspect-[3/4] mb-2.5 shadow-inner">
          <span class="absolute top-2 left-2 z-10 bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md animate-float">
            ${product.badge || 'Mới'}
          </span>
          <button onclick="event.stopPropagation(); HDC.Store.toggleWishlist(${product.id}); HDC.Utils.triggerWishlistPop(this)" class="absolute top-2 right-2 z-10 w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-brand-red transition shadow-sm hover:scale-110 active:scale-95" title="Yêu thích">
            <i class="${wishIconClass} text-xs transition-colors"></i>
          </button>
          <img src="${product.img}" alt="${product.title}" onerror="this.onerror=null; this.src='${fallbackImg}';" class="w-full h-full object-cover product-img-hover" loading="lazy">
          <div class="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
            <span class="text-xs text-white font-semibold bg-brand-green/90 backdrop-blur-sm px-3.5 py-1.5 rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5 btn-shimmer">
              <i class="fa-regular fa-eye text-[11px]"></i> Xem nhanh
            </span>
          </div>
        </div>
        <div class="space-y-1 px-1">
          <h3 class="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-brand-green transition-colors">
            ${product.title}
          </h3>
          <div class="flex items-center gap-2">
            <span class="text-xs sm:text-sm font-bold text-brand-red">${product.price.toLocaleString('vi-VN')}₫</span>
            ${oldPriceFormatted ? `<span class="text-[11px] text-gray-400 line-through">${oldPriceFormatted}</span>` : ''}
          </div>
          <div class="flex items-center justify-between pt-0.5">
            <div class="flex items-center gap-1">
              ${(product.colors || []).map(c => 
                `<span class="w-3 h-3 rounded-full border border-gray-300 shadow-sm transition-transform hover:scale-125" style="background-color:${c}"></span>`
              ).join('')}
            </div>
            <span class="text-[11px] text-amber-500 font-bold flex items-center gap-0.5">
              <i class="fa-solid fa-star text-[10px]"></i> ${product.rating || '4.8'}
            </span>
          </div>
        </div>
      </div>
    `;
  }
};
