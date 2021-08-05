(function () {
    const Validator = (function () {
        function OneMoment(date = new Date()) {
            if (typeof date === 'number') {
                this.msDate = new Date(date);
            }
            this.date = date;
            this.fullDate = new Date(this.date);

            OneMoment.parse = function (formatDate, formatString) {
                const date = formatDate;
                const string = formatString;
                let formatNewDate;
                switch (formatString) {
                    case 'DD-MM-YYYY':
                        const reverseString = date
                            .split('-')
                            .reverse()
                            .join('-');
                        formatNewDate = Date.parse(reverseString);
                        break;
                    case 'MMDDYYYY':
                        const splitArrayDate = date.split('');
                        const newArray = [];
                        const year = splitArrayDate.slice(4, 8).join('');
                        newArray.push(year);
                        const month = splitArrayDate.slice(0, 2).join('');
                        newArray.push(month);
                        const day = splitArrayDate.slice(2, 4).join('');
                        newArray.push(day);
                        formatNewDate = Date.parse(newArray.join('-'));
                        break;
                }
                return new OneMoment(formatNewDate);
            };

            this.format = function (string) {
                const customFullDate = this.fullDate;
                let year = '';
                let month = '';
                switch (string) {
                    case 'MM-YYYY':
                        month = '' + (customFullDate.getMonth() + 1);
                        year = customFullDate.getFullYear();
                        if (month.length < 2) {
                            month = '0' + month;
                        }
                        return `${month}-${year}`;
                    case 'YYYY/MM/DD':
                        year = customFullDate.getFullYear();
                        month = customFullDate.getMonth();
                        const day = customFullDate.getDate();
                        return `${year}/${month + 1}/${day}`;
                }
            };

            this.fromNow = function () {
                const customDate = this.fullDate;
                const now = new Date();
                const differenceInTime = now.getTime() - customDate.getTime();
                const years = Math.ceil(
                    differenceInTime / (3600 * 24 * 1000 * 365)
                );
                const days = Math.ceil(differenceInTime / (1000 * 3600 * 24));
                let result =
                    days < 365 ? `in ${days} days` : `${years} years ago`;
                return result;
            };

            this.toDate = function () {
                const dateData = new Date(this.date);
                return dateData;
            };
        }
        return validator;
    })();
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
        module.exports = Validator;
    else window.Validator = Validator;
})();
