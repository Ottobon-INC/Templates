// Initialize Lucide Icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  
  mobileBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-links a, .nav-cta');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
    });
  });

  // Sticky Header & Active State
  const header = document.getElementById('main-header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('compact');
    } else {
      header.classList.remove('compact');
    }
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all items
      faqItems.forEach(i => i.classList.remove('active'));
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Scroll Animation (Fade in on scroll)
  const sections = document.querySelectorAll('.section, .card, .facility-card, .news-card');
  
  sections.forEach(section => {
    section.classList.add('fade-in-scroll');
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
