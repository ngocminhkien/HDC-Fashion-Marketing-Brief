/**
 * HDC Fashion — Utility Helpers & Motion Intelligence
 * Pure helper functions for formatting, clipboard, dynamic counters, and rich micro-interactions
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
   * Copy text to user's system clipboard with feedback
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
   * Show premium animated toast notification with progress bar
   * @param {string} message
   * @param {number} durationMs
   */
  showToast(message, durationMs = 3500) {
    const toastEl = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    const toastBar = document.getElementById('toastProgressBar');
    if (!toastEl || !toastMsg) return;

    toastMsg.innerText = message;
    toastEl.classList.remove('hidden');
    toastEl.classList.add('flex');

    if (toastBar) {
      toastBar.style.animation = 'none';
      void toastBar.offsetWidth; // trigger reflow
      toastBar.style.animation = `toastProgress ${durationMs}ms linear forwards`;
    }

    if (window._toastTimeout) clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
      toastEl.classList.add('hidden');
      toastEl.classList.remove('flex');
    }, durationMs);
  },

  /**
   * Trigger interactive cart shake animation on add-to-cart
   */
  triggerCartBounce() {
    const badge = document.getElementById('cartCountBadge');
    const cartBtn = badge?.closest('button');
    if (!cartBtn) return;

    cartBtn.classList.remove('animate-cart-shake');
    void cartBtn.offsetWidth; // trigger reflow
    cartBtn.classList.add('animate-cart-shake');

    setTimeout(() => {
      cartBtn.classList.remove('animate-cart-shake');
    }, 700);
  },

  /**
   * Trigger heartbeat pulse animation on wishlist toggle
   * @param {HTMLElement} btn
   */
  triggerWishlistPop(btn) {
    const target = btn || document.getElementById('wishlistCountBadge')?.closest('button');
    if (!target) return;

    target.classList.remove('animate-heart-pop');
    void target.offsetWidth;
    target.classList.add('animate-heart-pop');

    setTimeout(() => {
      target.classList.remove('animate-heart-pop');
    }, 500);
  },

  /**
   * Smooth number counter animation
   * @param {HTMLElement} el
   * @param {number} target
   * @param {number} duration
   * @param {string} suffix
   */
  animateCounter(el, target, duration = 1600, suffix = '+') {
    if (!el || el._counterAnimated) return;
    el._counterAnimated = true;

    const start = 0;
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * ease);

      el.innerText = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.innerText = target + suffix;
      }
    };

    requestAnimationFrame(update);
  },

  /**
   * Initialize Scroll Reveal and dynamic counters via IntersectionObserver
   */
  initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-stagger').forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');

          // Trigger number counter if present
          const counterEl = entry.target.querySelector('[data-counter]');
          if (counterEl) {
            const target = parseInt(counterEl.getAttribute('data-counter'));
            const suffix = counterEl.getAttribute('data-counter-suffix') || '+';
            if (!isNaN(target)) {
              this.animateCounter(counterEl, target, 1600, suffix);
            }
          }

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll, .reveal-stagger').forEach(el => {
      observer.observe(el);
    });
  },

  /**
   * Sticky header scroll listener
   */
  initScrollHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  },

  /**
   * Debounce helper
   */
  debounce(func, wait = 250) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
};
