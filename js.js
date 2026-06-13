let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// Scrool section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => { // Corrected variable name from 'apply' to 'links'
                links.classList.remove('active');
            });
            // Ensure the selector targets an existing element before adding class
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        };
    });


    // Sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Toggle icon dan navbar - Debounce or throttle this if performance issues arise on rapid scroll
    // For menu, it's better to close it if user scrolls and menu is open
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};

// ScrollReveal Configuration - Good as is, but you can fine-tune delays and origins
ScrollReveal({
    reset: true, // Add this if you want animations to replay when scrolling back up
    distance: '80px',
    duration: 2000,
    delay: 200,
});

/* General reveal for sections or main content blocks */
ScrollReveal().reveal('.home-content, .about-content, .services-container, .portofolio-container, .contact form, .features-list', { origin: 'bottom', interval: 150 });

/* Specific reveals with different origins/delays if needed */
ScrollReveal().reveal('.home-content h1', { origin: 'left', delay: 400 });
ScrollReveal().reveal('.home-content h3, .home-content p', { origin: 'left', interval: 100, delay: 500 });
ScrollReveal().reveal('.social-media a', { origin: 'bottom', interval: 100, delay: 600 });
// home-img is already animated with CSS keyframes, ScrollReveal might conflict or be redundant unless you want a specific entry animation.
// If keeping CSS animation for float, use ScrollReveal for initial appearance only:
// ScrollReveal().reveal('.home-img', { origin: 'bottom', delay: 200, beforeReveal: (el) => { el.style.animationPlayState = 'running'; } });

ScrollReveal().reveal('.heading', { origin: 'top', delay: 100 });

ScrollReveal().reveal('.about-img', { origin: 'right', delay: 300 });

/* Staggered reveal for boxes/items */
ScrollReveal().reveal('.services-box, .portofolio-box, .features-list li, .technologies-list li', { 
    origin: 'bottom', 
    interval: 200, // Consistent interval for staggered items
    delay: 200 
});

// Typed.js - Configuration is good.
// const typed = new Typed('.multiple-text', {
// strings: ["SMP SIBS", "SIBoS Gallery"],
// typeSpeed: 70,
// backSpeed: 70,
// backDelay: 1000,
// loop: true,
// });
// Ensure '.multiple-text' element exists in your HTML if you use Typed.js
// If it's part of coba.html, this is fine. If not, you might remove or conditionalize it.

// Smooth scroll for anchor links (if not handled by CSS scroll-behavior)
/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId = this.getAttribute('href');
        let targetElement = document.querySelector(targetId);
        if(targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
*/

// Debounce function to limit the rate at which a function can fire.
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Example of using debounce for scroll events if needed for performance
// window.addEventListener('scroll', debounce(yourScrollFunction, 200));

