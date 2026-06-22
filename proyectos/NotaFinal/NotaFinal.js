// ── Idioma activo ───────────────────────────────────────────
let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;

  // Actualizar botones
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  // Actualizar todos los elementos con data-es / data-en
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });

  // Actualizar lang del html
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
    ? '0 2px 12px rgba(0,0,0,0.3)'
    : 'none';
});