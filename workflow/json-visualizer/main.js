const fieldInput = document.getElementById('text-area');
const fieldOutResult = document.getElementById('show-here');
const button = document.getElementById('text-area-button');
const list = document.querySelector('ul');

fieldInput.value = `{
    "array": [
      1,
      2,
      3,
      4
    ],
    "boolean": "false",
    "color": "gold",
    "null": "null",
    "number": 123,
    "object": {
      "a": "b",
      "c": "d",
      "e": "f"
    },
    "string": "Hello World"
  }`;

const jsonToHtml = (data) => {
    return (show) => {
        const json = parseInput(data);
        console.log(json);
        const display = show ? 'block' : 'none';
        const htmlArray = [`<ul style="display: block">`];
        for (let [key, value] of Object.entries(json)) {
            console.log(key);
            if (
                typeof value === 'object' &&
                !Array.isArray(value) &&
                value !== null
            ) {
                htmlArray.push(
                    `<li class="clickable">${key} {${
                        Object.keys(value).length
                    }}:`
                );
                htmlArray.push(jsonToHtml(value)(false));
            } else if (Array.isArray(value)) {
                htmlArray.push(
                    `<li class="clickable">${key} [${value.length}]:`
                );
                htmlArray.push(jsonToHtml(value)(false));
            } else {
                let content;
                content = value;
                if (typeof content === 'number') {
                    htmlArray.push(
                        `<li>${key}: <span class="text-color-red">${content}</span></li>`
                    );
                } else if (
                    typeof content === 'string' &&
                    content !== 'null' &&
                    key !== 'boolean'
                ) {
                    htmlArray.push(
                        `<li>${key}: <span class="text-color-green">${content}</span></li>`
                    );
                } else if (key === 'boolean') {
                    htmlArray.push(
                        `<li>${key}: <span class="text-color-orange">${content}</span></li>`
                    );
                } else {
                    htmlArray.push(
                        `<li>${key}: <span class="text-color-blue">${content}</span></li>`
                    );
                }
            }
        }
        htmlArray.push('</ul>');
        return htmlArray.join('');
    };
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

// const setClickListeners = () => {
//     const clickableElements = document.getElementsByClassName('clickable');
//     Array.from(clickableElements).forEach((element) => {
//         console.log(element.nextSibling);
//         element.onclick = () => {
//             const node = element.nextSibling;
//             console.log(element.nextSibling);
//             if (node.style && node.style.display === 'block') {
//                 node.style.display = 'none';
//             } else if (node.style && node.style.display === 'none') {
//                 node.style.display = 'block';
//             }
//         };
//     });
// };

// list.addEventListener('click', (event) => {
//     if (event.target.getElementsByClassName === '.show-list') {
//         ev.target.classList.toggle('done');
//     }
// });

button.addEventListener('click', () => appendJSON(fieldInput.value));

const appendJSON = (valueInput) => {
    const jsonHTML = jsonToHtml(valueInput)(true);
    fieldOutResult.innerHTML = jsonHTML;
    // setClickListeners();
};
