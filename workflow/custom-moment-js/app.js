// const now = new OneMoment(12323323);
const now = new OneMoment(new Date());

function OneMoment(date) {
    if (typeof date === 'number') {
        this.msDate = new Date(date);
    }
    this.date = date;
    this.nowDate = new Date();
    OneMoment.parse = function (formatDate, formatString) {
        this.date = formatDate;
        this.string = formatString;
        return new OneMoment();
    };
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
            const result = fullDate.toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
            });
            let reverseDate = result.split('');
            let newArray = [];
            let year = reverseDate.slice(6, 10).join('');
            newArray.push(year);
            let month = reverseDate.slice(0, 2).join('');
            newArray.push(month);
            let day = reverseDate.slice(3, 5).join('');
            newArray.push(day);
            return newArray.join('/');
        }
    };
    this.fromNow = function () {
        const customDate = new Date(this.date);
        const now = new Date(this.nowDate);
        const differenceInTime = now.getTime() - customDate.getTime();
        const years = Math.ceil(differenceInTime / (3600 * 24 * 1000 * 365));
        const days = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        let result = '';
        days < 365
            ? (result = `in ${days} days`)
            : (result = `${years} years ago`);
        return result;
    };
    this.toDate = function () {
        const dateData = new Date(someDate);
        return dateData;
    };
}

const someDate = OneMoment.parse('21-12-2012', 'DD-MM-YYYY');
const anotherDate = OneMoment.parse('01202019', 'MMDDYYYY');
console.log(someDate);
console.log(anotherDate);
