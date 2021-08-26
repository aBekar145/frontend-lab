const fieldInput = document.getElementById('text-area');
const fieldOutResult = document.getElementById('show-here');
const button = document.getElementById('text-area-button');

const getClassByValue = (value) => {
    const typeValue = typeof value;
    const key = value === null ? value : typeValue;
    const dataObject = {
        number: 'text-color-red',
        boolean: 'text-color-orange',
        string: 'text-color-green',
        null: 'text-color-blue',
        default: 'text-color-black',
    };

    return dataObject[key] || dataObject.default;
};

const jsonToHtml = (data) => {
    const json = parseInput(data);
    const htmlArray = [`<ul style="display: block">`];

    for (let [key, value] of Object.entries(json)) {
        if (typeof value === 'object' && value !== null) {
            const lengthObject = Array.isArray(value)
                ? `[${value.length}]`
                : `{${Object.keys(value).length}}`;
            htmlArray.push(`<li class="clickable">${key} ${lengthObject}:`);
            htmlArray.push(jsonToHtml(value));
        } else {
            let content = value;
            const styleClass = getClassByValue(content);
            htmlArray.push(
                `<li>${key}: 
                    <span class="${styleClass}">${content}</span>
                </li>`
            );
        }
    }

    htmlArray.push('</ul>');
    return htmlArray.join('');
};

const parseInput = (input) => {
    let json = {};

    try {
        json = typeof input === 'string' ? JSON.parse(input) : input;
    } catch (err) {
        alert(err);
    }

    return json;
};

const setClickListeners = () => {
    const clickableElements = document.getElementsByClassName('clickable');

    Array.from(clickableElements).forEach((element) => {
        element.onclick = () => {
            const node = element.lastChild;

            if (node.style?.display === 'block') {
                node.style.display = 'none';
                element.classList.toggle('clickable-rotate');
            } else {
                node.style.display = 'block';
                element.classList.toggle('clickable-rotate');
            }
        };
    });
};

const appendJSON = (valueInput) => {
    const jsonHTML = jsonToHtml(valueInput);
    fieldOutResult.innerHTML = jsonHTML;

    setClickListeners();
};

button.addEventListener('click', () => appendJSON(fieldInput.value));
