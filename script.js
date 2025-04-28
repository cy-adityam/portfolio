// Loader animation
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});

// Initialize Swiper for certificates
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: "auto" }
  }
});

// Typing animation
var typed = new Typed('.typing', {
  strings: ["Ethical Hacker", "AI/ML Engineer", "Problem Solver"],
  typeSpeed: 90,
  backSpeed: 50,
  loop: true
});

// Animate on scroll
AOS.init({
  duration: 1200,
  once: true,
});

// Particles.js background with parallax effect
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js config loaded');
});

// Navbar Toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('active');
});

// Close navbar when link clicked (mobile friendly)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('active');
  });
});
// Initialize Particles.js with the custom configuration
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
window.addEventListener('load', () => {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  progressBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = `${percent}%`;
  });
});
