let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) { // Add checks to ensure elements exist
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        if (!sec) return; // Skip if section is null
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (id && scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => {
                if (!link) return;
                link.classList.remove('active');
                // Check if the link's href matches the section id
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });

    let header = document.querySelector('header');
    if (header) { // Check if header exists
        header.classList.toggle('sticky', scrollY > 100);
    }

    // Close menu on scroll if open
    if (menuIcon && navbar && navbar.classList.contains('active')) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};

// ScrollReveal Configuration
ScrollReveal({
    reset: false, // Set to true if you want animations to replay on scroll up
    distance: '60px', // Slightly less distance
    duration: 1500, // Slightly faster duration
    delay: 200,
    easing: 'ease-in-out', // Smoother easing
});

// General reveal for sections or main content blocks
ScrollReveal().reveal('.home-content, .about-content, .services-container, .portfolio-container, .heading', { origin: 'bottom', interval: 150 });

// Specific reveals
ScrollReveal().reveal('.home-content h1', { origin: 'left', delay: 400 });
ScrollReveal().reveal('.home-img', { origin: 'right', delay: 500 });
ScrollReveal().reveal('.about-img', { origin: 'left', delay: 300 });

// Staggered reveal for boxes/items
ScrollReveal().reveal('.services-box, .portfolio-box', { 
    origin: 'bottom', 
    interval: 200, 
    delay: 300 
});

ScrollReveal().reveal('.social-media a', { origin: 'bottom', interval: 100, delay: 600, distance: '30px' });
ScrollReveal().reveal('.btn', { origin: 'bottom', delay: 700, distance: '30px' });


// Typed.js - Ensure '.multiple-text' element exists in your HTML
const multipleTextElement = document.querySelector('.multiple-text');
if (multipleTextElement) {
    const typed = new Typed('.multiple-text', {
        strings: ["CATALYST GENERATION", "The 3rd Generation", "SIBS Students"], // Updated for 3rd generation
        typeSpeed: 60,
        backSpeed: 50,
        backDelay: 1200,
        loop: true,
    });
} else {
    console.warn('Typed.js: .multiple-text element not found.');
}

// Smooth scroll for anchor links (if CSS scroll-behavior is not sufficient or for more control)
/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId = this.getAttribute('href');
        if (targetId && targetId.length > 1) { // Ensure it's not just '#'
            let targetElement = document.querySelector(targetId);
            if(targetElement){
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
*/

