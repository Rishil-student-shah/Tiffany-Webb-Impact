/**
 * motion.js
 * Implements lightweight vanilla JS motion without external libraries (per FILE 3).
 * Uses IntersectionObserver for scroll reveals and CSS keyframes for complex sequences.
 */

// 1. Generic Reveal Observer (fade-up, fade-in, etc.)
export function initReveals() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // Optional: stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  });

  const elements = document.querySelectorAll('.reveal-up, .reveal-in');
  elements.forEach((el) => observer.observe(el));
}

// 2. Stagger Group Observer (reveals children with delay)
export function initStaggerGroups() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('.stagger-item');
        children.forEach((child, index) => {
          // Cap stagger delay per FILE 3 (no more than 350ms total for large groups)
          const delay = Math.min(index * 100, 350); 
          setTimeout(() => {
            child.classList.add('is-revealed');
          }, delay);
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  });

  const groups = document.querySelectorAll('.stagger-group');
  groups.forEach((group) => observer.observe(group));
}

// 3. CountUp Utility for stats
export function initCountUp() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (prefersReducedMotion) {
          entry.target.textContent = entry.target.dataset.target;
        } else {
          animateCountUp(entry.target);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const elements = document.querySelectorAll('.count-up');
  elements.forEach((el) => observer.observe(el));
}

function animateCountUp(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1500; // ms
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);
  const easeOutQuad = t => t * (2 - t);
  
  let frame = 0;
  const counter = setInterval(() => {
    frame++;
    const progress = easeOutQuad(frame / totalFrames);
    const current = Math.round(target * progress);
    
    el.textContent = current;
    
    if (frame === totalFrames) {
      clearInterval(counter);
      el.textContent = target; // Ensure exact final value
    }
  }, frameDuration);
}

// Global initialization
export function initAllMotion() {
  initReveals();
  initStaggerGroups();
  initCountUp();
  initScaleReveals();
  initParallax();
}

function initScaleReveals() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -5% 0px',
    threshold: 0.1
  });

  const elements = document.querySelectorAll('.scale-reveal');
  elements.forEach((el) => observer.observe(el));
}

function initParallax() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const parallaxElements = document.querySelectorAll('.parallax-img');
  
  if (parallaxElements.length === 0) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Request animation frame for smooth performance
    window.requestAnimationFrame(() => {
      parallaxElements.forEach((el) => {
        // Calculate a speed factor (can be read from data-speed if we want)
        const speed = el.dataset.speed ? parseFloat(el.dataset.speed) : 0.15;
        // Basic translation down as you scroll down
        const yPos = scrollY * speed;
        el.style.transform = `translateY(${yPos}px)`;
      });
    });
  }, { passive: true });
}
