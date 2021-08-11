const valueInput = document.getElementById('input');
const calculateButton = document.getElementById('calculate-btn');
const outResultBlock = document.getElementById('out-block');

class Cacher {
    constructor() {}
    withCache(functionToCache) {
        const cache = {};
        const SHA256 = new Hashes.SHA256();
        return (...args) => {
            const argumentsString = args.join();
            const hashedKey = SHA256.hex(argumentsString);
            if (hashedKey in cache) {
                return cache[hashedKey];
            } else {
                const result = functionToCache(...args);
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
