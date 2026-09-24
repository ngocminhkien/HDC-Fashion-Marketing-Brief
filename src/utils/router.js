/**
 * HDC Fashion — SPA Client Router
 * Manages view switching, URL synchronization, and active state
 */

window.HDC = window.HDC || {};
window.HDC.Router = {
  currentView: 'home',

  /**
   * Navigate to a target view panel
   * @param {string} viewName - e.g. 'home', 'shop', 'b2b', 'kids', 'quiz', 'tracking', 'faq', 'checkout'
   * @param {Object} [params] - optional parameters (e.g. category filter, search query)
   */
  navigate(viewName, params = {}) {
    this.currentView = viewName;

    // Hide all view panels
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.add('hidden');
    });

    // Show target view panel
    const targetEl = document.getElementById('view-' + viewName);
    if (targetEl) {
      targetEl.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update Desktop Navigation Bar Active Indicator
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.remove('active', 'active-sale');
    });

    const activeNavBtn = document.getElementById('nav-' + viewName);
    if (activeNavBtn) {
      if (viewName === 'sale') {
        activeNavBtn.classList.add('active-sale');
      } else {
        activeNavBtn.classList.add('active');
      }
    }

    // Dispatch custom router event
    window.dispatchEvent(new CustomEvent('hdc:view-changed', {
      detail: { view: viewName, params }
    }));
  },

  /**
   * Initialize router listeners
   */
  init() {
    // Handle hash on page load
    const initialHash = window.location.hash.replace('#', '') || 'home';
    this.navigate(initialHash);

    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (hash !== this.currentView) {
        this.navigate(hash);
      }
    });
  }
};
