// Industrial page initialization
if (window.location.pathname.includes('industrial.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        // Inject reusable components
        injectComponents('industrial');

        // Initialize header scroll functionality
        handleHeaderScroll();

        // Initialize mobile menu
        initMobileMenu();

        // Update cart counter
        updateCartCounter();
    });
}
