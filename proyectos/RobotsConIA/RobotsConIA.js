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
}, { threshold: 0.07 });

document.querySelectorAll('.section[data-animate]').forEach(el => observer.observe(el));

// ── Barra de precisión animada ──────────────────────────────
const accObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.accuracy-fill');
      if (fill) {
        const target = parseFloat(fill.getAttribute('data-target')) || 96.13;
        fill.style.width = target + '%';
        fill.textContent = target + '%';
      }
      accObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.accuracy-bar-wrap').forEach(el => accObserver.observe(el));

// ── Topbar scroll shadow ────────────────────────────────────
window.addEventListener('scroll', () => {
  document.querySelector('.topbar').style.boxShadow =
    window.scrollY > 10
      ? '0 2px 20px rgba(0,0,0,0.9), 0 0 30px rgba(0,229,255,0.03)'
      : 'none';
});