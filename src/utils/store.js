/**
 * HDC Fashion — Central Store (State Management)
 * Handles reactive state for Cart, Wishlist, Vouchers, and Filters
 */

window.HDC = window.HDC || {};
window.HDC.Store = {
  state: {
    cart: [
      {
        id: 1,
        title: "Sơ mi Trắng Sợi Sen Cao Cấp 1001",
        size: "L",
        price: 649000,
        qty: 1,
        img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&auto=format&fit=crop&q=80"
      },
      {
        id: 5,
        title: "Áo Polo Doanh Nhân Trẻ Golf Edition",
        size: "XL",
        price: 529000,
        qty: 1,
        img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=300&auto=format&fit=crop&q=80"
      }
    ],
    wishlist: [1],
    activeVoucher: null, // { code: 'HDC50K', discount: 50000 }
    listeners: []
  },

  /**
   * Subscribe to state change events
   * @param {Function} listener
   */
  subscribe(listener) {
    if (typeof listener === 'function') {
      this.state.listeners.push(listener);
    }
  },

  /**
   * Notify all subscribed listeners
   */
  notify() {
    this.state.listeners.forEach(fn => fn(this.state));
  },

  // --------------------------------------------------
  // CART ACTIONS
  // --------------------------------------------------
  getCart() {
    return this.state.cart;
  },

  getCartCount() {
    return this.state.cart.reduce((sum, item) => sum + item.qty, 0);
  },

  getCartSubtotal() {
    return this.state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  },

  getCartTotal() {
    const subtotal = this.getCartSubtotal();
    const discount = this.state.activeVoucher ? this.state.activeVoucher.discount : 0;
    return Math.max(0, subtotal - discount);
  },

  addToCart(product, size = 'L') {
    const existingIndex = this.state.cart.findIndex(
      item => item.id === product.id && item.size === size
    );
    if (existingIndex > -1) {
      this.state.cart[existingIndex].qty += 1;
    } else {
      this.state.cart.push({
        id: product.id,
        title: product.title,
        size: size,
        price: product.price,
        qty: 1,
        img: product.img
      });
    }
    this.notify();
    HDC.Utils.showToast(`Đã thêm "${product.title}" vào giỏ hàng!`);
  },

  removeFromCart(index) {
    if (index >= 0 && index < this.state.cart.length) {
      const removed = this.state.cart.splice(index, 1)[0];
      this.notify();
      HDC.Utils.showToast(`Đã xóa "${removed.title}" khỏi giỏ`);
    }
  },

  clearCart() {
    this.state.cart = [];
    this.state.activeVoucher = null;
    this.notify();
  },

  applyVoucher(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    if (cleanCode === 'HDC50K') {
      this.state.activeVoucher = { code: 'HDC50K', discount: 50000 };
      this.notify();
      HDC.Utils.showToast('Áp dụng mã HDC50K: Giảm 50.000₫!');
      return true;
    } else if (cleanCode === 'HDC100K') {
      this.state.activeVoucher = { code: 'HDC100K', discount: 100000 };
      this.notify();
      HDC.Utils.showToast('Áp dụng mã HDC100K: Giảm 100.000₫!');
      return true;
    } else {
      HDC.Utils.showToast('Mã voucher không hợp lệ hoặc đã hết hạn');
      return false;
    }
  },

  // --------------------------------------------------
  // WISHLIST ACTIONS
  // --------------------------------------------------
  toggleWishlist(productId) {
    const index = this.state.wishlist.indexOf(productId);
    if (index > -1) {
      this.state.wishlist.splice(index, 1);
      HDC.Utils.showToast('Đã xóa khỏi danh sách yêu thích');
    } else {
      this.state.wishlist.push(productId);
      HDC.Utils.showToast('Đã lưu vào danh sách yêu thích');
    }
    this.notify();
  },

  isWishlisted(productId) {
    return this.state.wishlist.includes(productId);
  },

  getWishlistCount() {
    return this.state.wishlist.length;
  }
};
