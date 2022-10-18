const hamburger = document.getElementById('hamburger-container');
const overlay = document.getElementById('overlay');
// create nodelist of each anchor link nav item
const links = document.querySelectorAll('.onClickEvent');

function toggleMenuBarToHideShowNavItems() {
    // toggle: menu bars open/close
    hamburger.classList.toggle('change');
    // toggle: menu Active
    hamburger.classList.contains('change') ? displayOverlayAndNavItems([1,2,3,4,5]) : removeOverlayAndNavItems([1,2,3,4,5]); 
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
    // if function is triggered by 'click' event listener on anchor nav links we must also remove change class from hamburger js variable element.
    if(hamburger.classList.contains('change')) hamburger.classList.remove('change')
    // replace class on overlay js variable element to hide html overlay
    overlay.classList.replace('overlay-active', 'overlay-hidden');
    //  For each loop to iterate over each nav item (nav-1...nav-5)
    navlist.forEach(item => {
        // get each nav item element within the DOM
        let nav = document.getElementById(`nav-${item}`);
        // set class on each nav item element to apply reverse css animation.
        nav.classList.replace(`nav-${item}-animation`, `nav-${item}-animation-reverse`);
    })
}


// to hide overlay and induce reverse css animation of nav items when an anchor nav item link is clicked.
links.forEach(link => link.addEventListener('click', () => {
    removeOverlayAndNavItems([1,2,3,4,5])
}));