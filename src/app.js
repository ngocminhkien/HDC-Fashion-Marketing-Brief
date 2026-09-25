/**
 * HDC Fashion — Application Bootstrap Orchestrator
 * Mounts components, views, modals, and initializes state, router & motion engine
 */

window.HDC = window.HDC || {};

window.HDC.App = {
  /**
   * Bootstrap the entire application
   */
  init() {
    // 1. Mount Static Structural Components
    this.mountLayout();

    // 2. Initialize Component Listeners
    HDC.Components.Header.init();
    HDC.Components.CartDrawer.init();

    // 3. Initialize View Controllers
    HDC.Views.ShopView.init();
    HDC.Views.B2BView.init();
    HDC.Views.KidsView.init();
    HDC.Views.FaqView.init();
    HDC.Views.CheckoutView.init();

    // 4. Initialize Router
    HDC.Router.init();

    // 5. Initialize Motion Intelligence (Scroll Reveal, Header & Counters)
    HDC.Utils.initScrollReveal();
    HDC.Utils.initScrollHeader();

    window.addEventListener('hdc:view-changed', () => {
      setTimeout(() => HDC.Utils.initScrollReveal(), 100);
    });
  },

  /**
   * Mount layout components and view containers into the DOM
   */
  mountLayout() {
    // Mount Header
    const headerMount = document.getElementById('appHeader');
    if (headerMount) {
      headerMount.innerHTML = HDC.Components.Header.render();
    }

    // Mount Views into Main
    const mainMount = document.getElementById('appMain');
    if (mainMount) {
      mainMount.innerHTML = [
        HDC.Views.HomeView.render(),
        HDC.Views.AboutView.render(),
        HDC.Views.ShopView.render(),
        HDC.Views.B2BView.render(),
        HDC.Views.KidsView.render(),
        HDC.Views.QuizView.render(),
        HDC.Views.TrackingView.render(),
        HDC.Views.FaqView.render(),
        HDC.Views.CheckoutView.render()
      ].join('\n');
    }

    // Mount Footer
    const footerMount = document.getElementById('appFooter');
    if (footerMount) {
      footerMount.innerHTML = HDC.Components.Footer.render();
    }

    // Mount Modals, Drawers & Chatbot
    const modalsMount = document.getElementById('appModals');
    if (modalsMount) {
      modalsMount.innerHTML = [
        HDC.Components.QuickViewModal.render(),
        HDC.Components.B2BModal.render(),
        HDC.Components.CartDrawer.render(),
        HDC.Components.Chatbot.render(),
        HDC.Components.LegalModal.render(),
        `
        <!-- Animated Toast Container with Progress Bar -->
        <div id="toastNotification" class="fixed top-20 right-5 z-50 bg-gray-900/95 backdrop-blur text-white text-xs px-4 py-3 rounded-xl shadow-2xl hidden items-center gap-3 animate-fadeIn border border-gray-700/80 overflow-hidden min-w-[280px]">
          <div class="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm shrink-0">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <span id="toastMessage" class="flex-1 font-medium">Thông báo</span>
          <div id="toastProgressBar" class="absolute bottom-0 left-0 h-1 bg-emerald-500 toast-progress-bar"></div>
        </div>
        `
      ].join('\n');
    }
  }
};

// Bootstrap when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  HDC.App.init();
});
