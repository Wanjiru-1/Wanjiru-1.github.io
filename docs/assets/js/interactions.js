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

function animateProjectDirectory() {
  const directory = document.querySelector('.project-directory');
  if (!directory || directory.dataset.typing || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  directory.dataset.typing = 'ready';
  const links = Array.from(directory.querySelectorAll('.project-category'));
  const labels = links.map(link => link.textContent.trim());
  links.forEach((link, i) => link.setAttribute('aria-label', labels[i]));

  function start() {
    let index = 0;
    let length = 0;
    links.forEach(link => { link.textContent = '\u00a0'; });
    function type() {
      const link = links[index];
      link.classList.add('typing');
      link.textContent = labels[index].slice(0, ++length);
      if (length < labels[index].length) {
        window.setTimeout(type, 60);
      } else {
        link.classList.remove('typing');
        index++;
        length = 0;
        if (index < links.length) window.setTimeout(type, 250);
      }
    }
    window.setTimeout(type, 350);
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        observer.disconnect();
        start();
      }
    });
    observer.observe(links[0]);
  } else {
    start();
  }
}

if (typeof document$ !== 'undefined') {
  document$.subscribe(animateProjectDirectory);
} else if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateProjectDirectory);
} else {
  animateProjectDirectory();
}
