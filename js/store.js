// Store page initialization
if (window.location.pathname.includes('store.html')) {
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

        // Render store content
        renderStore();
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

// Render all categories and products
function renderStore() {
    const categoriesContainer = document.getElementById('categories-container');
    if (!categoriesContainer) {
        console.error('Categories container not found!');
        return;
    }

    let storeHTML = '';

    categories.forEach((category, index) => {
        const categoryProducts = getProductsByCategory(category.slug);
        const displayProducts = categoryProducts.slice(0, 3); // Only show first 3 products

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
                    <a href="category-${category.slug}.html" class="bg-white border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                        اعرض المزيد
                        <i class="fas fa-arrow-left"></i>
                    </a>
                </div>

                <!-- Products Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${displayProducts.map(product => renderProductCard(product)).join('')}
                </div>

                <!-- Show count of remaining products -->
                ${categoryProducts.length > 3 ? `
                    <div class="mt-6 text-center">
                        <p class="text-gray-600">
                            و <span class="font-bold text-purple-600">${categoryProducts.length - 3}</span> منتجات أخرى في هذه الفئة
                        </p>
                    </div>
                ` : ''}
            </div>
        `;
    });

    categoriesContainer.innerHTML = storeHTML;

    // Attach event listeners to all add-to-cart buttons
    attachCartListeners();
}

// Render a single product card
function renderProductCard(product) {
    const popularBadge = product.isPopular
        ? '<div class="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">الأكثر طلباً</div>'
        : '';

    // Show only first 3 features
    const displayFeatures = product.features.slice(0, 3);
    const hasMoreFeatures = product.features.length > 3;

    return `
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
            ${popularBadge}

            <!-- Product Image -->
            <div class="relative h-64 overflow-hidden">
                <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <!-- Product Info -->
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <span class="text-sm text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">
                        ${product.category}
                    </span>
                    <div class="text-2xl font-bold text-gray-800">
                        ${product.price.toLocaleString()} <span class="text-lg text-purple-600">${product.currency}</span>
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
                        href="product-${product.id}.html"
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
