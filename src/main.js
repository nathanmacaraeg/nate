import './style.css'

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('[data-reveal]');

const reveal = () => {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < window.innerHeight - revealPoint) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Navbar dynamic padding
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.padding = '0.5rem 0';
    nav.style.background = 'rgba(255, 255, 255, 0.9)';
  } else {
    nav.style.padding = '1rem 0';
    nav.style.background = 'rgba(255, 255, 255, 0.7)';
  }
});

// smooth scroll enhancement (already in CSS, but for older browsers or complex layouts)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
