function openLinkedIn() {
    window.open('https://www.linkedin.com/in/alexmtzai/', '_blank');
}

function openGitHub() {
    window.open('https://github.com/luis12007', '_blank');
}

function openEmail() {
    window.open('mailto:alexmtzai2002@gmail.com', '_blank');
}

openVideo = function() {
    window.location.href = '/presentation';
}

downloadCV = function() {
    window.open('/static/files/Alex Engineer AI CV.pdf', '_blank');
}
opendte = function() {
    window.open('https://cliente-production-e629.up.railway.app/demostration', '_blank');
}

openlinkedinbot = function() {
    window.open('https://github.com/luis12007/Networking-bot', '_blank');
}

let navOpen = false;

function openNav() {
    navOpen = !navOpen;
    const navLinks = document.querySelector('.nav-links');
    if (navOpen) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
}


const titles = [
    "ML Engineer",
    "AI Enthusiast",
    "Model Optimization Specialist",
    "Data Scientist",
    "AI Developer",

];

let currentIndex = 0;

function changeTitle() {
    const titleElement = document.querySelector('.ai-engineer span');
    titleElement.textContent = titles[currentIndex];
    currentIndex = (currentIndex + 1) % titles.length;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(changeTitle, 3000); 
});

/*  */

document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    let lastX = 0,
        lastY = 0;

    document.addEventListener("mousemove", (e) => {
        // Smoothly follow the cursor with slight delay
        lastX = e.clientX;
        lastY = e.clientY;
        requestAnimationFrame(() => {
            cursor.style.left = `${lastX}px`;
            cursor.style.top = `${lastY}px`;
        });

        // Create smooth wake effect
        const wake = document.createElement("div");
        wake.classList.add("cursor-wake");
        document.body.appendChild(wake);
        wake.style.left = `${lastX}px`;
        wake.style.top = `${lastY}px`;

        // Remove wake after animation
        setTimeout(() => {
            wake.remove();
        }, 500);
    });

    document.addEventListener("mousedown", () => {
        cursor.classList.add("click");
    });

    document.addEventListener("mouseup", () => {
        cursor.classList.remove("click");
    });
});

/* to change menu */
/* 
document.addEventListener('DOMContentLoaded', () => {
    const frameParent = document.querySelector('.frame-parent');
    const originalOffsetTop = frameParent.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.scrollY > originalOffsetTop) {
            frameParent.classList.add('fixed');
        } else {
            frameParent.classList.remove('fixed');
        }
    });
}); */

// ===== PROFESSIONAL ANIMATION CONTROLLER =====

// Main animation initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupScrollAnimations();
    setupIntersectionObserver();
    setupMobileNavAnimations();
    setupEnhancedInteractions();
});

// Initialize loading animations
function initializeAnimations() {
    // Add loaded class after a short delay to trigger animations
    setTimeout(() => {
        document.body.classList.add('loaded');
        
        // Trigger staggered animations for sections
        setTimeout(() => {
            animateSections();
        }, 500);
        
    }, 100);

    // Remove loading overlay after animations complete
    setTimeout(() => {
        const overlay = document.querySelector('.overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            setTimeout(() => {
                overlay.remove();
            }, 500);
        }
    }, 2500);
}

// Animate sections with staggered timing
function animateSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('section-animate');
        setTimeout(() => {
            section.classList.add('in-view');
        }, index * 200);
    });
}

// Setup scroll-triggered animations
function setupScrollAnimations() {
    const header = document.querySelector('.frame-parent');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', throttle(() => {
        const currentScrollY = window.scrollY;
        
        // Header floating animation
        if (currentScrollY > 100) {
            if (!header.classList.contains('floating')) {
                header.classList.add('floating');
                header.style.animation = 'slideDownFloat 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            }
        } else {
            if (header.classList.contains('floating')) {
                header.classList.remove('floating');
                header.style.animation = 'slideUpFloat 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            }
        }
        
        lastScrollY = currentScrollY;
    }, 16)); // 60fps throttling
}

// Intersection Observer for scroll animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add specific animations based on element type
                if (entry.target.classList.contains('button-primary') || 
                    entry.target.classList.contains('button-secondary')) {
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0) scale(1)';
                        entry.target.style.opacity = '1';
                    }, 100);
                }
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(
        '.button-primary, .button-secondary, .icons img, section'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Enhanced mobile navigation animations
function setupMobileNavAnimations() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburgerBtn && mobileNav) {
        // Open mobile nav
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.add('active');
            mobileNav.classList.add('active');
            mobileNavOverlay.classList.add('active');
            
            // Animate links with stagger
            mobileNavLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.style.opacity = '1';
                    link.style.transform = 'translateX(0)';
                }, index * 100);
            });
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        });

        // Close mobile nav
        const closeMobileNav = () => {
            hamburgerBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            mobileNavOverlay.classList.remove('active');
            
            // Reset links
            mobileNavLinks.forEach(link => {
                link.style.opacity = '0';
                link.style.transform = 'translateX(-20px)';
            });
            
            // Restore body scroll
            document.body.style.overflow = '';
        };

        mobileNavClose?.addEventListener('click', closeMobileNav);
        mobileNavOverlay?.addEventListener('click', closeMobileNav);

        // Close on link click
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(closeMobileNav, 300);
            });
        });
    }
}

// Setup enhanced interactions
function setupEnhancedInteractions() {
    // Button ripple effect
    const buttons = document.querySelectorAll('.button-primary, .button-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });

    // Enhanced hover effects for icons
    const icons = document.querySelectorAll('.github, .phinstagram-logo-fill-icon');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-5px) scale(1.15) rotate(5deg)';
            icon.style.filter = 'brightness(1.2) saturate(1.3)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) scale(1) rotate(0)';
            icon.style.filter = 'brightness(1) saturate(1)';
        });
    });

    // Nav link enhanced animations
    const navLinks = document.querySelectorAll('.tab-default a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // Profile image interaction
    const profileImage = document.querySelector('.whatsapp-image-2024-12-03-at-1-icon');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            profileImage.style.transform = 'scale(1.05) rotate(0deg)';
            profileImage.style.filter = 'brightness(1.1) saturate(1.1)';
        });
        
        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'scale(1) rotate(-3deg)';
            profileImage.style.filter = 'brightness(1) saturate(1)';
        });
    }
}

// Create ripple effect for buttons
function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        pointer-events: none;
        z-index: 1;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    // Animate ripple
    ripple.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(1)', opacity: 0 }
    ], {
        duration: 600,
        easing: 'ease-out'
    }).onfinish = () => ripple.remove();
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Recalculate animations if needed
    const elements = document.querySelectorAll('.animate-in');
    elements.forEach(el => {
        // Reset and re-trigger animations if necessary
        if (window.innerWidth <= 768) {
            el.style.transform = 'translateY(20px)';
        }
    });
}, 250));

// Page visibility API for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause heavy animations when tab is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when tab becomes visible
        document.body.style.animationPlayState = 'running';
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance optimization: Reduce animations on low-end devices
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
} else {
    document.documentElement.style.setProperty('--animation-duration', '0.8s');
}


