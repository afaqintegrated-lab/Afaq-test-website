// ==================== REUSABLE COMPONENTS ====================
// All components are generated dynamically from CONFIG

// ==================== TOP BAR COMPONENT ====================
function generateTopBar() {
    return `
        <div id="topbar" class="fixed top-0 left-0 right-0 z-[1001] bg-gradient-to-r from-purple-900 to-pink-600 text-white py-1.5">
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between text-sm">
                    <!-- Contact Info - Right Side -->
                    <div class="flex items-center gap-4">
                        <a href="mailto:${CONFIG.contact.email}" class="flex items-center gap-2 hover:text-purple-200 transition-colors">
                            <i class="fas fa-envelope text-sm"></i>
                            <span class="hidden md:inline">${CONFIG.contact.email}</span>
                        </a>
                        <a href="tel:${CONFIG.contact.phone}" class="flex items-center gap-2 hover:text-purple-200 transition-colors">
                            <i class="fas fa-phone text-sm"></i>
                            <span class="hidden md:inline">966573673270+
</span>
                        </a>
                    </div>

                    <!-- Social Media - Left Side -->
                    <div class="flex items-center gap-2">
                        <a href="${CONFIG.social.instagram}" class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-instagram text-sm"></i>
                        </a>
                        <a href="${CONFIG.social.youtube}" class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-youtube text-sm"></i>
                        </a>
                        <a href="${CONFIG.social.whatsapp}" class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-whatsapp text-sm"></i>
                        </a>
                        <a href="${CONFIG.social.linkedin}" class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin-in text-sm"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==================== HEADER COMPONENT ====================
function generateHeader(activePage = 'home') {
    const mainNavLinks = CONFIG.navigation.main.map(item => {
        const isActive = item.id === activePage ? 'active' : '';
        return `<a href="${item.href}" class="nav-link text-gray-700 hover:text-purple-600 font-medium ${isActive}">${item.label}</a>`;
    }).join('');

    const sectorsDropdown = CONFIG.navigation.sectors.map(sector =>
        `<a href="${sector.href}" class="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">${sector.label}</a>`
    ).join('');

    const ctaButtons = CONFIG.navigation.cta.map(btn => {
        if (btn.type === 'gradient') {
            return `<a href="${btn.href}" class="${btn.classes}" style="${btn.style}">${btn.label}</a>`;
        }
        return `<a href="${btn.href}" class="${btn.classes}">${btn.label}</a>`;
    }).join('');

    const mobileNavLinks = CONFIG.navigation.main.map(item =>
        `<a href="${item.href}" class="text-gray-700 hover:text-purple-600 font-medium px-2">${item.label}</a>`
    ).join('');

    const mobileSectors = CONFIG.navigation.sectors.map(sector =>
        `<a href="${sector.href}" class="block text-gray-600 hover:text-purple-600 font-medium px-2 py-1">${sector.label}</a>`
    ).join('');

    return `
        <header id="header" class="sticky-header bg-white">
            <div class="container mx-auto px-4">
                <nav class="flex items-center justify-between">
                    <!-- Logo -->
                    <a href="index.html" class="logo-container">
                        <div class="flex items-center">
                            <img src="${CONFIG.logos.main}" alt="${CONFIG.company.name}" class="logo-img">
                        </div>
                    </a>

                    <!-- Main Navigation -->
                    <div class="hidden lg:flex items-center space-x-8 space-x-reverse">
                        ${mainNavLinks}

                        <!-- Sectors Dropdown -->
                        <div class="relative group px-4">
                            <a href="#" class="nav-link text-gray-700 hover:text-purple-600 font-medium flex items-center">
                                القطاعات
                                <i class="fas fa-chevron-down mr-2 text-sm"></i>
                            </a>
                            <div class="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                                ${sectorsDropdown}
                            </div>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="hidden lg:flex items-center gap-4">
                        <a href="src/pages/ecommerce/cart.html" id="cart-counter" class="relative">
                            <i class="fas fa-shopping-cart text-2xl text-purple-600"></i>
                            <span id="cart-badge" class="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                        </a>
                        ${ctaButtons}
                    </div>

                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="lg:hidden text-gray-700 hover:text-purple-600">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </nav>

                <!-- Mobile Navigation -->
                <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-200 py-4">
                    <div class="flex flex-col space-y-3">
                        ${mobileNavLinks}

                        <!-- Mobile Sectors -->
                        <div class="pr-4">
                            <p class="text-sm text-gray-500 font-semibold mb-2">القطاعات:</p>
                            ${mobileSectors}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
}

