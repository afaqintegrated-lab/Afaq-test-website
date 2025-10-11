// Cart page initialization
if (window.location.pathname.includes('cart.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        // Inject reusable components
        injectComponents('cart');

        // Initialize header scroll functionality
        handleHeaderScroll();

        // Initialize mobile menu
        initMobileMenu();

        // Update cart counter
        updateCartCounter();

        // Load and render cart
        loadCart();

        // Clear cart button listener
        const clearCartBtn = document.getElementById('clear-cart-btn');
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', clearCart);
        }
    });
}

// Cart items array
let cartItems = [];

// Load cart from localStorage
function loadCart() {
    const cartData = JSON.parse(localStorage.getItem('afaq-cart') || '{}');
    cartItems = [];

    Object.entries(cartData).forEach(([productId, quantity]) => {
        const product = getProductById(productId);
        if (product && quantity > 0) {
            cartItems.push({
                ...product,
                quantity: quantity
            });
        }
    });

    renderCart();
}

// Get product by ID
function getProductById(productId) {
    return products.find(product => product.id === productId);
}

// Render cart
function renderCart() {
    const loadingState = document.getElementById('loading-state');
    const emptyCart = document.getElementById('empty-cart');
    const cartContent = document.getElementById('cart-content');
    const cartSubtitle = document.getElementById('cart-subtitle');

    // Hide loading state
    if (loadingState) loadingState.classList.add('hidden');

    if (cartItems.length === 0) {
        // Show empty cart state
        if (emptyCart) emptyCart.classList.remove('hidden');
        if (cartContent) cartContent.classList.add('hidden');
        if (cartSubtitle) cartSubtitle.textContent = 'السلة فارغة';
    } else {
        // Show cart with items
        if (emptyCart) emptyCart.classList.add('hidden');
        if (cartContent) cartContent.classList.remove('hidden');

        const totalItems = getTotalItems();
        if (cartSubtitle) {
            cartSubtitle.textContent = `لديك ${totalItems} ${totalItems === 1 ? 'منتج' : 'منتجات'} في سلة المشتريات`;
        }

        renderCartItems();
        updateSummary();
    }
}

// Render cart items
function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    let itemsHTML = '';
    cartItems.forEach(item => {
        itemsHTML += renderCartItem(item);
    });

    container.innerHTML = itemsHTML;

    // Attach event listeners
    attachCartItemListeners();
}

// Render single cart item
function renderCartItem(item) {
    const itemTotal = item.price * item.quantity;

    return `
        <div class="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <!-- Product Image -->
            <div class="w-24 h-24 flex-shrink-0">
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="w-full h-full object-cover rounded-lg"
                />
            </div>

            <!-- Product Info -->
            <div class="flex-1 space-y-2">
                <h3 class="font-bold text-gray-800 text-lg">${item.name}</h3>
                <p class="text-gray-600 text-sm line-clamp-2">${item.description}</p>
                <div class="flex items-center gap-4">
                    <span class="text-purple-600 font-bold text-lg">
                        ${item.price.toLocaleString()} ${item.currency}
                    </span>
                    <span class="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">
                        ${item.category}
                    </span>
                </div>
            </div>

            <!-- Quantity Controls -->
            <div class="flex flex-col items-center gap-2">
                <div class="flex items-center gap-2 bg-white rounded-lg p-2">
                    <button
                        class="decrease-quantity w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        data-product-id="${item.id}"
                    >
                        <i class="fas fa-minus text-gray-600 text-sm"></i>
                    </button>
                    <span class="font-bold text-gray-800 w-8 text-center">${item.quantity}</span>
                    <button
                        class="increase-quantity w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        data-product-id="${item.id}"
                    >
                        <i class="fas fa-plus text-gray-600 text-sm"></i>
                    </button>
                </div>
                <button
                    class="remove-item text-red-500 hover:text-red-600 text-sm"
                    data-product-id="${item.id}"
                >
                    <i class="fas fa-trash"></i>
                </button>
            </div>

            <!-- Item Total -->
            <div class="text-left">
                <div class="text-lg font-bold text-gray-800">
                    ${itemTotal.toLocaleString()} ${item.currency}
                </div>
                <div class="text-sm text-gray-500">
                    ${item.quantity} × ${item.price.toLocaleString()}
                </div>
            </div>
        </div>
    `;
}

// Attach event listeners to cart items
function attachCartItemListeners() {
    // Decrease quantity buttons
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const item = cartItems.find(i => i.id === productId);
            if (item) {
                updateQuantity(productId, item.quantity - 1);
            }
        });
    });

    // Increase quantity buttons
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const item = cartItems.find(i => i.id === productId);
            if (item) {
                updateQuantity(productId, item.quantity + 1);
            }
        });
    });

    // Remove item buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            removeFromCart(productId);
        });
    });
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    const cartData = JSON.parse(localStorage.getItem('afaq-cart') || '{}');
    cartData[productId] = newQuantity;
    localStorage.setItem('afaq-cart', JSON.stringify(cartData));

    // Dispatch cart update event
    window.dispatchEvent(new Event('cartUpdated'));

    // Reload cart
    loadCart();

    // Update cart counter
    updateCartCounter();
}

// Remove item from cart
function removeFromCart(productId) {
    const cartData = JSON.parse(localStorage.getItem('afaq-cart') || '{}');
    delete cartData[productId];
    localStorage.setItem('afaq-cart', JSON.stringify(cartData));

    // Dispatch cart update event
    window.dispatchEvent(new Event('cartUpdated'));

    // Reload cart
    loadCart();

    // Update cart counter
    updateCartCounter();
}

// Clear entire cart
function clearCart() {
    if (confirm('هل أنت متأكد من إفراغ السلة؟')) {
        localStorage.removeItem('afaq-cart');
        cartItems = [];

        // Dispatch cart update event
        window.dispatchEvent(new Event('cartUpdated'));

        // Re-render cart
        renderCart();

        // Update cart counter
        updateCartCounter();
    }
}

// Get total price
function getTotalPrice() {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get total items count
function getTotalItems() {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
}

// Update order summary
function updateSummary() {
    const totalItems = getTotalItems();
    const totalPrice = getTotalPrice();

    const totalItemsCount = document.getElementById('total-items-count');
    const subtotalPrice = document.getElementById('subtotal-price');
    const totalPriceElement = document.getElementById('total-price');

    if (totalItemsCount) {
        totalItemsCount.textContent = `${totalItems} ${totalItems === 1 ? 'منتج' : 'منتجات'}`;
    }

    if (subtotalPrice) {
        subtotalPrice.textContent = `${totalPrice.toLocaleString()} ر.س`;
    }

    if (totalPriceElement) {
        totalPriceElement.textContent = `${totalPrice.toLocaleString()} ر.س`;
    }
}
