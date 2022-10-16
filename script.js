const hamburger = document.getElementById('hamburger-container');
const overlay = document.getElementById('overlay');
const nav = document.getElementById('nav');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNavHideShow(x) {
    // toggle: menu bars open/close
    x.classList.toggle('change');
    // toggle: menu Active
    x.classList.contains('change') ? displayOverlayAndNavItems() : removeOverlayAndNavItems(); 
    }

function displayOverlayAndNavItems() {
    overlay.classList.contains('overlay-hidden') ? (overlay.classList.remove('overlay-hidden'), overlay.classList.add('overlay-active')) : overlay.classList.add('overlay-active');

    nav1.classList.contains('nav-1-animation-reverse') ? (nav1.classList.remove('nav-1-animation-reverse'), nav1.classList.add('nav-1-animation')) : nav1.classList.add('nav-1-animation');
    nav2.classList.contains('nav-2-animation-reverse') ? (nav2.classList.remove('nav-2-animation-reverse'), nav2.classList.add('nav-2-animation')) : nav2.classList.add('nav-2-animation');
    nav3.classList.contains('nav-3-animation-reverse') ? (nav3.classList.remove('nav-3-animation-reverse'), nav3.classList.add('nav-3-animation')) : nav3.classList.add('nav-3-animation');
    nav4.classList.contains('nav-4-animation-reverse') ? (nav4.classList.remove('nav-4-animation-reverse'), nav4.classList.add('nav-4-animation')) : nav4.classList.add('nav-4-animation');
    nav5.classList.contains('nav-5-animation-reverse') ? (nav5.classList.remove('nav-5-animation-reverse'), nav5.classList.add('nav-5-animation')) : nav5.classList.add('nav-5-animation');
}

function removeOverlayAndNavItems() {
    overlay.classList.remove('overlay-active');
    overlay.classList.add('overlay-hidden');
    // nav 1 item
    nav1.classList.add('nav-1-animation-reverse');
    nav1.classList.remove('nav-1-animation');
    // nav 2 item
    nav2.classList.add('nav-2-animation-reverse');
    nav2.classList.remove('nav-2-animation');
    // nav 3 item
    nav3.classList.add('nav-3-animation-reverse');
    nav3.classList.remove('nav-3-animation');
    // nav 4 item
    nav4.classList.add('nav-4-animation-reverse');
    nav4.classList.remove('nav-4-animation');
    // nav 5 item
    nav5.classList.add('nav-5-animation-reverse');
    nav5.classList.remove('nav-5-animation');
}