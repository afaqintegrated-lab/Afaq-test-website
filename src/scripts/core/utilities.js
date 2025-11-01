// ==================== SHARED UTILITY FUNCTIONS ====================

// ==================== Header Scroll Effect ====================
function handleHeaderScroll() {
    const header = document.getElementById('header');
    const logo = header?.querySelector('.logo-img');

    if (!header || !logo) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                    logo.classList.add('logo-scrolled');
                } else {
                    header.classList.remove('scrolled');
                    logo.classList.remove('logo-scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ==================== Mobile Menu ====================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuBtn || !mobileMenu) return;

    // Remove existing listeners
    const newBtn = mobileMenuBtn.cloneNode(true);
    mobileMenuBtn.parentNode.replaceChild(newBtn, mobileMenuBtn);

    newBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// ==================== Cart Counter ====================
function updateCartCounter() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;

    const cart = JSON.parse(localStorage.getItem('afaq-cart') || '{}');
    const itemCount = Object.values(cart).reduce((total, count) => total + count, 0);
    badge.textContent = itemCount;
}

// Listen for cart updates
window.addEventListener('cartUpdated', updateCartCounter);