// ==================== CTA COMPONENT ====================
function generateCTA() {
    return `
        <section class="relative" style="background: linear-gradient(to bottom right, #582a6e, #e3237b)">
            <!-- Wireframe Animation -->
            <div id="cta-wireframe" class="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"></div>

            <!-- CTA Content -->
            <div class="container mx-auto px-4 py-20 text-center text-white cta-content" style="position: relative; z-index: 10;">
                <div class="max-w-3xl mx-auto">
                    <h2 class="text-4xl md:text-5xl font-bold mb-6">
                        ابدأ رحلتك التقنية معنا اليوم
                    </h2>
                    <p class="text-xl mb-8 opacity-90 leading-relaxed">
                        احصل على استشارة مجانية واكتشف كيف يمكن لحلولنا التقنية أن تحول أعمالك
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                        <a href="src/pages/main/contact.html" class="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            اتصل بنا الآن
                        </a>
                        <a href="src/pages/main/contact.html" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                            احجز استشارة مجانية
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// ==================== WIREFRAME ANIMATION ====================
function initWireframeBackground() {
    const container = document.getElementById('cta-wireframe');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    const nodes = [];
    const connections = [];
    const nodeCount = 25;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'cta-wireframe-node floating-node';
        node.style.position = 'absolute';
        node.style.width = '6px';
        node.style.height = '6px';
        node.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        node.style.borderRadius = '50%';
        node.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
        node.style.transition = 'all 0.5s ease';

        // Add floating animation with different delays
        const animationDelay = (i % 4) * -2; // -0s, -2s, -4s, -6s
        node.style.animation = `floatNode 8s ease-in-out infinite ${animationDelay}s`;

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        node.style.left = `${x}%`;
        node.style.top = `${y}%`;

        container.appendChild(node);

        const nodeObj = {
            element: node,
            x: x,
            y: y,
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: (Math.random() - 0.5) * 0.2
        };

        nodes.push(nodeObj);
    }

    // Create connections between nearby nodes
    nodes.forEach((node, index) => {
        nodes.forEach((otherNode, otherIndex) => {
            if (index >= otherIndex) return; // Avoid duplicate connections

            const distance = Math.sqrt(
                Math.pow(node.x - otherNode.x, 2) +
                Math.pow(node.y - otherNode.y, 2)
            );

            // Connect nodes that are close enough
            if (distance < 40) {
                const connection = document.createElement('div');
                connection.className = 'cta-wireframe-connection';
                connection.style.position = 'absolute';
                connection.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                connection.style.transformOrigin = '0 0';
                connection.style.transition = 'all 0.5s ease';

                // Calculate connection properties
                const length = distance;
                const angle = Math.atan2(otherNode.y - node.y, otherNode.x - node.x) * 180 / Math.PI;

                connection.style.width = `${length}%`;
                connection.style.height = '1px';
                connection.style.left = `${node.x}%`;
                connection.style.top = `${node.y}%`;
                connection.style.transform = `rotate(${angle}deg)`;

                container.appendChild(connection);
                connections.push({
                    element: connection,
                    node1: node,
                    node2: otherNode
                });
            }
        });
    });

    // Animation function
    let animationFrameId;
    function animateWireframe() {
        nodes.forEach(node => {
            // Update position
            node.x += node.speedX;
            node.y += node.speedY;

            // Bounce off edges
            if (node.x <= 0 || node.x >= 100) node.speedX *= -1;
            if (node.y <= 0 || node.y >= 100) node.speedY *= -1;

            // Apply new position
            node.element.style.left = `${node.x}%`;
            node.element.style.top = `${node.y}%`;
        });

        // Update connections
        connections.forEach(connection => {
            const node1 = connection.node1;
            const node2 = connection.node2;

            const distance = Math.sqrt(
                Math.pow(node1.x - node2.x, 2) +
                Math.pow(node1.y - node2.y, 2)
            );

            if (distance < 40) {
                const length = distance;
                const angle = Math.atan2(node2.y - node1.y, node2.x - node1.x) * 180 / Math.PI;

                connection.element.style.width = `${length}%`;
                connection.element.style.left = `${node1.x}%`;
                connection.element.style.top = `${node1.y}%`;
                connection.element.style.transform = `rotate(${angle}deg)`;
                connection.element.style.opacity = '0.3';
            } else {
                connection.element.style.opacity = '0';
            }
        });

        animationFrameId = requestAnimationFrame(animateWireframe);
    }

    // Start animation
    animateWireframe();
}

// ==================== FOOTER COMPONENT ====================
function generateFooter() {
    const quickLinks = CONFIG.footer.quickLinks.map(link =>
        `<li><a href="${link.href}" class="text-gray-300 hover:text-white transition-colors">${link.label}</a></li>`
    ).join('');

    const serviceLinks = CONFIG.footer.services.map(service =>
        `<li><a href="${service.href}" class="text-gray-300 hover:text-white transition-colors">${service.label}</a></li>`
    ).join('');

    return `
        <footer class="bg-gray-900 text-white">
            <div class="container mx-auto px-4 py-16">
                <div class="grid md:grid-cols-4 gap-8">
                    <!-- Company Info -->
                    <div>
                        <div class="mb-6">
                            <img src="${CONFIG.logos.light}" alt="${CONFIG.company.name}" class="h-auto w-40 mb-2">
                        </div>
                        <p class="text-gray-300 leading-relaxed mb-6">
                            ${CONFIG.company.tagline}
                        </p>
                        <div class="flex gap-3">
                            <a href="${CONFIG.social.instagram}" target="_blank" class="social-icon w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="${CONFIG.social.youtube}" target="_blank" class="social-icon w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="${CONFIG.social.whatsapp}" target="_blank" class="social-icon w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                            <a href="${CONFIG.social.linkedin}" target="_blank" class="social-icon w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-lg font-bold mb-6">روابط سريعة</h4>
                        <ul class="space-y-4">
                            ${quickLinks}
                        </ul>
                    </div>

                    <!-- Services -->
                    <div>
                        <h4 class="text-lg font-bold mb-6">خدماتنا الرئيسية</h4>
                        <ul class="space-y-4">
                            ${serviceLinks}
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h4 class="text-lg font-bold mb-6">معلومات الاتصال</h4>
                        <div class="space-y-4">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-phone text-white"></i>
                                </div>
                                <span class="text-gray-300">${CONFIG.contact.phoneDisplay}</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-envelope text-white"></i>
                                </div>
                                <span class="text-gray-300">${CONFIG.contact.email}</span>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-map-marker-alt text-white"></i>
                                </div>
                                <span class="text-gray-300">${CONFIG.contact.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                    <p>${CONFIG.company.copyright}</p>
                </div>
            </div>
        </footer>
    `;
}

// ==================== INJECT COMPONENTS ====================
function injectComponents(activePage = 'home') {
    // Inject Top Bar
    const topbarContainer = document.getElementById('topbar-container');
    if (topbarContainer) {
        topbarContainer.innerHTML = generateTopBar();
    }

    // Inject Header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = generateHeader(activePage);
    }

    // Inject CTA Section
    const ctaContainer = document.getElementById('cta-container');
    if (ctaContainer) {
        ctaContainer.innerHTML = generateCTA();
        // Initialize wireframe animation after CTA is injected
        setTimeout(() => {
            initWireframeBackground();
        }, 100);
    }

    // Inject Footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = generateFooter();
    }

    // Re-initialize mobile menu after injecting header
    initMobileMenu();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateTopBar,
        generateHeader,
        generateFooter,
        injectComponents
    };
}

