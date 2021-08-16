const fieldInput = document.getElementById('text-area');
const fieldOutResult = document.getElementById('show-here');
const button = document.getElementById('text-area-button');

const valueInput = (fieldInput.value = `{
        "array": [
          1,
          2,
          3
        ],
        "boolean": "true",
        "color": "gold",
        "null": "null",
        "number": 123,
        "object": {
          "a": "b",
          "c": "d"
        },
        "string": "Hello World"
      }`);

const jsonToHtml = (data) => {
    return (show) => {
        const json = parseInput(data);
        display = show ? 'block' : 'none';
        const repSm = /</gi;
        const repGt = />/gi;
        const htmlArray = [`<ul style="display: ${display}">`];
        for (let [key, value] of Object.entries(json)) {
            if (typeof value === 'object' && Object.keys(value).length > 0) {
                htmlArray.push(
                    `<li>${key}:<span class="clickable" style="cursor: pointer">+</span>`
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
        return htmlArray.flat().join('');
    };
};

function getFinalContent(formattedContent) {
    if (formattedContent.length < 50 || typeof formattedContent == 'number') {
        return `<span>${formattedContent}</span>`;
    }
    return `<span class="clickable" style="cursor: pointer">+</span><pre style="display:block">${formattedContent}</pre>`;
}

const parseInput = (input) => {
    let json = {};
    try {
        json = typeof input === 'string' ? JSON.parse(input) : input;
    } catch (err) {
        console.error(err);
    }
    console.log(json);
    return json;
};

function setClickListeners() {
    const clickableElements = document.getElementsByClassName('clickable');
    Array.from(clickableElements).forEach((el) => {
        el.onclick = () => {
            const node = el.nextSibling;
            if (node.style && node.style.display == 'none') {
                node.style.display = 'block';
                el.innerText = ' -';
            } else if (node.style && node.style.display == 'block') {
                node.style.display = 'none';
                el.innerText = '+';
            }
        };
    });
}

function buttonClickHandler() {
    appendJSON(document.getElementById('text-area').value);
}

function appendJSON() {
    const jsonHTML = jsonToHtml(valueInput)(true);
    fieldOutResult.innerHTML = jsonHTML;
    setClickListeners();
}
