/* Menu show/hide */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Active link on scroll */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* Change header shadow on scroll */
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* Dark light theme */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';

if (localStorage.getItem('selected-theme') === 'dark') {
    document.body.classList.add(darkTheme);
    themeButton.classList.add('fas fa-sun');
    themeButton.classList.remove('fas fa-moon');
} else {
    themeButton.classList.add('fas fa-moon');
    themeButton.classList.remove('fas fa-sun');
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    if (document.body.classList.contains(darkTheme)) {
        themeButton.classList.add('fas fa-sun');
        themeButton.classList.remove('fas fa-moon');
        localStorage.setItem('selected-theme', 'dark');
    } else {
        themeButton.classList.add('fas fa-moon');
        themeButton.classList.remove('fas fa-sun');
        localStorage.setItem('selected-theme', 'light');
    }
});