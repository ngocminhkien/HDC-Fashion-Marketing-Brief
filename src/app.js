/**
 * HDC Fashion — Application Bootstrap Orchestrator
 * Mounts components, views, modals, and initializes state & router
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
        `
        <!-- Toast Container -->
        <div id="toastNotification" class="fixed top-20 right-5 z-50 bg-gray-900 text-white text-xs px-4 py-3 rounded-lg shadow-xl hidden items-center gap-2 animate-fadeIn border border-gray-700">
          <i class="fa-solid fa-circle-check text-emerald-400"></i>
          <span id="toastMessage">Thông báo</span>
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
