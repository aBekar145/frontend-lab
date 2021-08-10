const valueInput = document.getElementById('input');
const calculateButton = document.getElementById('calculate-btn');
const outResultBlock = document.getElementById('out-block');

class Cacher {
    constructor() {}
    withCache(calculateData) {
        const cache = {};
        return (...args) => {
            const number = args[0];
            if (number in cache) {
                return cache[number];
            } else {
                const result = calculateData(...args);
                console.log(args);
                cache[number] = result;
                return result;
            }
        };
    }
}

const cacher = new Cacher();

const factorial = (number) => {
    const factorial = math.factorial(number);
    return factorial;
};

const cachedFactorial = cacher.withCache(factorial);

calculateButton.addEventListener('click', () => {
    const result = cachedFactorial(valueInput.value);
    outResultBlock.innerHTML = result;
});
