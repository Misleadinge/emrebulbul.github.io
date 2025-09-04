// Smooth scrolling and interactive effects for futuristic portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initAnimations();
    initSkillBars();
    initCounters();
    initParticles();
    initFormValidation();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll effects and animations
function initScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Trigger skill bar animations
                if (entry.target.closest('.skills')) {
                    animateSkillBars();
                }
                
                // Trigger counter animations
                if (entry.target.closest('.about')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.text-block, .skill-category, .project-card, .contact-item');
    animatedElements.forEach(el => observer.observe(el));

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Initialize loading animations
function initAnimations() {
    // Stagger animation for hero title lines
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
        line.style.animationDelay = `${0.2 + (index * 0.2)}s`;
    });

    // Random floating particles
    createFloatingParticles();
}

// Skill bar animations
function initSkillBars() {
    let skillBarsAnimated = false;
    
    window.animateSkillBars = function() {
        if (skillBarsAnimated) return;
        skillBarsAnimated = true;
        
        const skillLevels = document.querySelectorAll('.skill-level');
        skillLevels.forEach((level, index) => {
            setTimeout(() => {
                const percentage = level.getAttribute('data-level');
                level.style.setProperty('--skill-width', `${percentage}%`);
                level.classList.add('animate');
            }, index * 100);
        });
    };
}

// Counter animations
function initCounters() {
    let countersAnimated = false;
    
    window.animateCounters = function() {
        if (countersAnimated) return;
        countersAnimated = true;
        
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                counter.textContent = Math.floor(current);
                
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                }
            }, 16);
        });
    };
}

// Particle system
function initParticles() {
    const particleContainer = document.querySelector('.floating-particles');
    if (!particleContainer) return;
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 10 + 5;
    
    particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: var(--primary);
        border-radius: 50%;
        opacity: 0.6;
        animation: particleFloat ${duration}s infinite ease-in-out;
        animation-delay: ${Math.random() * 5}s;
        box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
    `;
    
    container.appendChild(particle);
}

function createFloatingParticles() {
    // Add CSS for particle animation if not already present
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes particleFloat {
                0%, 100% { 
                    transform: translateY(0) rotate(0deg); 
                    opacity: 0.6; 
                }
                25% { 
                    transform: translateY(-20px) rotate(90deg); 
                    opacity: 1; 
                }
                50% { 
                    transform: translateY(-40px) rotate(180deg); 
                    opacity: 0.8; 
                }
                75% { 
                    transform: translateY(-20px) rotate(270deg); 
                    opacity: 1; 
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Form validation and submission
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully!', 'success');
        form.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary)' : 'var(--accent)'};
        color: var(--bg-dark);
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Typewriter effect for hero subtitle
function initTypewriter() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        subtitle.textContent += text.charAt(i);
        i++;
        
        if (i >= text.length) {
            clearInterval(typeInterval);
        }
    }, 50);
}

// Mouse trail effect
function initMouseTrail() {
    const trail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY });
        
        if (trail.length > trailLength) {
            trail.shift();
        }
        
        updateTrail();
    });
    
    function updateTrail() {
        // Remove existing trail elements
        document.querySelectorAll('.mouse-trail').forEach(el => el.remove());
        
        trail.forEach((point, index) => {
            const trailElement = document.createElement('div');
            trailElement.className = 'mouse-trail';
            trailElement.style.cssText = `
                position: fixed;
                left: ${point.x}px;
                top: ${point.y}px;
                width: ${(index + 1) * 2}px;
                height: ${(index + 1) * 2}px;
                background: rgba(0, 255, 136, ${(index + 1) / trailLength});
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
            `;
            document.body.appendChild(trailElement);
            
            // Remove after animation
            setTimeout(() => {
                if (trailElement.parentNode) {
                    trailElement.parentNode.removeChild(trailElement);
                }
            }, 100);
        });
    }
}

// Initialize advanced effects after page load
window.addEventListener('load', () => {
    initTypewriter();
    initMouseTrail();
});

// Performance optimization: Throttle scroll events
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

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations here
}, 16));

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length && 
        konamiCode.every((code, index) => code === konamiSequence[index])) {
        
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Add special effects
    document.body.style.filter = 'hue-rotate(180deg)';
    showNotification('🎉 Easter egg activated! Colors inverted!', 'success');
    
    setTimeout(() => {
        document.body.style.filter = '';
    }, 5000);
}
