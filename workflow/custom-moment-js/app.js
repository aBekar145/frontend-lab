function OneMoment(date) {
    this.date = date;
    this.nowDate = new Date();
    this.format = function (string) {
        let fullDate = new Date(this.date);
        if (string == 'MM-YYYY') {
            let month = '' + (fullDate.getMonth() + 1);
            let year = fullDate.getFullYear();

            if (month.length < 2) {
                month = '0' + month;
            }
            return [month, year].join('-');
        } else {
            return fullDate.toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
            });
        }
    };
    this.fromNow = function () {
        let customDate = new Date(this.date);
        let now = new Date(this.nowDate);
        const differenceInTime = now.getTime() - customDate.getTime();
        let years = Math.ceil(differenceInTime / (3600 * 24 * 1000 * 365));
        let days = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        let result = '';
        days < 365
            ? (result = `in ${days} days`)
            : (result = `${years} years ago`);
        return result;
    };
    this.toDate = function () {
        return date instanceof Date;
    };
}

const now = new OneMoment(new Date());

const someDate = new OneMoment(
    Date.parse(reverseDate('21-12-2012', 'DD-MM-YYYY'))
);
const anotherDate = new OneMoment(
    Date.parse(formatDate('01202019', 'MMDDYYYY'))
);

console.log(someDate.format('YYYY/MM/DD'));
console.log(anotherDate.format('MM-YYYY'));
console.log(someDate.fromNow());
console.log(anotherDate.fromNow());
const date = someDate.toDate();
console.log(date);

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
