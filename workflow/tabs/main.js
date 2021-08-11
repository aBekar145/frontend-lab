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
