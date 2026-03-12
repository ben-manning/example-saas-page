const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = navLinks.classList.toggle('is-open');
  toggle.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) closeMenu();
});

function closeMenu() {
  navLinks.classList.remove('is-open');
  toggle.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', false);
}