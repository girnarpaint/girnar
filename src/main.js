import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // Close mobile menu on clicking a link
  const mobileLinks = menu?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('shadow-md');
      navbar?.classList.replace('bg-white/90', 'bg-white/95');
    } else {
      navbar?.classList.remove('shadow-md');
      navbar?.classList.replace('bg-white/95', 'bg-white/90');
    }
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-section').forEach((section) => {
    observer.observe(section);
  });
});
