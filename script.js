// Inisialisasi Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});

// Inisialisasi AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Fade-in Animations for Sections
document.querySelectorAll('section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "easeOut"
    });
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});
