const nowDate = new Date();
const customDate = new Date(2012, 13, 21);

function formatAnotherDate(date) {
    let fullDate = new Date(date);
    let month = '' + (fullDate.getMonth() + 1);
    let year = fullDate.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }
    return [month, year].join('-');
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

console.log(formatDate(nowDate));
console.log(formatAnotherDate(nowDate));

function getDifferenceDate(custom, now) {
    const differenceInTime = now.getTime() - custom.getTime();
    let years = Math.ceil(differenceInTime / (3600 * 24 * 1000 * 365));
    let days = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    let result = '';
    days < 365 ? (result = `in ${days} days`) : (result = `${years} years ago`);
    return result;
}

console.log(getDifferenceDate(customDate, nowDate));

function checkInstance(date) {
    return date instanceof Date;
}

console.log(checkInstance(nowDate));
