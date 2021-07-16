const searchButton = document.querySelector('#search-btn');
const menuButton = document.querySelector('#burger-menu-btn');
const overlayContainer = document.querySelector('#overlay');
const closeOverlayButton = document.querySelector('#overlay-close-btn');
let navigationIsClosed = true;

searchButton.addEventListener('click', () => {
    overlayContainer.classList.remove('closed-overlay-container');
});

closeOverlayButton.addEventListener('click', () => {
    overlayContainer.classList.add('closed-overlay-container');
});

menuButton.addEventListener('click', () => {
    const responsiveNavigation = document.querySelector(
        '#responsive-navigation'
    );
    if (navigationIsClosed) {
        responsiveNavigation.classList.remove('closed-responsive-navigation');
        navigationIsClosed = false;
    } else {
        responsiveNavigation.classList.add('closed-responsive-navigation');
        navigationIsClosed = true;
    }
});
