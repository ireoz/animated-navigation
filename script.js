const hamburger = document.getElementById('hamburger-container');
const nav = document.getElementById('nav');

function toggleNavHideShow(x) {
    x.classList.toggle('change');
    nav.classList.toggle('nav-slide-right');
    
}