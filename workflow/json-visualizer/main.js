const fieldInput = document.getElementById('text-area');
const fieldOutResult = document.getElementById('show-here');
const button = document.getElementById('text-area-button');

const jsonToHtml = (data) => {
    return (show) => {
        const json = parseInput(data);
        const display = show ? 'block' : 'none';
        const repSm = /</gi;
        const repGt = />/gi;
        const htmlArray = [`<ul style="display: ${display}">`];
        for (let [key, value] of Object.entries(json)) {
            if (typeof value === 'object' && Object.keys(value).length > 0) {
                htmlArray.push(
                    `<li>${key}:<span class="clickable" style="cursor: pointer"> ></span>`
                );
                htmlArray.push(jsonToHtml(value)(false));
            } else {
                let content;
                if (Array.isArray(value)) {
                    content = '[]';
                } else if (typeof value === 'object') {
                    content = '{}';
                } else {
                    const formattedContent =
                        typeof value === 'string'
                            ? value
                                  .replace(repSm, '&lt;')
                                  .replace(repGt, '&gt;')
                            : value;
                    content = getFinalContent(formattedContent);
                }
                htmlArray.push(`<li>${key}: ${content}</li>`);
            }
        }
        htmlArray.push('</ul>');
        return htmlArray.join('');
    };
};

const getFinalContent = (formattedContent) => {
    if (formattedContent.length < 50 || typeof formattedContent == 'number') {
        return `<span>${formattedContent}</span>`;
    }
    return `<span class="clickable" style="cursor: pointer">></span><pre style="display:block">${formattedContent}</pre>`;
};

const parseInput = (input) => {
    let json = {};
    try {
        json = typeof input === 'string' ? JSON.parse(input) : input;
    } catch (err) {
        console.error(err);
    }
    return json;
};

const setClickListeners = () => {
    const clickableElements = document.getElementsByClassName('clickable');
    Array.from(clickableElements).forEach((element) => {
        element.onclick = () => {
            const node = element.nextSibling;
            if (node.style && node.style.display == 'none') {
                node.style.display = 'block';
                element.innerText = ' v';
            } else if (node.style && node.style.display == 'block') {
                node.style.display = 'none';
                element.innerText = ' >';
            }
        };
    });
};

button.addEventListener('click', () => appendJSON(fieldInput.value));

const appendJSON = (valueInput) => {
    const jsonHTML = jsonToHtml(valueInput)(true);
    fieldOutResult.insertAdjacentHTML('beforeEnd', jsonHTML);
    setClickListeners();
};
