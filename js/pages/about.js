// ==================== ABOUT PAGE FUNCTIONALITY ====================

// ==================== Initialize Everything ====================
document.addEventListener('DOMContentLoaded', () => {
    // Inject header, topbar, CTA, and footer components
    injectComponents('about');

    // Initialize header scroll effect
    handleHeaderScroll();

    // Initialize mobile menu
    initMobileMenu();

    // Update cart counter
    updateCartCounter();
});
