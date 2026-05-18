// ============================================
// PORTFOLIO INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {

  // ----- TYPEWRITER EFFECT ON HERO -----
  const typewriterEl = document.querySelector('.typewriter-hero');
  if (typewriterEl) {
    const fullText = typewriterEl.textContent.trim();
    typewriterEl.innerHTML = '<span class="typewriter-text"></span><span class="typewriter-cursor"></span>';
    const textSpan = typewriterEl.querySelector('.typewriter-text');
    let charIndex = 0;

    function typeChar() {
      if (charIndex < fullText.length) {
        textSpan.textContent += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 60); // typing speed in ms per character
      } else {
        // Hide cursor 1.5s after typing finishes
        setTimeout(() => {
          typewriterEl.classList.add('typewriter-done');
        }, 1500);
      }
    }

    // Start typing after a short delay
    setTimeout(typeChar, 400);
  }

  // ----- SCROLL FADE-IN -----
  const fadeElements = document.querySelectorAll(
    '.md-typeset h2, .md-typeset .grid.cards, .fade-in-section'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // animate once, then stop watching
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for old browsers: show everything immediately
    fadeElements.forEach(el => el.classList.add('is-visible'));
  }

});
