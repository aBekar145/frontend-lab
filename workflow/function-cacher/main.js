const value = document.getElementById('input');
const calculateButton = document.getElementById('calculate-btn');
const outBlock = document.getElementById('out-block');

// factorial = cacher.withCache(factorial);
// const a = factorial(someBigNumber);
// const b = factorial(someBigNumber);

calculateButton.addEventListener('click', () => {
    let number = value.value;
    outBlock.innerHTML = getFactorial(number);
});

const getFactorial = (n) => {
    let factorial = math.factorial(n);
    return factorial;
};

// class Cacher {
//     constructor() {
//         this.cache = {};
//     }
//     withCache(...args) {
//         let n = args[0];
//         if (n in cache) {
//             console.log('Fetching from cache', n);
//             return cache[n];
//         } else {
//             console.log('Calculating result', n);
//             let result = fn(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// }

// const cacher = new Cacher();
