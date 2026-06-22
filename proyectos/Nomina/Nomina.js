// ── Idioma activo ───────────────────────────────────────────
let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });

  document.documentElement.lang = lang;
}

// ── Animaciones de entrada por scroll ──────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section[data-animate]').forEach(el => {
  observer.observe(el);
});

// ── Efecto scroll en topbar ─────────────────────────────────
window.addEventListener('scroll', () => {
  const topbar = document.querySelector('.topbar');
  topbar.style.boxShadow = window.scrollY > 10
    ? '0 2px 8px rgba(0,0,0,0.4)'
    : 'none';
});