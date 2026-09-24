/**
 * HDC Fashion — Reusable Product Card Component
 * Generates semantic HTML for product items in grids with graceful image fallbacks
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
      <div class="product-item group cursor-pointer" onclick="HDC.Components.QuickViewModal.open(${product.id})">
        <div class="relative bg-gray-100 rounded-lg overflow-hidden aspect-[3/4] mb-2.5">
          <span class="absolute top-2 left-2 z-10 bg-brand-green text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
            ${product.badge || 'Mới'}
          </span>
          <button onclick="event.stopPropagation(); HDC.Store.toggleWishlist(${product.id})" class="absolute top-2 right-2 z-10 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center text-gray-400 hover:text-brand-red transition shadow-sm" title="Yêu thích">
            <i class="${wishIconClass} text-xs"></i>
          </button>
          <img src="${product.img}" alt="${product.title}" onerror="this.onerror=null; this.src='${fallbackImg}';" class="w-full h-full object-cover product-img-hover" loading="lazy">
          <div class="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
            <span class="text-xs text-white font-semibold bg-brand-green px-3 py-1 rounded shadow">Xem nhanh</span>
          </div>
        </div>
        <div class="space-y-1">
          <h3 class="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-brand-green transition">
            ${product.title}
          </h3>
          <div class="flex items-center gap-2">
            <span class="text-xs sm:text-sm font-bold text-brand-red">${product.price.toLocaleString('vi-VN')}₫</span>
            ${oldPriceFormatted ? `<span class="text-[11px] text-gray-400 line-through">${oldPriceFormatted}</span>` : ''}
          </div>
          <div class="flex items-center gap-1 pt-0.5">
            <span class="w-3 h-3 rounded-full bg-white border border-gray-400"></span>
            <span class="w-3 h-3 rounded-full bg-[#1e293b]"></span>
            <span class="w-3 h-3 rounded-full bg-[#e2e8f0]"></span>
          </div>
        </div>
      </div>
    `;
  }
};
