const searchButton = document.getElementById('search-btn');
const menuButton = document.getElementById('burger-menu-btn');
const overlayContainer = document.getElementById('overlay');
const closeOverlayButton = document.getElementById('overlay-close-btn');
const overlayClass = 'closed-overlay-container';
const responsiveClass = 'closed-responsive-navigation';
let navigationIsClosed = true;

function toggleOverlay() {
    return overlayContainer.classList.toggle(overlayClass);
}

searchButton.addEventListener('click', () => {
    toggleOverlay();
});

closeOverlayButton.addEventListener('click', () => {
    toggleOverlay();
});

menuButton.addEventListener('click', () => {
    const responsiveNavigation = document.getElementById(
        'responsive-navigation'
    );
    if (navigationIsClosed) {
        responsiveNavigation.classList.remove(responsiveClass);
        navigationIsClosed = false;
    } else {
        responsiveNavigation.classList.add(responsiveClass);
        navigationIsClosed = true;
    }
});
