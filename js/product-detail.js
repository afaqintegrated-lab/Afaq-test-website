// Product detail page initialization
document.addEventListener('DOMContentLoaded', () => {
    // Inject reusable components (includes CTA)
    injectComponents('product-detail');

    // Initialize header scroll functionality
    handleHeaderScroll();

    // Initialize mobile menu
    initMobileMenu();

    // Update cart counter
    updateCartCounter();

    // Render product details
    renderProductDetail();

    // Initialize CTA wireframe animation
    if (typeof initWireframeAnimation === 'function') {
        initWireframeAnimation();
    }
});

// Get product ID from URL
function getProductIdFromURL() {
    const path = window.location.pathname;
    const match = path.match(/product-(.+)\.html/);
    return match ? match[1] : null;
}

// Find product by ID
function getProductById(productId) {
    return products.find(product => product.id === productId);
}

// Render product detail page
function renderProductDetail() {
    const productId = getProductIdFromURL();
    if (!productId) {
        console.error('Could not determine product ID from URL');
        return;
    }

    const product = getProductById(productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Update page title
    document.getElementById('page-title').textContent = `${product.name} - آفاق المتكاملة لتقنية المعلومات`;

    // Render breadcrumb
    renderBreadcrumb(product);

    // Render product detail
    renderProductDetailContent(product);

    // Render related products
    renderRelatedProducts(product);

    // Attach event listeners
    attachProductDetailListeners();
}

// Render breadcrumb
function renderBreadcrumb(product) {
    const breadcrumbContainer = document.getElementById('breadcrumb');
    if (!breadcrumbContainer) return;

    breadcrumbContainer.innerHTML = `
        <a href="index.html" class="hover:text-purple-600 transition-colors">الرئيسية</a>
        <span class="mx-2">/</span>
        <a href="store.html" class="hover:text-purple-600 transition-colors">المتجر</a>
        <span class="mx-2">/</span>
        <a href="category-${product.categorySlug}.html" class="hover:text-purple-600 transition-colors">${product.category}</a>
        <span class="mx-2">/</span>
        <span class="text-gray-800 font-semibold">${product.name}</span>
    `;
}

// Render product detail content
function renderProductDetailContent(product) {
    const container = document.getElementById('product-detail-container');
    if (!container) return;

    const popularBadge = product.isPopular
        ? '<span class="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">الأكثر مبيعاً</span>'
        : '';

    container.innerHTML = `
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Product Image -->
                <div class="p-8 lg:p-12">
                    <div class="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                    </div>
                </div>

                <!-- Product Info -->
                <div class="p-8 lg:p-12 flex flex-col justify-center">
                    ${popularBadge}

                    <!-- Category Badge -->
                    <span class="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                        ${product.category}
                    </span>

                    <!-- Product Name -->
                    <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">${product.name}</h1>

                    <!-- Product Description -->
                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">${product.description}</p>

                    <!-- Features List -->
                    <div class="mb-8">
                        <h3 class="text-2xl font-bold text-gray-800 mb-4">المميزات الرئيسية</h3>
                        <ul class="space-y-3">
                            ${product.features.map(feature => `
                                <li class="flex items-start gap-3 text-lg text-gray-700">
                                    <i class="fas fa-check-circle text-green-600 text-xl mt-1 flex-shrink-0"></i>
                                    <span>${feature}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- Price -->
                    <div class="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                        <span class="text-sm text-gray-600 block mb-2">السعر يبدأ من</span>
                        <div class="flex items-baseline gap-2">
                            <span class="text-5xl font-bold text-purple-600">${product.price.toLocaleString()}</span>
                            <span class="text-2xl text-gray-600">${product.currency}</span>
                        </div>
                    </div>

                    <!-- Quantity and Add to Cart -->
                    <div class="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                        <div class="flex items-center gap-4">
                            <label for="quantity" class="text-lg font-semibold text-gray-700">الكمية:</label>
                            <input
                                type="number"
                                id="quantity"
                                min="1"
                                value="1"
                                class="w-20 px-4 py-3 border-2 border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:border-purple-600"
                            >
                        </div>
                        <button
                            id="add-to-cart-btn"
                            class="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                            data-product-id="${product.id}"
                        >
                            <i class="fas fa-cart-plus text-xl"></i>
                            <span>أضف إلى السلة</span>
                        </button>
                    </div>

                    <!-- Additional Actions -->
                    <div class="mt-6 flex gap-4">
                        <a href="contact.html" class="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold">
                            <i class="fas fa-headset"></i>
                            <span>تواصل معنا</span>
                        </a>
                        <button class="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-semibold">
                            <i class="fas fa-share-alt"></i>
                            <span>مشاركة</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render related products
function renderRelatedProducts(currentProduct) {
    const container = document.getElementById('related-products-container');
    if (!container) return;

    // Get products from same category, excluding current product
    const relatedProducts = products
        .filter(product => product.categorySlug === currentProduct.categorySlug && product.id !== currentProduct.id)
        .slice(0, 3); // Show max 3 related products

    let relatedHTML = '';
    relatedProducts.forEach(product => {
        relatedHTML += renderRelatedProductCard(product);
    });

    container.innerHTML = relatedHTML;

    // Attach event listeners to related product add-to-cart buttons
    attachRelatedProductListeners();
}

// Render a related product card
function renderRelatedProductCard(product) {
    return `
        <div class="bg-gray-50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <!-- Product Image -->
            <a href="product-${product.id}.html" class="block h-64 overflow-hidden bg-gray-100">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110">
            </a>

            <!-- Product Content -->
            <div class="p-6">
                <!-- Product Name -->
                <a href="product-${product.id}.html">
                    <h3 class="text-xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition-colors">${product.name}</h3>
                </a>

                <!-- Price -->
                <div class="mb-4">
                    <span class="text-2xl font-bold text-purple-600">${product.price.toLocaleString()}</span>
                    <span class="text-lg text-gray-600 mr-1">${product.currency}</span>
                </div>

                <!-- Add to Cart Button -->
                <button
                    class="related-add-to-cart-btn w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    data-product-id="${product.id}"
                >
                    <i class="fas fa-cart-plus"></i>
                    أضف للسلة
                </button>
            </div>
        </div>
    `;
}

// Attach event listeners for product detail page
function attachProductDetailListeners() {
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const quantity = parseInt(document.getElementById('quantity').value) || 1;
            addToCartWithQuantity(productId, quantity);
        });
    }
}

// Attach event listeners for related products
function attachRelatedProductListeners() {
    const addToCartButtons = document.querySelectorAll('.related-add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            addToCart(productId);
        });
    });
}

// Add product to cart with quantity
function addToCartWithQuantity(productId, quantity) {
    // Get current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('afaq-cart') || '{}');

    // Add quantity to cart
    if (cart[productId]) {
        cart[productId] += quantity;
    } else {
        cart[productId] = quantity;
    }

    // Save updated cart
    localStorage.setItem('afaq-cart', JSON.stringify(cart));

    // Update cart counter
    updateCartCounter();

    // Dispatch cart update event
    window.dispatchEvent(new Event('cartUpdated'));

    // Show toast notification
    showToast(`تم إضافة ${quantity} من المنتج إلى السلة بنجاح!`);
}

// Add single product to cart
function addToCart(productId) {
    addToCartWithQuantity(productId, 1);
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
