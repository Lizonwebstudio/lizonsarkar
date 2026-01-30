// ===================================
// Preloader
// ===================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
});

// ===================================
// Header Scroll Effect
// ===================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Mobile Menu Toggle
// ===================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Smooth Scrolling for Navigation
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link.active')?.classList.remove('active');
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ===================================
// Hero Slider
// ===================================
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto slide
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event listeners for slider
nextBtn.addEventListener('click', () => {
    nextSlide();
    stopSlideShow();
    startSlideShow();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopSlideShow();
    startSlideShow();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        stopSlideShow();
        startSlideShow();
    });
});

// Start the slideshow
startSlideShow();

// Pause on hover
const heroSlider = document.querySelector('.hero-slider');
heroSlider.addEventListener('mouseenter', stopSlideShow);
heroSlider.addEventListener('mouseleave', startSlideShow);

// ===================================
// Counter Animation
// ===================================
function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Intersection Observer for counter animation
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ===================================
// Skill Progress Animation
// ===================================
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.dataset.progress;
            entry.target.style.width = progress + '%';
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===================================
// Portfolio Filter
// ===================================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        portfolioItems.forEach(item => {
            if (filter === 'all') {
                item.classList.remove('hide');
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                const categories = item.dataset.category.split(' ');
                if (categories.includes(filter)) {
                    item.classList.remove('hide');
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.classList.add('hide');
                    }, 300);
                }
            }
        });
    });
});

// ===================================
// Testimonials Slider
// ===================================
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    
    if (index >= testimonialCards.length) {
        currentTestimonial = 0;
    } else if (index < 0) {
        currentTestimonial = testimonialCards.length - 1;
    } else {
        currentTestimonial = index;
    }
    
    testimonialCards[currentTestimonial].classList.add('active');
}

prevTestimonial.addEventListener('click', () => {
    showTestimonial(currentTestimonial - 1);
});

nextTestimonial.addEventListener('click', () => {
    showTestimonial(currentTestimonial + 1);
});

// Auto-rotate testimonials
setInterval(() => {
    showTestimonial(currentTestimonial + 1);
}, 7000);

// ===================================
// Contact Form Submission
// ===================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.querySelector('.form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Success message
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 5000);
        
        // In real implementation, you would send data to server:
        /*
        fetch('your-api-endpoint.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            // Handle success
        })
        .catch(error => {
            // Handle error
            formMessage.className = 'form-message error';
            formMessage.textContent = 'Failed to send message. Please try again.';
        });
        */
    }, 2000);
});

// ===================================
// Newsletter Form
// ===================================
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    // Show success message (replace with actual API call)
    alert('Thanks for subscribing! You will receive updates at: ' + email);
    newsletterForm.reset();
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Theme Toggle (Dark Mode)
// ===================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.removeItem('theme');
    }
});

// ===================================
// Scroll Animations (Simple Fade In)
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .info-card, .about-content');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Prevent Right Click on Images (Optional)
// ===================================
/*
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});
*/

// ===================================
// Lazy Loading Images
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// Initialize Tooltips (if using)
// ===================================
const tooltipElements = document.querySelectorAll('[data-tooltip]');
tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = e.target.dataset.tooltip;
        document.body.appendChild(tooltip);
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
    });
    
    element.addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

// ===================================
// Typing Effect for Hero Title (Optional)
// ===================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Example usage (uncomment to enable):
/*
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title span:first-child');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 100);
    }
});
*/

// ===================================
// Console Welcome Message
// ===================================
console.log('%c🚀 Welcome to Professional Portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c👨‍💻 Built with HTML, CSS, and JavaScript', 'color: #764ba2; font-size: 14px;');
console.log('%c💼 Looking for a developer? Let\'s connect!', 'color: #f5576c; font-size: 14px;');

// ===================================
// Performance Optimization
// ===================================
// Debounce function for scroll events
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    // Your scroll event handlers here
}, 20));

// ===================================
// Page Load Complete
// ===================================
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    // Initialize any additional plugins or libraries here
    
    // Add loaded class to body
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// ===================================
// Handle External Links
// ===================================
const externalLinks = document.querySelectorAll('a[href^="http"]');
externalLinks.forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===================================
// Print Detection
// ===================================
window.addEventListener('beforeprint', () => {
    console.log('Page is about to be printed');
    // Add any print-specific modifications here
});

window.addEventListener('afterprint', () => {
    console.log('Page has been printed');
    // Restore normal view here
});

// ===================================
// Browser Tab Visibility Change
// ===================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('User switched to another tab');
        // Pause animations or videos if needed
        stopSlideShow();
    } else {
        console.log('User returned to the tab');
        // Resume animations or videos
        startSlideShow();
    }
});

// ===================================
// Error Handling
// ===================================
window.addEventListener('error', (e) => {
    console.error('Global error:', e.message);
    // You can send error logs to your server here
});

// ===================================
// Service Worker Registration (for PWA)
// ===================================
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
*/
