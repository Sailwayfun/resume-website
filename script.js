const topBar = document.querySelector('.top-bar');
const toggleButton = document.getElementById('theme-toggle');

function handleScroll() {
  if (!topBar) return;
  const shouldFloat = window.scrollY > 10;
  topBar.classList.toggle('floating', shouldFloat);
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === 'light') {
    root.classList.add('light');
    toggleButton.innerText = '☀️';
  } else {
    root.classList.remove('light');
    toggleButton.innerText = '🌙';
  }
}

function initTheme() {
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const mode = stored || (prefersLight ? 'light' : 'dark');
  applyTheme(mode);
}

toggleButton?.addEventListener('click', () => {
  const isLight = document.documentElement.classList.contains('light');
  const next = isLight ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

initTheme();
