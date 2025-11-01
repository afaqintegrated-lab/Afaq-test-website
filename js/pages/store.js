// Store page initialization
if (window.location.pathname.includes('src/pages/main/store.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        // Inject reusable components
        injectComponents('store');

        // Initialize header scroll functionality
        handleHeaderScroll();

        // Initialize mobile menu
        initMobileMenu();

        // Update cart counter
        updateCartCounter();

        // Update cart count in summary
        updateCartCount();

        // Listen for cart updates
        window.addEventListener('cartUpdated', updateCartCount);

        // Initialize filter buttons
        initFilterButtons();

        // Render store content
        renderStore();
    });
}

// Current active filter
let activeFilter = 'all';

// Initialize filter buttons
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.category-filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get category
            const category = this.getAttribute('data-category');
            activeFilter = category;

            // Re-render store with filter
            renderStore();
        });
    });
}

// Update cart count in the summary section
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (!cartCountElement) return;

    const cart = JSON.parse(localStorage.getItem('afaq-cart') || '{}');
    const itemCount = Object.values(cart).reduce((total, count) => total + count, 0);
    cartCountElement.textContent = itemCount;
}

// Sectors data for Business Systems
const sectors = [
    {
        id: "healthcare",
        name: "القطاع الصحي",
        slug: "healthcare",
        description: "حلول تقنية متطورة للمؤسسات الصحية من المستشفيات إلى العيادات",
        icon: "fa-heartbeat",
        color: "from-red-600 to-red-400",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        systems: [
            "نظام إدارة المستشفيات (HIMS)",
            "نظام إدارة العيادات",
            "نظام إدارة الصيدليات",
            "أنظمة إدارة الأشعة"
        ]
    },
    {
        id: "education",
        name: "القطاع التعليمي",
        slug: "education",
        description: "حلول تكنولوجية متطورة للمؤسسات التعليمية والجامعات",
        icon: "fa-graduation-cap",
        color: "from-green-600 to-green-400",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
        systems: [
            "نظام إدارة المدارس",
            "منصة التعليم الإلكتروني",
            "نظام إدارة الجامعات",
            "نظام إدارة المكتبات"
        ]
    },
    {
        id: "finance",
        name: "القطاع المالي",
        slug: "finance",
        description: "حلول مصرفية ومالية متكاملة مع أعلى معايير الأمان",
        icon: "fa-dollar-sign",
        color: "from-emerald-600 to-emerald-400",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        systems: [
            "نظام الخدمات المصرفية الأساسية",
            "بوابة الدفع الإلكتروني",
            "إدارة المخاطر والامتثال",
            "إدارة الثروات والاستثمار"
        ]
    },
    {
        id: "government",
        name: "القطاع الحكومي",
        slug: "government",
        description: "منصات حكومة إلكترونية متكاملة وحلول المدن الذكية",
        icon: "fa-landmark",
        color: "from-purple-600 to-purple-400",
        image: "https://images.unsplash.com/photo-1554224311-beee460c201f?w=800&h=600&fit=crop",
        systems: [
            "منصة الحكومة الإلكترونية",
            "إدارة الوثائق الرقمية",
            "المدن الذكية",
            "تحليل البيانات الحكومية"
        ]
    },
    {
        id: "industrial",
        name: "القطاع الصناعي",
        slug: "industrial",
        description: "حلول صناعية متكاملة لإدارة التصنيع وسلسلة التوريد",
        icon: "fa-industry",
        color: "from-slate-600 to-slate-400",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        systems: [
            "نظام إدارة التصنيع",
            "إدارة سلسلة التوريد",
            "إنترنت الأشياء الصناعي",
            "إدارة الجودة والمطابقة"
        ]
    },
    {
        id: "telecommunications",
        name: "قطاع الاتصالات",
        slug: "telecommunications",
        description: "منصات شاملة لشركات الاتصالات وشبكات الجيل الخامس",
        icon: "fa-broadcast-tower",
        color: "from-cyan-600 to-cyan-400",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        systems: [
            "شبكات الجيل الخامس 5G",
            "أنظمة إدارة الشبكات",
            "منصات إنترنت الأشياء IoT",
            "تحليلات البيانات الضخمة"
        ]
    },
    {
        id: "business",
        name: "الأعمال التجارية",
        slug: "business",
        description: "أنظمة ERP و CRM المتكاملة لإدارة الأعمال",
        icon: "fa-briefcase",
        color: "from-orange-600 to-orange-400",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        systems: [
            "نظام تخطيط موارد المؤسسة ERP",
            "نظام إدارة علاقات العملاء CRM",
            "نظام إدارة الموارد البشرية",
            "نظام المحاسبة والمالية"
        ]
    },
    {
        id: "security",
        name: "القطاع الأمني",
        slug: "security",
        description: "حلول الأمن السيبراني المتقدمة وحماية البيانات",
        icon: "fa-shield-alt",
        color: "from-red-700 to-red-500",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
        systems: [
            "الأمن السيبراني المتقدم",
            "إدارة الهويات والصلاحيات",
            "حماية البيانات والتشفير",
            "مراكز العمليات الأمنية SOC"
        ]
    }
];

