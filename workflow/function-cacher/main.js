const value = document.getElementById('input');
const calculateButton = document.getElementById('calculate-btn');
const outBlock = document.getElementById('out-block');
let someBigNumber = 0;

calculateButton.addEventListener('click', () => {
    someBigNumber = value.value;
    cachedFactorial = cacher.withCache(factorial);
    const a = cachedFactorial(someBigNumber);
    outBlock.innerHTML = a;
});

const factorial = (n) => {
    let factorial = math.factorial(n);
    return factorial;
};

class Cacher {
    constructor() {}
    withCache(fn) {
        let cache = {};
        return (...args) => {
            let n = args[0];
            if (n in cache) {
                return cache[n];
            } else {
                let result = fn(n);
                cache[n] = result;
                return result;
            }
        };
    }
}

const cacher = new Cacher();
