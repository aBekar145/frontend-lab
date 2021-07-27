const searchButton = document.getElementById('search-btn');
const menuButton = document.getElementById('burger-menu-btn');
const overlayContainer = document.getElementById('overlay');
const closeOverlayButton = document.getElementById('overlay-close-btn');
const cardsList = document.getElementById('cards-list');
const overlayClass = 'closed-overlay-container';
const responsiveClass = 'closed-responsive-navigation';
let navigationIsClosed = true;
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const showNumberPage = document.getElementById('page-num');
let numberPage = 1;
const limit = 10;
const deleteCardsList = document.getElementById('delete-cards-list');
deleteCardsList.remove();

function toggleOverlay() {
    overlayContainer.classList.toggle(overlayClass);
}

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

async function sendApiRequest(page) {
    let numberOffset = page === 1 ? 0 : --page * limit;
    const apiKey = 'DDmMIaeRZcddi8NShzyljNpXQ7EOvz6y';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dogs&limit=${limit}&offset=${numberOffset}`;
    let response = await fetch(url);
    let gifData = await response.json();
    let content = gifData.data;
    const htmlForRepo = content.map((element) => createHtmlTemplate(element));
    cardsList.innerHTML = '';
    cardsList.insertAdjacentHTML('afterbegin', htmlForRepo.join(''));
    showNumberPage.innerHTML = numberPage;
}

prev.addEventListener('click', function () {
    numberPage--;
    sendApiRequest(numberPage);
    check();
});

next.addEventListener('click', function () {
    numberPage++;
    sendApiRequest(numberPage);
    check();
});

function check() {
    if (numberPage == 1) {
        prev.classList.add('disabled');
    } else {
        prev.classList.remove('disabled');
    }
}

function createHtmlTemplate(item) {
    return `
    <li class="cards__list-item">
        <div class="card">
            <div class="card__container-img">
                <img class="card__container-img-picture" src="${item.images.downsized.url}" alt="image">
                <div class="overlay-button-block">
                    <div class="overlay-button-block__btn">
                        <a class="fas fa-link" href="${item.url}"></a>
                    </div>
                </div>
            </div>
            <div class="card__description">
                <h3 class="card__description-sub-title sub-title">
                    ${item.title}
                </h3>
                <p class="card__description-date">
                    ${item.import_datetime}
                </p>
                <p class="card__description-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias, deleniti, id quibusdam aut optio saepe soluta tempore neque voluptatum.
                </p>
            </div>
        </div>
    </li>`;
}

window.onload = function () {
    sendApiRequest(numberPage);
    check();
};
