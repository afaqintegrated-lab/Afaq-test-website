// Government page initialization
if (window.location.pathname.includes('government.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        // Inject reusable components
        injectComponents('government');

        // Initialize header scroll functionality
        handleHeaderScroll();

        // Initialize mobile menu
        initMobileMenu();

        // Update cart counter
        updateCartCounter();
    });
}
