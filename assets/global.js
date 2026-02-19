/*
 * SCOTCH MONKEY — global.js
 * Shared utilities and scroll animations
 */

(function() {
  'use strict';

  /* --- Scroll animation observer --- */
  const animatedElements = document.querySelectorAll('.animate-fade-in-up');

  if (animatedElements.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = '0.1s';
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(function(el) {
      observer.observe(el);
    });
  }
})();
```

**Command:**
Create `assets/global.js` and paste. Save.

---

## Now test it

Run the dev server:
```
cd C:\Users\Bobby\scotch-monkey-theme
shopify theme dev --store scotch-monkey.myshopify.com