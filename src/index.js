const numerics = {
    units: [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty'
    ],
};

module.exports = function toReadable(number) {

    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
        dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        hundreds = 'hundred';

    let result = '';

    // 100 - 999 in hundred units excluding dozens
    if (number >= 100 && number <= 999) {
        if (number % 100 <= 20) {
            result = `${units[Math.trunc(number / 100)]} ${hundreds} ${units[Math.trunc((number % 100))]}`;
        }
        else result = `${units[Math.trunc(number / 100)]} ${hundreds} ${dozens[Math.trunc((number % 100) / 10)]} ${units[number % 10]}`;
    }

    // 100 - 999 in a dozen
    if (number % 10 == 0) {
        if (number % 100 == 0) {
            result = `${units[Math.trunc(number / 100)]} ${hundreds}`;
        } else {
            result = `${units[Math.trunc(number / 100)]} ${hundreds} ${dozens[Math.trunc((number % 100) / 10)]}`;
        }
    }

    // 0 - 20
    if (number <= 20) {
        result = units[number];
    }

    // 21 - 99
    if (number > 20 && number < 100) {
        if (number % 10 == 0) {
            result = `${dozens[number / 10]}`;
        }
        else result = `${dozens[Math.trunc(number / 10)]} ${units[number % 10]}`;
    }
    return result;

    /* const zero = 'zero',
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    hundreds = 'hundred';

    let resultult = '';

    if (number === 0) return zero;

    if (number <= 20) {
        resultult = units[number];
    }

    if (number > 20 && number < 100) {
        if (number % 10 === 0) {
            resultult = `${dozens[number / 10]}`;
        } else {
            resultult = `${dozens[Math.trunc(number / 10)]} ${units[Math.trunc(number % 10)]}`;
        }
    }

    if (number % 10 === 0) {
        if (number % 100 === 0) {
            resultult = `${units[Math.trunc(number / 100)]} ${hundreds}`;
        } else {
            resultult = `${units[Math.trunc(number / 100)]} ${hundreds} ${dozens[Math.trunc((number % 100) / 10)]}`; // TODO: /10 is out of
        }
    }

    if (number >= 100 && number <= 999) {
        if (number % 100 <= 20) {
            resultult = `${units[Math.trunc(number / 100)]} ${hundreds} ${units[Math.trunc(number % 100)]}`; // TODO: double round brakets
        } else {
            resultult = `${units[Math.trunc(number / 100)]} ${hundreds} ${dozens[Math.trunc((number % 100) / 10)]} ${units[number % 10]}`;
        }
    }
    return resultult.toString().trim(); */
};

