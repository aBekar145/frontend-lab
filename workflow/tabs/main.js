const tabsButton = document.querySelectorAll('.tabs__nav-btn');

tabsButton.forEach((item) => {
    item.addEventListener('click', () => {
        let currentButton = item;
        tabsButton.forEach((item) => {
            item.classList.remove('active');
        });
        currentButton.classList.add('active');
    });
});
