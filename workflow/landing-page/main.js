const searchButton = document.getElementById('search-btn');
const menuButton = document.getElementById('burger-menu-btn');
const overlayContainer = document.getElementById('overlay');
const closeOverlayButton = document.getElementById('overlay-close-btn');
const cardsList = document.getElementById('cards-list');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const showNumberPage = document.getElementById('page-num');

const overlayClass = 'closed-overlay-container';
const responsiveClass = 'closed-responsive-navigation';
const API_KEY = 'DDmMIaeRZcddi8NShzyljNpXQ7EOvz6y';

let navigationIsClosed = true;
let numberPage = 1;
const limit = 10;

const toggleOverlay = () => {
    overlayContainer.classList.toggle(overlayClass);
};

searchButton.addEventListener('click', toggleOverlay);

closeOverlayButton.addEventListener('click', toggleOverlay);

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

const generateUrl = (page) => {
    const offsetAmount = page === 1 ? 0 : --page * limit;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=dogs&limit=${limit}&offset=${offsetAmount}`;
    return url;
};

async function getGifsData(currentPage = 1) {
    try {
        const response = await fetch(generateUrl(currentPage));
        const gifData = await response.json();
        const content = gifData.data;
        const htmlForRepo = content.map((element) =>
            createHtmlTemplate(element)
        );
        cardsList.innerHTML = '';
        cardsList.insertAdjacentHTML('afterbegin', htmlForRepo.join(''));
    } catch (err) {
        console.error(err);
    }
    showNumberPage.innerHTML = numberPage;
    return cardsList;
}

prev.addEventListener('click', function () {
    numberPage--;
    getGifsData(numberPage);
    disablePrevButton();
});

next.addEventListener('click', function () {
    numberPage++;
    getGifsData(numberPage);
    disablePrevButton();
});

const disablePrevButton = () =>
    numberPage == 1
        ? prev.classList.add('disabled')
        : prev.classList.remove('disabled');

const createHtmlTemplate = ({
    images,
    embed_url: url,
    title,
    import_datetime: date,
}) => {
    return `
    <li class="cards__list-item">
        <div class="card">
            <div class="card__container-img">
                <img class="card__container-img-picture" src="${images.downsized.url}" alt="image">
                <div class="overlay-button-block">
                    <div class="overlay-button-block__btn">
                        <a class="fas fa-link" href="${url}" target="_blank"></a>
                    </div>
                </div>
            </div>
            <div class="card__description">
                <h3 class="card__description-sub-title sub-title">
                    ${title}
                </h3>
                <p class="card__description-date">
                    ${date}
                </p>
                <p class="card__description-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias, deleniti, id quibusdam aut optio saepe soluta tempore neque voluptatum.
                </p>
            </div>
        </div>
    </li>`;
};

window.onload = () => {
    getGifsData();
    disablePrevButton();
};
