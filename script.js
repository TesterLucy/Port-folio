// ─── Highlight header on scroll ───────────────────────────────
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.background = 'rgba(10,15,30,0.97)';
  } else {
    header.style.background = 'rgba(10,15,30,0.85)';
  }
});

// ─── Animación de entrada para las cards (Intersection Observer) ──
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});
// ── Idioma ───────────────────────────────────────────────────
let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;

  // Actualizar botones activos
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
  });

  // Traducir todos los elementos con data-es / data-en
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });

  document.documentElement.lang = lang;
}