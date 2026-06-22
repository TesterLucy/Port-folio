// ─── Switch de idioma ─────────────────────────────────────────────
function switchLang(lang, btn) {
  // Cambiar contenido principal
  document.querySelectorAll('.lang-content').forEach(el => el.classList.add('hidden'));
  const target = document.getElementById('content-' + lang);
  if (target) target.classList.remove('hidden');

  // Cambiar botones
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Traducir secciones estáticas
  const isEn = lang === 'en';

  document.getElementById('compare-label').textContent = isEn ? '// technical comparison' : '// comparativa técnica';
  document.getElementById('conclusions-label').textContent = isEn ? '// key findings' : '// conclusiones';

  const conclusions = {
    c1: {
      es: 'La EFI muestra menor consumo medio y mayor autonomía en tanques de 11L bajo condiciones simuladas.',
      en: 'EFI shows lower average consumption and greater range on 11L tanks under simulated conditions.'
    },
    c2: {
      es: 'El carburador es menos preciso ante variaciones de altitud, temperatura y densidad del aire.',
      en: 'Carburetors are less precise under altitude, temperature and air density variations.'
    },
    c3: {
      es: 'La diferencia de rendimiento es más notoria en condiciones de páramo y baja temperatura.',
      en: 'The performance difference is most pronounced in high-altitude cold conditions (páramo).'
    },
    c4: {
      es: 'Monte Carlo permitió explorar el espacio combinatorio de variables (RPM, TPS, IAT, MAP) de forma eficiente.',
      en: 'Monte Carlo enabled efficient exploration of the combinatorial variable space (RPM, TPS, IAT, MAP).'
    }
  };

  for (const [id, texts] of Object.entries(conclusions)) {
    const el = document.getElementById(id);
    if (el) el.textContent = texts[lang];
  }
}

// ─── Animación de entrada para secciones ─────────────────────────
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

sections.forEach(s => {
  s.style.opacity = '0';
  s.style.transform = 'translateY(24px)';
  s.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(s);
});
let codeLoaded = false;

function showFile(type, btn) {
  document.querySelectorAll('.file-viewer').forEach(v => v.classList.add('hidden'));
  document.querySelectorAll('.file-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('viewer-' + type).classList.remove('hidden');
  btn.classList.add('active');

  // ----- CAMBIO: abrir GitHub en vez de cargar localmente el .py -----
  if (type === 'code') {
    // Reemplaza por la URL real de tu archivo en GitHub (ejemplo apunta a main)
    const GITHUB_PY_URL = 'https://github.com/TesterLucy/SimulacionCarburadorVSFullInyection.git';

    // Abrir en nueva pestaña
    window.open(GITHUB_PY_URL, '_blank');

    // Mostrar mensaje temporal en el visor (opcional)
    const block = document.getElementById('code-block');
    if (block) {
      block.textContent = 'Opening code on GitHub...';
    }

    // No intentamos hacer fetch localmente
    return;
  }

  // Mantener la lógica anterior para PDF u otros tipos si es necesario
  if (type === 'pdf') {
    // el iframe ya apunta al PDF; nada extra a hacer aquí
  }
}