// Checkout page initialization
if (window.location.pathname.includes('src/pages/ecommerce/checkout.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        // Inject reusable components
        injectComponents('checkout');

        // Initialize header scroll functionality
        handleHeaderScroll();

        // Initialize mobile menu
        initMobileMenu();

        // Update cart counter
        updateCartCounter();

        // Load cart and check if empty
        loadCheckoutData();

        // Form submission handler
        const orderForm = document.getElementById('order-form');
        if (orderForm) {
            orderForm.addEventListener('submit', handleOrderSubmit);
        }

        // Input change handlers for error clearing
        ['fullName', 'email', 'phone'].forEach(fieldId => {
            const input = document.getElementById(fieldId);
            if (input) {
                input.addEventListener('input', () => clearFieldError(fieldId));
            }
        });
    });
}

// Cart items
let cartItems = [];

// Load checkout data
function loadCheckoutData() {
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

    // Check if cart is empty
    if (cartItems.length === 0) {
        showEmptyCartState();
    } else {
        renderOrderSummary();
    }
}

// Get product by ID
function getProductById(productId) {
    return products.find(product => product.id === productId);
}

// Show empty cart state
function showEmptyCartState() {
    const emptyState = document.getElementById('empty-cart-state');
    const checkoutForm = document.getElementById('checkout-form');

    if (emptyState) emptyState.classList.remove('hidden');
    if (checkoutForm) checkoutForm.classList.add('hidden');
}

// Render order summary
function renderOrderSummary() {
    const orderItemsContainer = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    if (!orderItemsContainer) return;

    let itemsHTML = '';
    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        itemsHTML += `
            <div class="flex justify-between items-center py-3 border-b border-gray-100">
                <div class="flex items-center gap-3">
                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        loading="lazy"
                        class="w-12 h-12 object-cover rounded-lg"
                    />
                    <div>
                        <h4 class="font-semibold text-gray-800">${item.name}</h4>
                        <p class="text-sm text-gray-600">الكمية: ${item.quantity}</p>
                    </div>
                </div>
                <div class="text-left">
                    <div class="font-bold text-gray-800">
                        ${itemTotal.toLocaleString()} ر.س
                    </div>
                </div>
            </div>
        `;
    });

    orderItemsContainer.innerHTML = itemsHTML;

    // Update total
    const totalPrice = getTotalPrice();
    if (orderTotalElement) {
        orderTotalElement.textContent = `${totalPrice.toLocaleString()} ر.س`;
    }
}

// Get total price
function getTotalPrice() {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Validate form
function validateForm(formData) {
    const errors = {};

    // Validate full name
    if (!formData.fullName.trim()) {
        errors.fullName = 'الاسم الكامل مطلوب';
    }

    // Validate email
    if (!formData.email.trim()) {
        errors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'البريد الإلكتروني غير صحيح';
    }

    // Validate phone
    if (!formData.phone.trim()) {
        errors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^(05|9665)\d{8}$/.test(formData.phone.replace(/\s/g, ''))) {
        errors.phone = 'رقم الهاتف غير صحيح (مثال: 0512345678)';
    }

    return errors;
}

// Show field error
function showFieldError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);

    if (input) {
        input.classList.remove('border-gray-200', 'focus:border-purple-500');
        input.classList.add('border-red-300', 'focus:border-red-500');
    }

    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
}

// Clear field error
function clearFieldError(fieldId) {
    const input = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);

    if (input) {
        input.classList.remove('border-red-300', 'focus:border-red-500');
        input.classList.add('border-gray-200', 'focus:border-purple-500');
    }

    if (errorElement) {
        errorElement.classList.add('hidden');
    }
}

// Clear all errors
function clearAllErrors() {
    ['fullName', 'email', 'phone'].forEach(clearFieldError);
}

