// ==================== HOME PAGE FUNCTIONALITY ====================
// All data is loaded from config.js

// ==================== Typewriter Effect ====================
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typewriterSpeed = 100;

function typewriter() {
    const textElement = document.getElementById('typewriter-text');
    const cursorElement = document.getElementById('typewriter-cursor');

    if (!textElement || !cursorElement) return;

    const texts = CONFIG.homePage.hero.typewriterTexts;
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
        // Typing
        if (currentCharIndex < currentText.length) {
            textElement.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typewriterSpeed = 100;
        } else {
            // Finished typing, wait then start deleting
            typewriterSpeed = 2000;
            isDeleting = true;
        }
    } else {
        // Deleting
        if (currentCharIndex > 0) {
            textElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typewriterSpeed = 50;
        } else {
            // Finished deleting, move to next text
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            typewriterSpeed = 500;
        }
    }

    setTimeout(typewriter, typewriterSpeed);
}

// Cursor Blink
function blinkCursor() {
    const cursorElement = document.getElementById('typewriter-cursor');
    if (!cursorElement) return;

    setInterval(() => {
        cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0';
    }, 500);
}

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

// ==================== Populate Sectors ====================
function populateSectors() {
    const sectorsGrid = document.getElementById('sectors-grid');
    if (!sectorsGrid) return;

    sectorsGrid.innerHTML = CONFIG.homePage.sectors.map(sector => `
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br ${sector.gradient} rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="${sector.icon} text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">${sector.title}</h3>
            <p class="text-gray-600 leading-relaxed mb-4 text-sm">
                ${sector.description}
            </p>
            <a href="${sector.href}" class="block text-center bg-gradient-to-r ${sector.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                اكتشف المزيد
            </a>
        </div>
    `).join('');
}

// ==================== Populate Solutions ====================
function populateSolutions() {
    const solutionsGrid = document.getElementById('solutions-grid');
    if (!solutionsGrid) return;

    solutionsGrid.innerHTML = CONFIG.homePage.solutions.map(solution => `
        <div class="bg-gradient-to-br ${solution.bgGradient} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br ${solution.iconGradient} rounded-lg flex items-center justify-center mb-4">
                <i class="${solution.icon} text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">${solution.title}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">${solution.description}</p>
        </div>
    `).join('');
}

// ==================== Populate Clients Carousel ====================
function populateClientsCarousel() {
    const carousel = document.getElementById('clients-carousel');
    if (!carousel) return;

    // Render logos 3 times for seamless infinite scroll
    const clientsHTML = CONFIG.homePage.clients.map(client => `
        <div class="clients-carousel-item">
            <img src="${client.logo}" alt="${client.name}">
        </div>
    `).join('');

    carousel.innerHTML = clientsHTML + clientsHTML + clientsHTML;
}

// ==================== Wireframe Canvas Animation ====================
function initWireframeCanvas() {
    const canvas = document.getElementById('cta-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes = [];
    const nodeCount = 25;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw nodes
        nodes.forEach((node, i) => {
            // Update position
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

            // Draw node
            ctx.beginPath();
            ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.fill();

            // Draw connections
            nodes.forEach((otherNode, j) => {
                if (i !== j) {
                    const dx = node.x - otherNode.x;
                    const dy = node.y - otherNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
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

// ==================== Initialize Everything ====================
document.addEventListener('DOMContentLoaded', () => {
    // Inject header, topbar, and footer components
    injectComponents('home');

    // Initialize typewriter
    if (document.getElementById('typewriter-text')) {
        typewriter();
        blinkCursor();
    }

    // Initialize header scroll effect
    handleHeaderScroll();

    // Initialize mobile menu
    initMobileMenu();

    // Populate content
    populateSectors();
    populateSolutions();
    populateClientsCarousel();

    // Initialize wireframe canvas
    initWireframeCanvas();

    // Update cart counter
    updateCartCounter();
});
