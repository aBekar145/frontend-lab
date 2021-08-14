const fieldInput = document.getElementById('text-area');
const fieldOutResult = document.getElementById('show-here');
const button = document.getElementById('text-area-button');

const valueInput =
    (fieldInput.value = `{\n  "key":"value",\n  "key2":2,\n  "key3":["value","value", { "key1": 1, "key2": 2 }],\n  "key4":{"key":2}\n,  key: 3},`);

function jsonToHTML(input) {
    return (show) => {
        return () => {
            const json = parseInput(input);
            const display = show ? 'block' : 'none';
            const repSm = /</gi;
            const repGt = />/gi;
            const htmlArray = [`ul style="display: ${display}">`];
            for (let [key, value] of Object.entries(json)) {
                if (
                    typeof value === 'object' &&
                    Object.keys(value).length > 0
                ) {
                    htmlArray.push(
                        `<li>${key}:<span class="clickable" style="cursor: pointer">+</span>`
                    );
                }
            }
            return console.log(json);
        };
    };
}

jsonToHTML(valueInput);

function parseInput(input) {
    try {
        var json = typeof input === 'string' ? JSON.parse(input) : input;
    } catch (err) {
        console.error(err);
    }
    return json;
}

console.log(parseInput(valueInput));
