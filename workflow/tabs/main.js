const frontendTools = [
    {
        id: 1,
        title: 'JavaScript',
        content:
            'JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.',
    },
    {
        id: 2,
        title: 'jQuery',
        content:
            'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.',
    },
    {
        id: 3,
        title: 'DOM',
        content:
            'The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications.',
    },
    {
        id: 4,
        title: 'CSS',
        content:
            'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
    },
];

const tabsList = document.getElementById('tabs-content-list');
const tabsNavigation = document.getElementById('tabs-nav-block');

const createButtonsTemplate = ({ title, id }) => {
    return `
    <button class="tabs__nav-btn" type="button" data-tab="#tab-${id}">${title}</button>
    `;
};

const createDescriptionTemplate = ({ id, content }) => {
    return `
    <li class="tabs__item" id="tab-${id}">
        <p>
           ${content}
        </p>
    </li>`;
};

const getToolsData = () => {
    const htmlForTabs = frontendTools.map((element) =>
        createDescriptionTemplate(element)
    );
    const htmlForButtons = frontendTools.map((element) =>
        createButtonsTemplate(element)
    );
    tabsList.insertAdjacentHTML('afterbegin', htmlForTabs.join(''));
    tabsNavigation.insertAdjacentHTML('afterbegin', htmlForButtons.join(''));
};

getToolsData();

const tabsButton = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsButton.forEach((item) => {
    item.addEventListener('click', () => {
        const currentButton = item;
        const tabId = currentButton.getAttribute('data-tab');
        const currentTab = document.querySelector(tabId);
        if (!currentButton.classList.contains('active')) {
            tabsButton.forEach((item) => {
                item.classList.remove('active');
            });
            tabsItems.forEach((item) => {
                item.classList.remove('active');
            });
            currentButton.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});

document.querySelector('.tabs__nav-btn').click();
