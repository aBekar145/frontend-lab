const valueInput = document.getElementById('input');
const calculateButton = document.getElementById('calculate-btn');
const outResultBlock = document.getElementById('out-block');

class Cacher {
    constructor() {}
    withCache(calculateData) {
        const cache = {};
        console.log(cache);
        return (...args) => {
            const number = args[0];
            if (number in cache) {
                return cache[hashedKey];
            } else {
                const result = calculateData(...args);
                const hashedKey = new Hashes.MD5().hex(cache[number]);
                console.log(hashedKey);
                cache[hashedKey] = result;
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