// Handle order submission
async function handleOrderSubmit(e) {
    e.preventDefault();

    // Clear previous errors
    clearAllErrors();

    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Validate form
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
        // Show errors
        Object.keys(errors).forEach(fieldId => {
            showFieldError(fieldId, errors[fieldId]);
        });
        showToast('يرجى تصحيح الأخطاء في النموذج', 'error');
        return;
    }

    // Check if cart is empty
    if (cartItems.length === 0) {
        showToast('السلة فارغة. يرجى إضافة منتجات قبل إتمام الطلب.', 'error');
        return;
    }

    // Disable submit button
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            جاري إرسال الطلب...
        `;
    }

    try {
        // Prepare order data
        const orderData = {
            customerData: formData,
            cartItems: cartItems,
            totalPrice: getTotalPrice(),
            orderDate: new Date().toISOString()
        };

        let orderNumber;
        let emailSent = false;

        // Check if we're on localhost (development)
        const isLocalhost = window.location.hostname === 'localhost' ||
                           window.location.hostname === '127.0.0.1' ||
                           window.location.port === '5500';

        if (isLocalhost) {
            // Development mode - simulate order
            console.log('=== DEVELOPMENT MODE - ORDER DETAILS ===');
            console.log('Order Data:', orderData);
            console.log('Customer:', formData.fullName);
            console.log('Email:', formData.email);
            console.log('Phone:', formData.phone);
            console.log('Total:', getTotalPrice(), 'ر.س');
            console.log('Products:');
            cartItems.forEach(item => {
                console.log(`- ${item.name} x${item.quantity} = ${item.price * item.quantity} ر.س`);
            });
            console.log('========================================');

            // Generate local order number
            orderNumber = generateOrderNumber();
            emailSent = false;

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));
        } else {
            // Production mode - send to backend API
            try {
                const response = await fetch('api/send-order.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(orderData)
                });

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || 'فشل في إرسال الطلب');
                }

                orderNumber = result.orderNumber;
                emailSent = result.emailSent || false;
            } catch (error) {
                // If API fails, fallback to local mode
                console.error('API Error:', error);
                console.log('Falling back to local order submission');
                orderNumber = generateOrderNumber();
                emailSent = false;
            }
        }

        // Clear cart
        localStorage.removeItem('afaq-cart');
        window.dispatchEvent(new Event('cartUpdated'));

        // Show success message
        let successMessage = `تم إرسال طلبك بنجاح! شكراً لك ${formData.fullName}. سيقوم فريق المبيعات بالتواصل معك خلال 24 ساعة. رقم الطلب: ${orderNumber}`;

        if (isLocalhost) {
            successMessage += ' (وضع التطوير - تحقق من Console)';
        } else if (!emailSent) {
            successMessage += ' (ملاحظة: قد يكون هناك تأخير في إرسال الإيميل)';
        }

        showToast(successMessage, 'success', 8000);

        // Redirect to store after 3 seconds
        setTimeout(() => {
            window.location.href = 'store.html';
        }, 3000);

    } catch (error) {
        console.error('Error submitting order:', error);
        showToast('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.', 'error');

        // Re-enable submit button
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <i class="fas fa-paper-plane"></i>
                إرسال الطلب
            `;
        }
    }
}

// Generate order number (for local development)
function generateOrderNumber() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `AFAQ-${timestamp}-${random}`;
}

// Show toast notification
function showToast(message, type = 'success', duration = 3000) {
    const toast = document.getElementById('toast');
    const toastContent = document.getElementById('toast-content');
    const toastIcon = document.getElementById('toast-icon');
    const toastMessage = document.getElementById('toast-message');

    if (!toast || !toastContent || !toastIcon || !toastMessage) return;

    // Set message
    toastMessage.textContent = message;

    // Set style based on type
    if (type === 'success') {
        toastContent.className = 'bg-green-600 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3';
        toastIcon.className = 'fas fa-check-circle text-2xl';
    } else if (type === 'error') {
        toastContent.className = 'bg-red-600 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3';
        toastIcon.className = 'fas fa-exclamation-circle text-2xl';
    } else if (type === 'info') {
        toastContent.className = 'bg-blue-600 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3';
        toastIcon.className = 'fas fa-info-circle text-2xl';
    }

    // Show toast
    toast.classList.remove('hidden');

    // Hide after duration
    setTimeout(() => {
        toast.classList.add('hidden');
    }, duration);
}

