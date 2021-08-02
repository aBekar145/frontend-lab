function OneMoment(date) {
    this.date = date;
    this.format = function () {
        let fullDate = new Date(date);
        let month = '' + (fullDate.getMonth() + 1);
        let year = fullDate.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }
        return [month, year].join('-');
    };
    this.fromNow = function () {
        const differenceInTime = now.getTime() - custom.getTime();
        let years = Math.ceil(differenceInTime / (3600 * 24 * 1000 * 365));
        let days = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        let result = '';
        days < 365
            ? (result = `in ${days} days`)
            : (result = `${years} years ago`);
        return result;
    };
    this.toDate = function () {
        return this.date instanceof Date;
    };
}

const now = new OneMoment(new Date());

const someDate = new OneMoment(Date.parse(reverseDate('21-12-2012')));
const anotherDate = new OneMoment(Date.parse(formatDate('01202019')));

console.log(now);
console.log(someDate);
console.log(anotherDate);

function reverseDate(string) {
    let reverseString = string.split('-').reverse().join('-');
    return reverseString;
}

function formatDate(str) {
    let array = str.split('');
    let newArray = [];
    let year = array.slice(4, 8).join('');
    newArray.push(year);
    let month = array.slice(0, 2).join('');
    newArray.push(month);
    let day = array.slice(2, 4).join('');
    newArray.push(day);
    return newArray.join('-');
}
