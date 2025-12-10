const topBar = document.querySelector('.top-bar');

function handleScroll() {
  if (!topBar) return;
  const shouldFloat = window.scrollY > 10;
  topBar.classList.toggle('floating', shouldFloat);
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();
