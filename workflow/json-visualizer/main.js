const fieldInput = document.getElementById('text-area');
const fieldOutResult = document.getElementById('show-here');
const button = document.getElementById('text-area-button');

const jsonToHtml = (data) => {
    const json = parseInput(data);
    const htmlArray = [`<ul style="display: block">`];

    for (let [key, value] of Object.entries(json)) {
        if (
            typeof value === 'object' &&
            !Array.isArray(value) &&
            value !== null
        ) {
            htmlArray.push(
                `<li  class="clickable">${key} {${Object.keys(value).length}}:`
            );
            htmlArray.push(jsonToHtml(value));
        } else if (Array.isArray(value)) {
            htmlArray.push(`<li  class="clickable">${key} [${value.length}]:`);
            htmlArray.push(jsonToHtml(value));
        } else {
            let content = value;

            if (typeof content === 'number') {
                htmlArray.push(
                    `<li>${key}: 
                        <span class="text-color-red">${content}</span>
                    </li>`
                );
            } else if (
                typeof content === 'string' &&
                content !== 'null' &&
                key !== 'boolean'
            ) {
                htmlArray.push(
                    `<li>${key}: 
                        <span class="text-color-green">${content}</span>
                    </li>`
                );
            } else if (key === 'boolean') {
                htmlArray.push(
                    `<li>${key}: 
                        <span class="text-color-orange">${content}</span>
                    </li>`
                );
            } else {
                htmlArray.push(
                    `<li>${key}: 
                        <span class="text-color-blue">${content}</span>
                    </li>`
                );
            }
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

button.addEventListener('click', () => appendJSON(fieldInput.value));

const appendJSON = (valueInput) => {
    const jsonHTML = jsonToHtml(valueInput);
    fieldOutResult.innerHTML = jsonHTML;

    setClickListeners();
};
