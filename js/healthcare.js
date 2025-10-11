// Healthcare page initialization
if (window.location.pathname.includes('healthcare.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        // Inject reusable components
        injectComponents('healthcare');

        // Initialize header scroll functionality
        handleHeaderScroll();

        // Initialize mobile menu
        initMobileMenu();

        // Update cart counter
        updateCartCounter();
    });
}