// Render sector card
function renderSectorCard(sector) {
    return `
        <a href="${sector.slug}.html" class="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <!-- Sector Image -->
            <div class="relative h-48 overflow-hidden">
                <img src="${sector.image}" alt="${sector.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <i class="fas ${sector.icon} text-white text-5xl"></i>
                </div>
            </div>

            <!-- Sector Info -->
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    ${sector.name}
                </h3>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                    ${sector.description}
                </p>

                <!-- Systems List -->
                <div class="mb-4">
                    <h4 class="text-sm font-semibold text-gray-700 mb-2">الأنظمة المتوفرة:</h4>
                    <ul class="text-xs text-gray-600 space-y-1">
                        ${sector.systems.map(system => `
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500 text-xs"></i>
                                ${system}
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span class="text-purple-600 font-semibold text-sm">استكشف الحلول</span>
                    <i class="fas fa-arrow-left text-purple-600 group-hover:translate-x-[-4px] transition-transform"></i>
                </div>
            </div>
        </a>
    `;
}

// Render all categories and products
function renderStore() {
    const categoriesContainer = document.getElementById('categories-container');
    if (!categoriesContainer) {
        console.error('Categories container not found!');
        return;
    }

    let storeHTML = '';

    // Filter categories based on activeFilter
    const categoriesToShow = activeFilter === 'all'
        ? categories
        : categories.filter(cat => cat.slug === activeFilter);

    categoriesToShow.forEach((category, index) => {
        // Special handling for Business Systems - show sectors instead of products
        if (category.slug === 'business-systems') {
            storeHTML += `
                <div class="mb-16">
                    <!-- Category Header -->
                    <div class="flex items-center justify-between mb-8 pb-4 border-b-2 border-purple-200">
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                                <i class="fas ${category.icon}"></i>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-800">${category.name}</h3>
                                <p class="text-gray-600">اختر القطاع المناسب لاحتياجاتك</p>
                            </div>
                        </div>
                    </div>

                    <!-- Sectors Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        ${sectors.map(sector => renderSectorCard(sector)).join('')}
                    </div>
                </div>
            `;
        } else {
            // Regular product display for other categories
            const categoryProducts = getProductsByCategory(category.slug);
            // Show all products if filtering by specific category, otherwise show 3
            const displayProducts = activeFilter === 'all'
                ? categoryProducts.slice(0, 3)
                : categoryProducts;

            storeHTML += `
                <div class="mb-16">
                    <!-- Category Header -->
                    <div class="flex items-center justify-between mb-8 pb-4 border-b-2 border-purple-200">
                        <div class="flex items-center gap-4">
                            <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                                <i class="fas ${category.icon}"></i>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-800">${category.name}</h3>
                                <p class="text-gray-600">${category.description}</p>
                            </div>
                        </div>
                        ${activeFilter === 'all' ? `
                            <a href="category-${category.slug}.html" class="bg-white border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                                اعرض المزيد
                                <i class="fas fa-arrow-left"></i>
                            </a>
                        ` : ''}
                    </div>

                    <!-- Products Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${displayProducts.map(product => renderProductCard(product)).join('')}
                    </div>

                    <!-- Show count of remaining products (only when showing all categories) -->
                    ${activeFilter === 'all' && categoryProducts.length > 3 ? `
                        <div class="mt-6 text-center">
                            <p class="text-gray-600">
                                و <span class="font-bold text-purple-600">${categoryProducts.length - 3}</span> منتجات أخرى في هذه الفئة
                            </p>
                        </div>
                    ` : ''}
                </div>
            `;
        }
    });

    categoriesContainer.innerHTML = storeHTML;

    // Attach event listeners to all add-to-cart buttons (only for product cards)
    attachCartListeners();

    // Initialize product sliders if the function exists
    if (typeof initializeProductSliders !== 'undefined') {
        initializeProductSliders();
    }
}

// Render a single product card
function renderProductCard(product) {
    const popularBadge = product.isPopular
        ? '<div class="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">الأكثر طلباً</div>'
        : '';

    // Show only first 3 features
    const displayFeatures = product.features.slice(0, 3);
    const hasMoreFeatures = product.features.length > 3;

    // Handle price display - if price is null, show "حسب الطلب"
    const priceDisplay = product.price !== null
        ? `${product.price.toLocaleString()} <span class="text-lg text-purple-600">${product.currency}</span>`
        : `<span class="text-lg text-purple-600">${product.currency}</span>`;

    return `
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
            ${popularBadge}

            <!-- Product Image / Slider -->
            <div class="relative h-64 overflow-hidden">
                ${typeof createImageSlider !== 'undefined' && product.images && product.images.length > 1
                    ? createImageSlider(product.images, product.id)
                    : `<img src="${product.images ? product.images[0] : product.image}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">`
                }
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            <!-- Product Info -->
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-sm text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">
                        ${product.category}
                    </span>
                    <div class="text-2xl font-bold text-gray-800">
                        ${priceDisplay}
                    </div>
                </div>

                <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    ${product.name}
                </h3>

                <p class="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    ${product.description}
                </p>

                <!-- Key Features -->
                <div class="mb-6">
                    <h4 class="text-sm font-semibold text-gray-700 mb-2">الميزات الرئيسية:</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                        ${displayFeatures.map(feature => `
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500 text-xs"></i>
                                ${feature}
                            </li>
                        `).join('')}
                        ${hasMoreFeatures ? '<li class="text-purple-600 font-semibold">وميزات أخرى كثيرة...</li>' : ''}
                    </ul>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-3">
                    <button
                        class="add-to-cart-btn flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        data-product-id="${product.id}"
                    >
                        <i class="fas fa-cart-plus"></i>
                        إضافة للسلة
                    </button>
                    <a
                        href="product-detail.html?id=${product.id}"
                        class="bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                    >
                        <i class="fas fa-info-circle"></i>
                        التفاصيل
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Attach event listeners to add-to-cart buttons
function attachCartListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click from triggering
            const productId = this.getAttribute('data-product-id');
            addToCart(productId);
        });
    });
}

// Add product to cart
function addToCart(productId) {
    // Get current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('afaq-cart') || '{}');

    // Increment product count
    if (cart[productId]) {
        cart[productId]++;
    } else {
        cart[productId] = 1;
    }

    // Save updated cart
    localStorage.setItem('afaq-cart', JSON.stringify(cart));

    // Update cart counter
    updateCartCounter();

    // Dispatch cart update event
    window.dispatchEvent(new Event('cartUpdated'));

    // Show toast notification
    showToast('تم إضافة المنتج إلى السلة بنجاح!');
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    if (!toast || !toastMessage) {
        console.error('Toast elements not found!');
        return;
    }

    // Update message
    toastMessage.textContent = message;

    // Show toast
    toast.classList.remove('hidden');

    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

