/**
 * HDC Fashion — Utility Helpers
 * Pure helper functions for formatting, clipboard, and notifications
 */

window.HDC = window.HDC || {};
window.HDC.Utils = {
  /**
   * Format number as Vietnamese Dong currency string
   * @param {number} amount
   * @returns {string} e.g. "649.000₫"
   */
  formatCurrency(amount) {
    if (typeof amount !== 'number') amount = Number(amount) || 0;
    return amount.toLocaleString('vi-VN') + '₫';
  },

  /**
   * Copy text to user's system clipboard
   * @param {string} text
   * @returns {Promise<boolean>}
   */
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      this.showToast(`Đã sao chép mã "${text}" vào bộ nhớ tạm!`);
      return true;
    } catch (err) {
      this.showToast(`Mã ưu đãi của bạn: ${text}`);
      return false;
    }
  },

  /**
   * Show toast alert notification at the top-right corner
   * @param {string} message
   * @param {number} durationMs
   */
  showToast(message, durationMs = 3500) {
    const toastEl = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    if (!toastEl || !toastMsg) return;

    toastMsg.innerText = message;
    toastEl.classList.remove('hidden');
    toastEl.classList.add('flex');

    if (window._toastTimeout) clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
      toastEl.classList.add('hidden');
      toastEl.classList.remove('flex');
    }, durationMs);
  },

  /**
   * Debounce helper for high-frequency input events
   * @param {Function} func
   * @param {number} wait
   */
  debounce(func, wait = 250) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
};
