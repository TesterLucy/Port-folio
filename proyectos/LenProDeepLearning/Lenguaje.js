// ── Idioma ──────────────────────────────────────────────────
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

// ── Scroll animations ───────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.06 });

document.querySelectorAll('.section[data-animate]').forEach(el => observer.observe(el));

// ── Topbar scroll ───────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.querySelector('.topbar').style.boxShadow =
    window.scrollY > 10
      ? '0 2px 20px rgba(0,0,0,0.95), 0 0 20px rgba(0,255,65,0.03)'
      : 'none';
});

// ── Cursor blink en terminal hero ───────────────────────────
// Ya manejado por CSS animation. No se requiere JS adicional.