// const now = new OneMoment(12323323);
const now = new OneMoment(new Date());
const someDate = OneMoment.parse('21-12-2012', 'DD-MM-YYYY');
const anotherDate = OneMoment.parse('01202019', 'MMDDYYYY');
const date = someDate.toDate();

console.log(someDate);
console.log(anotherDate);
console.log(someDate.format('YYYY/MM/DD'));
console.log(anotherDate.format('MM-YYYY'));
console.log(someDate.fromNow());
console.log(anotherDate.fromNow());
console.log(date instanceof Date);

function OneMoment(date = new Date(), formatString) {
    if (typeof date === 'number') {
        this.msDate = new Date(date);
    }
    this.date = date;
    this.fullDate = new Date(this.date);
    this.formatStringDate = formatString;

    OneMoment.parse = function (formatDate, formatString) {
        this.date = formatDate;
        this.string = formatString;
        if (formatString === 'DD-MM-YYYY') {
            this.reverseString = this.date.split('-').reverse().join('-');
            this.formatNewDate = Date.parse(this.reverseString);
        } else {
            this.splitArrayDate = this.date.split('');
            this.newArray = [];
            this.year = this.splitArrayDate.slice(4, 8).join('');
            this.newArray.push(this.year);
            this.month = this.splitArrayDate.slice(0, 2).join('');
            this.newArray.push(this.month);
            this.day = this.splitArrayDate.slice(2, 4).join('');
            this.newArray.push(this.day);
            this.formatNewDate = Date.parse(this.newArray.join('-'));
        }

        return new OneMoment(this.formatNewDate, this.string);
    };

    this.format = function (string) {
        let year = '';
        let month = '';
        switch (string) {
            case 'MM-YYYY':
                month = '' + (this.fullDate.getMonth() + 1);
                year = this.fullDate.getFullYear();
            case 'month.length < 2':
                month = '0' + month;
                return `${month}-${year}`;
            case 'YYYY/MM/DD':
                const result = this.fullDate.toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric',
                });
                let newFullDate = new Date(result);
                year = newFullDate.getFullYear();
                month = newFullDate.getMonth();
                let day = newFullDate.getDate();
                return `${year}/${month + 1}/${day}`;
        }
    };

    this.fromNow = function () {
        const customDate = new Date(this.date);
        const now = new Date();
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
