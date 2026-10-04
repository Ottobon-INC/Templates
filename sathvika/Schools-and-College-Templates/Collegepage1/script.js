// script.js
document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Simple Parallax Effect for specific elements
    const parallaxSlow = document.querySelectorAll('.parallax-slow');
    const parallaxFast = document.querySelectorAll('.parallax-fast');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        parallaxSlow.forEach(el => {
            el.style.transform = `translateY(${scrollY * 0.05}px)`;
        });

        parallaxFast.forEach(el => {
            el.style.transform = `translateY(${scrollY * 0.1}px)`;
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Count Up Animation for stats
    const stats = document.querySelectorAll('.stat h3');
    let hasCounted = false;

    const countObserver = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting && !hasCounted) {
            hasCounted = true;
            stats.forEach(stat => {
                const finalStr = stat.innerText;
                const finalNum = parseInt(finalStr.replace(/[^0-9]/g, ''));
                const suffix = finalStr.replace(/[0-9]/g, '');
                
                let currentNum = 0;
                const increment = Math.ceil(finalNum / 50);
                const timer = setInterval(() => {
                    currentNum += increment;
                    if(currentNum >= finalNum) {
                        stat.innerText = finalNum + suffix;
                        clearInterval(timer);
                    } else {
                        stat.innerText = currentNum + suffix;
                    }
                }, 40);
            });
        }
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if(heroStats) {
        countObserver.observe(heroStats);
    }
});
