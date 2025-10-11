// Contact page initialization
if (window.location.pathname.includes('contact.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        // Inject reusable components
        injectComponents('contact');

        // Initialize header scroll functionality
        handleHeaderScroll();

        // Initialize mobile menu
        initMobileMenu();

        // Update cart counter
        updateCartCounter();

        // Initialize contact form
        initContactForm();
    });
}

// Initialize contact form handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    if (!form || !successMessage) {
        console.error('Contact form or success message not found');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: form.name.value,
            company: form.company.value,
            email: form.email.value,
            phone: form.phone.value,
            service: form.service.value,
            message: form.message.value
        };

        // Log form data (in a real app, this would be sent to a server)
        console.log('Form submitted:', formData);

        // Show success message
        successMessage.classList.remove('hidden');

        // Reset form
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}
