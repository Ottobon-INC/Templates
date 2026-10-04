/**
 * Horizon Academy - Interactive JavaScript
 * Handles modals, dynamic program tabs, animated stat counters, and responsive interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Appointment Modal Logic
  const modal = document.getElementById('appointmentModal');
  const openModalBtns = document.querySelectorAll('.js-open-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const appointmentForm = document.getElementById('appointmentForm');
  const toastNotice = document.getElementById('toastNotice');

  function openModal() {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Handle ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 3. Appointment Form Submission
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const parentName = document.getElementById('parentName')?.value || 'Valued Parent';
      const visitDate = document.getElementById('visitDate')?.value || 'selected date';
      
      closeModal();
      appointmentForm.reset();

      // Show toast confirmation
      showToast(`Thank you, ${parentName}! Your appointment for ${visitDate} has been confirmed. We look forward to welcoming you to Horizon Academy.`);
    });
  }

  function showToast(message) {
    if (!toastNotice) return;
    const toastMsg = toastNotice.querySelector('.toast-msg');
    if (toastMsg) toastMsg.textContent = message;
    
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 5500);
  }

  // 4. Academic Program Filter Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const programCards = document.querySelectorAll('.program-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      programCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 5. Animated Number Counters (Stats)
  const statElements = document.querySelectorAll('.js-counter');
  let counted = false;

  function runCounters() {
    if (counted) return;
    
    statElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1800; // ms
      const stepTime = 30;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current).toLocaleString() + suffix;
      }, stepTime);
    });

    counted = true;
  }

  // Intersection Observer for stats
  const statsSection = document.querySelector('.section-why');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(statsSection);
  } else {
    runCounters();
  }

  // 6. Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = '#FAF7F2';
        navLinks.style.padding = '24px';
        navLinks.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        navLinks.style.borderBottom = '1px solid #E5ECE8';
      }
    });
  }
});
