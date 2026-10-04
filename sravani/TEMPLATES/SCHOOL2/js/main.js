/**
 * SKILLEX SCHOOL - Interactive JavaScript
 * High fidelity interaction matching the reference design
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. STICKY HEADER ON SCROLL
  const fixedHeader = document.querySelector('.header-block.mod--fixed');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      fixedHeader.classList.add('is-visible');
    } else {
      fixedHeader.classList.remove('is-visible');
    }
  });

  // 2. HERO ACCORDION CARDS (Cooking, Writing, Business)
  const heroCards = document.querySelectorAll('.hero__persons .hero__person');
  
  if (heroCards.length > 0) {
    // Set initial card 1 active
    heroCards[0].classList.add('is-active');

    heroCards.forEach((card, index) => {
      // Hover event
      card.addEventListener('mouseenter', () => {
        activateCard(index);
      });

      // Click event for touch/click support
      card.addEventListener('click', () => {
        activateCard(index);
      });
    });

    function activateCard(activeIndex) {
      heroCards.forEach((c, idx) => {
        if (idx === activeIndex) {
          c.classList.add('is-active');
          c.style.width = '58%';
        } else {
          c.classList.remove('is-active');
          c.style.width = '21%';
        }
      });
    }
  }

  // 3. CATEGORY TABS SWITCHING
  const tabLinks = document.querySelectorAll('.category__tab-link');
  const tabPanes = document.querySelectorAll('.category__tab');

  tabLinks.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Remove current active from all
      tabLinks.forEach(l => l.classList.remove('w--current'));
      tabPanes.forEach(p => p.classList.remove('w--tab-active'));

      // Set new active
      link.classList.add('w--current');
      if (tabPanes[idx]) {
        tabPanes[idx].classList.add('w--tab-active');
      }
    });
  });

  // 4. SKILLS SECTION VIDEO PLAY / PAUSE
  const playBtn = document.getElementById('play');
  const pauseBtn = document.getElementById('pause');
  const campusVideo = document.getElementById('campus-video');
  const videoIframe = document.getElementById('vimeo-player');

  const videoNav = document.querySelector('.skills__video-nav');
  if (videoNav) {
    videoNav.addEventListener('click', () => {
      if (campusVideo) {
        if (campusVideo.paused) {
          campusVideo.play();
          pauseBtn.classList.add('active');
          playBtn.classList.remove('active');
        } else {
          campusVideo.pause();
          pauseBtn.classList.remove('active');
          playBtn.classList.add('active');
        }
      } else if (videoIframe) {
        const isPlaying = pauseBtn.classList.contains('active');
        if (isPlaying) {
          pauseBtn.classList.remove('active');
          playBtn.classList.add('active');
          videoIframe.contentWindow.postMessage('{"method":"pause"}', '*');
        } else {
          pauseBtn.classList.add('active');
          playBtn.classList.remove('active');
          videoIframe.contentWindow.postMessage('{"method":"play"}', '*');
        }
      }
    });
  }

  // 5. TESTIMONIAL REVIEWS SLIDER
  const prevBtn = document.querySelector('[data-swiper="reviews-prev"]');
  const nextBtn = document.querySelector('[data-swiper="reviews-next"]');
  const reviewCards = document.querySelectorAll('.reviews__card');
  let currentReviewPage = 0;
  const reviewsPerPage = 4;
  const totalReviews = reviewCards.length;

  function updateReviewsDisplay() {
    reviewCards.forEach((card, i) => {
      if (window.innerWidth > 991) {
        if (i >= currentReviewPage * reviewsPerPage && i < (currentReviewPage + 1) * reviewsPerPage) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      } else {
        card.style.display = 'flex';
      }
    });
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      const maxPages = Math.ceil(totalReviews / reviewsPerPage) - 1;
      if (currentReviewPage < maxPages) {
        currentReviewPage++;
      } else {
        currentReviewPage = 0;
      }
      nextBtn.classList.add('mod--active');
      setTimeout(() => nextBtn.classList.remove('mod--active'), 350);
      updateReviewsDisplay();
    });

    prevBtn.addEventListener('click', () => {
      const maxPages = Math.ceil(totalReviews / reviewsPerPage) - 1;
      if (currentReviewPage > 0) {
        currentReviewPage--;
      } else {
        currentReviewPage = maxPages;
      }
      prevBtn.classList.add('mod--active');
      setTimeout(() => prevBtn.classList.remove('mod--active'), 350);
      updateReviewsDisplay();
    });

    updateReviewsDisplay();
    window.addEventListener('resize', updateReviewsDisplay);
  }

  // 6. MODAL (Only explicit modal trigger like Parent Portal)
  const modalOverlay = document.getElementById('enrollModal');
  const modalClose = modalOverlay ? modalOverlay.querySelector('.modal__close') : null;
  const modalTriggers = document.querySelectorAll('[data-remodal-target="form"], .mod--login');

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Course card click: Fast smooth scroll to Admissions & pre-fill grade
  document.querySelectorAll('.category__card').forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const title = this.querySelector('.category__card-title') ? this.querySelector('.category__card-title').textContent.trim() : '';
      const monthOrGrade = this.querySelector('.category__card-month') ? this.querySelector('.category__card-month').textContent.trim() : '';
      
      const admissionsSection = document.getElementById('admissions');
      if (admissionsSection) {
        const headerOffset = 70;
        const targetPos = admissionsSection.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });

        // Pre-fill enquiry form message
        const msgField = document.getElementById('enquiryMessage');
        const gradeSelect = document.getElementById('gradeLevel');
        if (msgField && title) {
          msgField.value = `I am interested in learning more about "${title}" (${monthOrGrade}). Please provide syllabus and enrolment details.`;
        }
        if (gradeSelect) {
          if (monthOrGrade.includes('K') || monthOrGrade.includes('1') || monthOrGrade.includes('2') || monthOrGrade.includes('3')) {
            gradeSelect.value = 'Primary';
          } else if (monthOrGrade.includes('4') || monthOrGrade.includes('5') || monthOrGrade.includes('6') || monthOrGrade.includes('7') || monthOrGrade.includes('8')) {
            gradeSelect.value = 'Middle';
          } else if (monthOrGrade.includes('9') || monthOrGrade.includes('10') || monthOrGrade.includes('11') || monthOrGrade.includes('12')) {
            gradeSelect.value = 'Senior';
          }
        }

        const nameField = document.getElementById('studentName');
        if (nameField) {
          setTimeout(() => nameField.focus(), 600);
        }
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('is-open')) {
      closeModal();
    }
  });

  function openModal() {
    if (modalOverlay) {
      modalOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      const input = modalOverlay.querySelector('input[type="email"]');
      if (input) setTimeout(() => input.focus(), 200);
    }
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  // Modal Form Submission
  const modalForm = document.getElementById('modalTrialForm');
  const modalSuccess = document.getElementById('modalSuccessMsg');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = modalForm.querySelector('input').value;
      if (email) {
        modalForm.style.display = 'none';
        modalSuccess.style.display = 'block';
        modalSuccess.textContent = `🎉 Thank you! Admissions packet & campus tour details sent to ${email}`;
        setTimeout(() => {
          closeModal();
          setTimeout(() => {
            modalForm.reset();
            modalForm.style.display = 'flex';
            modalSuccess.style.display = 'none';
          }, 400);
        }, 3000);
      }
    });
  }

  // Footer Newsletter Form
  const footerForm = document.getElementById('wf-form-footer');
  if (footerForm) {
    footerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = footerForm.querySelector('.footer__input, .input.mod--footer');
      const successMsg = footerForm.querySelector('.footer__form-success');
      const doneBox = footerForm.nextElementSibling;
      if (input && input.value.trim() !== '') {
        if (successMsg) {
          successMsg.style.display = 'block';
        } else if (doneBox) {
          doneBox.style.display = 'block';
          doneBox.textContent = '🎉 Thank you! You have subscribed to Jackson School updates.';
        }
        input.value = '';
        setTimeout(() => {
          if (successMsg) successMsg.style.display = 'none';
        }, 5000);
      }
    });
  }

  // Hero Search Form
  const heroForm = document.getElementById('wf-form-Find');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = document.getElementById('Find').value.trim().toLowerCase();
      if (query) {
        const catSection = document.getElementById('academics');
        if (catSection) {
          catSection.scrollIntoView({ behavior: 'smooth' });
          // Highlight cards matching query
          let found = false;
          document.querySelectorAll('.category__card-title').forEach(t => {
            const card = t.closest('.category__card');
            if (t.textContent.toLowerCase().includes(query)) {
              card.style.outline = '3px solid #97c680';
              card.style.transform = 'scale(1.04)';
              found = true;
              setTimeout(() => {
                card.style.outline = '';
                card.style.transform = '';
              }, 3000);
            }
          });
          if (!found) {
            openModal();
          }
        }
      }
    });
  }

  // 8. ADMISSION ENQUIRY FORM VALIDATION & SUBMISSION
  const admissionForm = document.getElementById('admissionEnquiryForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('studentName');
      const emailInput = document.getElementById('parentEmail');
      const phoneInput = document.getElementById('contactPhone');
      const gradeSelect = document.getElementById('gradeLevel');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const phoneError = document.getElementById('phoneError');
      const gradeError = document.getElementById('gradeError');
      const successBanner = document.getElementById('enquirySuccessBanner');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.style.display = 'block';
        nameInput.style.borderColor = '#dc2626';
        isValid = false;
      } else {
        nameError.style.display = 'none';
        nameInput.style.borderColor = '#eaeaea';
      }

      // Validate Email (standard email regex)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        emailInput.style.borderColor = '#dc2626';
        isValid = false;
      } else {
        emailError.style.display = 'none';
        emailInput.style.borderColor = '#eaeaea';
      }

      // Validate Phone (at least 10 digits)
      const phoneDigits = phoneInput.value.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        phoneError.style.display = 'block';
        phoneInput.style.borderColor = '#dc2626';
        isValid = false;
      } else {
        phoneError.style.display = 'none';
        phoneInput.style.borderColor = '#eaeaea';
      }

      // Validate Grade Level
      if (!gradeSelect.value) {
        gradeError.style.display = 'block';
        gradeSelect.style.borderColor = '#dc2626';
        isValid = false;
      } else {
        gradeError.style.display = 'none';
        gradeSelect.style.borderColor = '#eaeaea';
      }

      if (isValid) {
        const studentName = nameInput.value.trim();
        const parentEmail = emailInput.value.trim();
        const grade = gradeSelect.options[gradeSelect.selectedIndex].text;

        successBanner.innerHTML = `🎉 <strong>Enquiry Received!</strong> Thank you for your interest in Jackson School. We have sent the admission packet for <strong>${studentName} (${grade})</strong> to <strong>${parentEmail}</strong>. Our admissions counselor will contact you within 24 hours.`;
        successBanner.style.display = 'block';

        const submitBtn = admissionForm.querySelector('.btn.mod--submit-enquiry');
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.textContent = 'Enquiry Received ✓';

        setTimeout(() => {
          admissionForm.reset();
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          submitBtn.textContent = 'Submit Admission Enquiry';
          setTimeout(() => {
            successBanner.style.display = 'none';
          }, 8000);
        }, 5000);
      }
    });
  }

  // 7. MOBILE MENU TOGGLE
  const hamburger = document.querySelector('.header__btn-menu');
  const mobileMenu = document.querySelector('.menu');
  const mobileLinks = document.querySelectorAll('.menu .nav__link, .menu .btn-border, .menu .btn');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('is-open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('is-open');
      });
    });
  }

  // 9. SCROLLSPY (Highlight active section in navbar)
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav__link[href^="#"]');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = '#' + section.getAttribute('id');
      }
    });

    allNavLinks.forEach(link => {
      if (link.getAttribute('href') === currentSection) {
        link.classList.add('nav-link--active');
      } else {
        link.classList.remove('nav-link--active');
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
