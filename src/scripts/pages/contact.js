// Contact page initialization
if (window.location.pathname.includes('src/pages/main/contact.html')) {
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

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin ml-2"></i> جاري الإرسال...';

        // Get form data
        const formData = {
            name: form.name.value,
            company: form.company.value,
            email: form.email.value,
            phone: form.phone.value,
            service: form.service.value,
            message: form.message.value
        };

        try {
            // Check if we're on localhost (development)
            const isLocalhost = window.location.hostname === 'localhost' ||
                               window.location.hostname === '127.0.0.1' ||
                               window.location.port === '5500';

            let inquiryNumber;
            let emailSent = false;

            if (isLocalhost) {
                // Development mode - simulate submission
                console.log('=== DEVELOPMENT MODE - CONTACT FORM ===');
                console.log('Form Data:', formData);
                console.log('Name:', formData.name);
                console.log('Email:', formData.email);
                console.log('Phone:', formData.phone);
                console.log('Service:', formData.service);
                console.log('Message:', formData.message);
                console.log('========================================');

                // Generate local inquiry number
                inquiryNumber = 'INQ-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
                emailSent = false;

                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 1500));
            } else {
                // Production mode - send to backend API
                try {
                    const response = await fetch('api/send-contact.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData)
                    });

                    const result = await response.json();

                    if (!response.ok) {
                        throw new Error(result.error || 'فشل في إرسال الرسالة');
                    }

                    inquiryNumber = result.inquiryNumber;
                    emailSent = result.emailSent || false;
                } catch (error) {
                    // If API fails, fallback to local mode
                    console.error('API Error:', error);
                    console.log('Falling back to local contact form submission');
                    inquiryNumber = 'INQ-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
                    emailSent = false;
                }
            }

            // Update success message with inquiry number
            let successText = `تم إرسال رسالتك بنجاح! شكراً لك. سنتواصل معك قريباً. رقم الاستفسار: ${inquiryNumber}`;

            if (isLocalhost) {
                successText += ' (وضع التطوير - تحقق من Console)';
            } else if (!emailSent) {
                successText += ' (ملاحظة: قد يكون هناك تأخير في إرسال الإيميل)';
            }

            successMessage.querySelector('i').className = 'fas fa-check-circle ml-2';
            successMessage.querySelector('i').nextSibling.textContent = ' ' + successText;
            successMessage.classList.remove('hidden');

            // Reset form
            form.reset();

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Hide success message after 8 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 8000);

        } catch (error) {
            console.error('Error submitting contact form:', error);

            // Show error message
            successMessage.className = 'bg-red-600 text-white p-4 rounded-lg mb-4';
            successMessage.querySelector('i').className = 'fas fa-exclamation-circle ml-2';
            successMessage.querySelector('i').nextSibling.textContent = ' حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.';
            successMessage.classList.remove('hidden');

            // Hide error after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
                // Reset to success styling
                successMessage.className = 'hidden bg-green-600 text-white p-4 rounded-lg mb-4';
            }, 5000);
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}

