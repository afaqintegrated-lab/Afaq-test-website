// Clients page initialization
// Check if we're on the clients page
if (window.location.pathname.includes('src/pages/main/clients.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        // Inject reusable components
        injectComponents('clients');

        // Initialize header scroll functionality
        handleHeaderScroll();

        // Initialize mobile menu
        initMobileMenu();

        // Update cart counter
        updateCartCounter();

        // Initialize carousel after a slight delay to ensure DOM is ready
        setTimeout(() => {
            initClientsCarousel();
        }, 200);
    });
}

// Initialize clients carousel with seamless infinite scroll
function initClientsCarousel() {
    const carouselTrack = document.getElementById('carousel-track');

    if (!carouselTrack) {
        console.error('Carousel track not found!');
        return;
    }

    console.log('Initializing carousel...');

    // Client logos data - Use PATH_RESOLVER for correct paths
    const clients = [
        { logo: PATH_RESOLVER.resolve("assets/images/logos/Alfanar_brand_logo.png"), alt: "شركة الفنار" },
        { logo: PATH_RESOLVER.resolve("assets/images/logos/Al-Mahmal.jpg"), alt: "شركة المحمل" },
        { logo: PATH_RESOLVER.resolve("assets/images/logos/logo.png"), alt: "عيادات ميلا" },
        { logo: PATH_RESOLVER.resolve("assets/images/logos/SMSA_Express_logo_(English_version).svg.png"), alt: "SMSA Express" },
        { logo: PATH_RESOLVER.resolve("assets/images/logos/Solutions.PNG"), alt: "STC Solutions" },
        { logo: PATH_RESOLVER.resolve("assets/images/logos/Ubaad.png"), alt: "مؤسسة أبعاد الفخامة" }
    ];

    // Render logos 3 times for seamless infinite scroll
    let carouselHTML = '';

    for (let setIndex = 0; setIndex < 3; setIndex++) {
        clients.forEach((client, index) => {
            carouselHTML += `
                <div class="clients-carousel-item">
                    <img src="${client.logo}" alt="${client.alt}">
                </div>
            `;
        });
    }

    carouselTrack.innerHTML = carouselHTML;
    console.log('Carousel populated with', carouselTrack.children.length, 'items');
}

