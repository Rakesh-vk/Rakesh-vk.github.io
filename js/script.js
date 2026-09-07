document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 8) {
    nav.style.boxShadow = '0 1px 0 rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
