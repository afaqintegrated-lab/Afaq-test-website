// Category page initialization
document.addEventListener('DOMContentLoaded', () => {
    // Inject reusable components (includes CTA)
    const pageName = getCategoryPageName();
    injectComponents(pageName);

    // Initialize header scroll functionality
    handleHeaderScroll();

    // Initialize mobile menu
    initMobileMenu();

    // Update cart counter
    updateCartCounter();

    // Render category products
    renderCategoryProducts();

    // Initialize CTA wireframe animation
    if (typeof initWireframeAnimation === 'function') {
        initWireframeAnimation();
    }
});

// Get category page name from URL
function getCategoryPageName() {
    const path = window.location.pathname;
    if (path.includes('src/pages/categories/category-hosting.html')) return 'hosting';
    if (path.includes('src/pages/categories/category-smart-home.html')) return 'smart-home';
    if (path.includes('src/pages/categories/category-business-systems.html')) return 'business-systems';
    return 'store';
}

// Get category slug from URL
function getCategorySlug() {
    const path = window.location.pathname;
    if (path.includes('src/pages/categories/category-hosting.html')) return 'hosting';
    if (path.includes('src/pages/categories/category-smart-home.html')) return 'smart-home';
    if (path.includes('src/pages/categories/category-business-systems.html')) return 'business-systems';
    return null;
}

// Render all products for this category
function renderCategoryProducts() {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) {
        console.error('Products container not found!');
        return;
    }

    const categorySlug = getCategorySlug();
    if (!categorySlug) {
        console.error('Could not determine category from URL');
        return;
    }

    const categoryProducts = getProductsByCategory(categorySlug);

    // Filter products to only show those with valid images
    const productsWithImages = categoryProducts.filter(product => {
        return product.image && 
               product.image.trim() !== '' && 
               !product.image.includes('unsplash') &&
               !product.image.includes('placehold');
    });

    let productsHTML = '';
    if (productsWithImages.length === 0) {
        productsHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-box-open text-6xl text-gray-300 mb-4"></i>
                <p class="text-xl text-gray-500">لا توجد منتجات متاحة في هذه الفئة حالياً</p>
            </div>
        `;
    } else {
        productsWithImages.forEach(product => {
            productsHTML += renderProductCard(product);
        });
    }

    productsContainer.innerHTML = productsHTML;

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

    // Handle price display - if price is null, show "حسب الطلب"
    const priceDisplay = product.price !== null
        ? `${product.price.toLocaleString()} <span class="text-lg text-purple-600">${product.currency}</span>`
        : `<span class="text-lg text-purple-600">${product.currency}</span>`;

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
                        href="../products/product-detail.html?id=${product.id}"
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

