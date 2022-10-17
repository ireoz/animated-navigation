const hamburger = document.getElementById('hamburger-container');
const overlay = document.getElementById('overlay');
const nav = document.getElementById('nav');

function toggleNavHideShow(x) {
    // toggle: menu bars open/close
    x.classList.toggle('change');
    // toggle: menu Active
    x.classList.contains('change') ? displayOverlayAndNavItems([1,2,3,4,5]) : removeOverlayAndNavItems([1,2,3,4,5]); 
    }


function displayOverlayAndNavItems(navList) {
    // display overlay 
    overlay.classList.contains('overlay-hidden') ? (overlay.classList.remove('overlay-hidden'), overlay.classList.add('overlay-active')) : overlay.classList.add('overlay-active');
    // For each loop to iterate over each nav item (nav-1...nav-5) 
    navList.forEach(item => {
        // get each nav item element within the DOM
        let nav = document.getElementById(`nav-${item}`); 
        // set class on each nav item element to apply css animation.
        nav.classList.contains(`nav-${item}-animation-reverse`) ? nav.classList.replace(`nav-${item}-animation-reverse`, `nav-${item}-animation`) : nav.classList.add(`nav-${item}-animation`);    
    })
};


function removeOverlayAndNavItems(navlist) {
    // update class to hide overlay
    overlay.classList.replace('overlay-active', 'overlay-hidden');
    //  For each look to iterate over each nav item (nav-1...nav-5)
    navlist.forEach(item => {
        // get each nav item element within the DOM
        let nav = document.getElementById(`nav-${item}`);
        // set class on each nav item element to apply reverse css animation.
        nav.classList.replace(`nav-${item}-animation`, `nav-${item}-animation-reverse`);
    })
}



