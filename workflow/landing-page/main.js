const searchButton = document.querySelector('#search-btn');
const menuButton = document.querySelector('#burger-menu-btn');
const overlayContainer = document.querySelector('#overlay');
const closeOverlayButton = document.querySelector(
    '.overlay-container__close-button'
);
let navigationIsClosed = true;

searchButton.addEventListener('click', () => {
    overlayContainer.classList.remove('closed-overlay-container');
});

closeOverlayButton.addEventListener('click', () => {
    overlayContainer.classList.add('closed-overlay-container');
});
