// Enhanced Life Smart Products with Multiple Images
// This file extends the existing products-data.js with image arrays

// Load product images map
fetch('../data/products/product-images-map.json')
    .then(response => response.json())
    .then(imageMap => {
        // Helper to find images for a product code
        function findImages(code) {
            if (imageMap[code]) return imageMap[code].images;
            for (const key in imageMap) {
                if (key.includes(code) || code.includes(key)) {
                    return imageMap[key].images;
                }
            }
            return null;
        }

        // Update existing products with multiple images
        products.forEach(product => {
            if (product.code && product.categorySlug === 'smart-home') {
                const images = findImages(product.code);
                if (images && images.length > 0) {
                    product.images = images;
                    product.image = images[0]; // Keep first image for compatibility
                }
            } else if (product.image && !product.images) {
                // Convert single image to array for consistency
                product.images = [product.image];
            }
        });

        console.log('Products enhanced with image arrays');
    })
    .catch(error => console.error('Error loading image map:', error));

// Image Slider functionality for product cards
function createImageSlider(images, productId) {
    if (!images || images.length <= 1) {
        return `<img src="${images ? images[0] : '../assets/images/general/placeholder.png'}" alt="Product" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">`;
    }

    return `
        <div class="product-slider relative w-full h-full" data-product-id="${productId}">
            <div class="slider-images relative w-full h-full overflow-hidden">
                ${images.map((img, index) => `
                    <img
                        src="${img}"
                        alt="Product ${index + 1}"
                        loading="lazy"
                        class="slider-image absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}"
                        data-index="${index}"
                    >
                `).join('')}
            </div>

            <!-- Navigation Dots -->
            <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                ${images.map((_, index) => `
                    <button
                        class="slider-dot w-2 h-2 rounded-full transition-all duration-300 ${index === 0 ? 'bg-white w-6' : 'bg-white/50'}"
                        data-index="${index}"
                    ></button>
                `).join('')}
            </div>

            <!-- Navigation Arrows -->
            ${images.length > 1 ? `
                <button class="slider-prev absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white w-8 h-8 rounded-full flex items-center justify-center z-20 transition-all">
                    <i class="fas fa-chevron-right text-xs"></i>
                </button>
                <button class="slider-next absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white w-8 h-8 rounded-full flex items-center justify-center z-20 transition-all">
                    <i class="fas fa-chevron-left text-xs"></i>
                </button>
            ` : ''}
        </div>
    `;
}

// Initialize sliders after products are rendered
function initializeProductSliders() {
    const sliders = document.querySelectorAll('.product-slider');

    sliders.forEach(slider => {
        let currentIndex = 0;
        const images = slider.querySelectorAll('.slider-image');
        const dots = slider.querySelectorAll('.slider-dot');
        const prevBtn = slider.querySelector('.slider-prev');
        const nextBtn = slider.querySelector('.slider-next');

        function showImage(index) {
            // Hide all images
            images.forEach(img => {
                img.classList.remove('opacity-100', 'z-10');
                img.classList.add('opacity-0', 'z-0');
            });

            // Show current image
            images[index].classList.remove('opacity-0', 'z-0');
            images[index].classList.add('opacity-100', 'z-10');

            // Update dots
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.remove('bg-white/50', 'w-2');
                    dot.classList.add('bg-white', 'w-6');
                } else {
                    dot.classList.remove('bg-white', 'w-6');
                    dot.classList.add('bg-white/50', 'w-2');
                }
            });

            currentIndex = index;
        }

        function nextImage() {
            const nextIndex = (currentIndex + 1) % images.length;
            showImage(nextIndex);
        }

        function prevImage() {
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(prevIndex);
        }

        // Event listeners
        if (prevBtn) prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            prevImage();
        });

        if (nextBtn) nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            nextImage();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showImage(index);
            });
        });

        // Auto-advance every 3 seconds (optional)
        // setInterval(nextImage, 3000);
    });
}

// Export functions for use in other files
if (typeof window !== 'undefined') {
    window.createImageSlider = createImageSlider;
    window.initializeProductSliders = initializeProductSliders;
}

