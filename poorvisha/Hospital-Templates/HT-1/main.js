const updateHeader = () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  if (window.scrollY > 50 || !hero) {
    header.style.backgroundColor = 'var(--color-primary)';
    header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
  }
};

window.addEventListener('scroll', updateHeader);
window.addEventListener('DOMContentLoaded', updateHeader);


// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};

const revealOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach((el) => {
  revealObserver.observe(el);
});
