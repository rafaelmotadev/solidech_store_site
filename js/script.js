/* ===========================================
   SOLIDECH STORE - JAVASCRIPT
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Toggle Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Animate hamburger icon (optional)
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');

            // Close other answers (optional behavior)
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) {
                    item.style.maxHeight = null;
                    item.classList.remove('active');
                    item.previousElementSibling.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
                }
            });

            // Toggle current answer
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.classList.remove('active');
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.classList.add('active');
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            }
        });
    });

    // Smooth Scroll for Anchor Links (Native scroll-behavior is used, but this adds offset for fixed header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in Animation on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial setup for animation elements
    console.log('Solidech Store - Site Ready');
});
