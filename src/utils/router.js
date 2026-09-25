/**
 * HDC Fashion — SPA Client Router with Cinematic Page Transitions
 * Manages view switching, progress bar loading, URL synchronization, and active state
 */

window.HDC = window.HDC || {};
window.HDC.Router = {
  currentView: 'home',

  /**
   * Navigate to a target view panel with smooth page transition
   * @param {string} viewName - e.g. 'home', 'shop', 'b2b', 'kids', 'quiz', 'tracking', 'faq', 'checkout'
   * @param {Object} [params] - optional parameters (e.g. category filter, search query)
   */
  navigate(viewName, params = {}) {
    this.currentView = viewName;

    // Trigger Top Route Loading Progress Bar
    this.startProgressBar();

    const targetViewId = 'view-' + viewName;

    // Hide all view panels
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.add('hidden');
      panel.classList.remove('view-enter-active');
    });

    // Show target view panel with entrance animation
    const targetEl = document.getElementById(targetViewId);
    if (targetEl) {
      targetEl.classList.remove('hidden');
      targetEl.classList.add('view-enter-active');
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

    // Complete Progress Bar
    setTimeout(() => {
      this.completeProgressBar();
    }, 280);

    // Dispatch custom router event
    window.dispatchEvent(new CustomEvent('hdc:view-changed', {
      detail: { view: viewName, params }
    }));
  },

  /**
   * Start top route progress bar
   */
  startProgressBar() {
    let bar = document.getElementById('routeProgressBar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'routeProgressBar';
      document.body.prepend(bar);
    }
    bar.classList.remove('done');
    bar.classList.add('loading');
  },

  /**
   * Complete top route progress bar
   */
  completeProgressBar() {
    const bar = document.getElementById('routeProgressBar');
    if (!bar) return;
    bar.classList.remove('loading');
    bar.classList.add('done');
    setTimeout(() => {
      bar.classList.remove('done');
    }, 350);
  },

  /**
   * Initialize router listeners
   */
  init() {
    this.startProgressBar();

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
