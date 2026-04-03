// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe reveal elements
    const revealElements = document.querySelectorAll('.reveal, .stagger-children');
    revealElements.forEach(el => observer.observe(el));

    // 3. Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md');
                navbar.classList.replace('bg-transparent', 'bg-white/90');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.replace('bg-white/90', 'bg-transparent');
            }
        });
    }

    // 4. Form submission handler
    const appointmentForm = document.getElementById('appointment-form');
    const successMessage = document.getElementById('success-message');
    
    if (appointmentForm && successMessage) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate form submission
            appointmentForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Optional: You would normally send data to a server here
        });
    }

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Reset Form Function globally accessible
window.resetForm = function() {
    const appointmentForm = document.getElementById('appointment-form');
    const successMessage = document.getElementById('success-message');
    
    if (appointmentForm && successMessage) {
        appointmentForm.reset();
        successMessage.classList.add('hidden');
        appointmentForm.classList.remove('hidden');
    }
}
