//mobile menu
const menuIcon = document.querySelector('.nav__icon-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  })
})