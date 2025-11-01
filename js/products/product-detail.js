// Product Detail Page Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Inject reusable components
    injectComponents('product-detail');

    // Initialize header scroll functionality
    handleHeaderScroll();

    // Initialize mobile menu
    initMobileMenu();

    // Update cart counter
    updateCartCounter();

    // Load product details from URL parameter
    loadProductDetails();
});

// Get product ID from URL parameter
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load and display product details
function loadProductDetails() {
    const productId = getProductIdFromURL();
    
    if (!productId) {
        showProductNotFound();
        return;
    }

    // Find product in products array
    const product = products.find(p => p.id === productId);

    if (!product) {
        showProductNotFound();
        return;
    }

    // Check if product has valid images - allow all images for now
    const hasValidImage = product.image && product.image.trim() !== '';

    if (!hasValidImage) {
        showProductNotFound();
        return;
    }

    // Try to get real product images if code is available
    if (product.code && typeof getProductImages === 'function') {
        const realImages = getProductImages(product.code);
        if (realImages && realImages.length > 0) {
            product.images = realImages;
            product.image = realImages[0];
        }
    } else if (product.code && typeof getProductMainImage === 'function') {
        const realImage = getProductMainImage(product.code);
        if (realImage) {
            product.image = realImage;
        }
    }

    // Display product
    displayProduct(product);
}

// Show product not found message
function showProductNotFound() {
    document.getElementById('product-not-found').classList.remove('hidden');
    document.getElementById('product-content').classList.add('hidden');
}

// Display product details
function displayProduct(product) {
    // Show product content, hide not found message
    document.getElementById('product-content').classList.remove('hidden');
    document.getElementById('product-not-found').classList.add('hidden');

    // Update page title
    document.getElementById('page-title').textContent = `${product.name} - آفاق المتكاملة`;
    document.title = `${product.name} - آفاق المتكاملة`;

    // Update breadcrumb
    document.getElementById('breadcrumb-category').textContent = product.category;

    // Show popular badge if product is popular
    if (product.isPopular) {
        document.getElementById('popular-badge').classList.remove('hidden');
    }

    // Set product name
    document.getElementById('product-name').textContent = product.name;

    // Set product category
    document.getElementById('product-category').textContent = product.category;

    // Set product price
    const priceElement = document.getElementById('product-price');
    if (product.price !== null) {
        priceElement.innerHTML = `${product.price.toLocaleString()} <span class="text-2xl text-purple-600">${product.currency}</span>`;
    } else {
        priceElement.innerHTML = `<span class="text-2xl text-purple-600">${product.currency}</span>`;
    }

    // Set product description
    document.getElementById('product-description').textContent = product.description;

    // Set product code if available
    if (product.code) {
        document.getElementById('product-code-section').classList.remove('hidden');
        document.getElementById('product-code').textContent = product.code;
    }

    // Set main product image
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = product.image;
    mainImage.alt = product.name;

    // Load product images (thumbnails)
    loadProductImages(product);

    // Load product features
    loadProductFeatures(product.features);

    // Set up add to cart button
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.onclick = () => addToCart(product.id);

    // Load related products
    loadRelatedProducts(product);
}

// Load product images (main image + additional images if available)
function loadProductImages(product) {
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const mainImageElement = document.getElementById('main-product-image');
    
    let images = [];
    
    // Check if product has multiple images
    if (product.images && Array.isArray(product.images) && product.images.length > 1) {
        images = product.images;
    } else if (product.image) {
        images = [product.image];
    }

    // Filter out only empty images
    images = images.filter(img => img && img.trim() !== '');

    if (images.length === 0) {
        thumbnailContainer.classList.add('hidden');
        return;
    }

    // If only one image, hide thumbnails
    if (images.length === 1) {
        thumbnailContainer.classList.add('hidden');
        return;
    }

    // Display thumbnails
    thumbnailContainer.innerHTML = '';
    thumbnailContainer.classList.remove('hidden');
    
    images.forEach((imgSrc, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-purple-500';
        thumbnail.innerHTML = `
            <img src="${imgSrc}" alt="${product.name} ${index + 1}" class="w-full h-24 object-contain p-2">
        `;
        
        thumbnail.onclick = () => {
            mainImageElement.src = imgSrc;
            // Update all thumbnails border
            thumbnailContainer.querySelectorAll('div').forEach(t => t.classList.remove('border-purple-500'));
            thumbnail.classList.add('border-purple-500');
        };
        
        // Set first image as active
        if (index === 0) {
            thumbnail.classList.add('border-purple-500');
        }
        
        thumbnailContainer.appendChild(thumbnail);
    });
}

// Load product features
function loadProductFeatures(features) {
    const featuresContainer = document.getElementById('product-features');
    featuresContainer.innerHTML = '';

    if (!features || features.length === 0) {
        featuresContainer.innerHTML = '<li class="text-gray-600">لا توجد ميزات محددة</li>';
        return;
    }

    features.forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.className = 'flex items-start gap-3 text-gray-700';
        featureItem.innerHTML = `
            <i class="fas fa-check-circle text-green-500 mt-1"></i>
            <span>${feature}</span>
        `;
        featuresContainer.appendChild(featureItem);
    });
}

// Load related products from same category
function loadRelatedProducts(currentProduct) {
    const relatedContainer = document.getElementById('related-products');
    
    // Get products from same category, excluding current product
    const relatedProducts = products.filter(p => 
        p.categorySlug === currentProduct.categorySlug && 
        p.id !== currentProduct.id &&
        p.image && 
        p.image.trim() !== ''
    ).slice(0, 4); // Show max 4 related products

    if (relatedProducts.length === 0) {
        relatedContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-gray-500">لا توجد منتجات ذات صلة</p>
            </div>
        `;
        return;
    }

    relatedContainer.innerHTML = '';
    relatedProducts.forEach(product => {
        const card = createRelatedProductCard(product);
        relatedContainer.appendChild(card);
    });
}

// Create related product card element
function createRelatedProductCard(product) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group';
    
    const priceDisplay = product.price !== null
        ? `${product.price.toLocaleString()} <span class="text-sm">${product.currency}</span>`
        : `<span class="text-sm">${product.currency}</span>`;

    card.innerHTML = `
        <a href="product-detail.html?id=${product.id}" class="block">
            <div class="relative h-48 overflow-hidden">
                <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-4">
                <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    ${product.name}
                </h3>
                <div class="flex items-center justify-between">
                    <span class="text-sm text-purple-600 font-semibold">
                        ${product.category}
                    </span>
                    <div class="text-xl font-bold text-gray-800">
                        ${priceDisplay}
                    </div>
                </div>
            </div>
        </a>
    `;
    
    return card;
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
