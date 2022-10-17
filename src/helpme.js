/* функция выбора рандомного числа */
const getRandomNumber = (range) => {
    var result = Math.floor(Math.random() * range);
    return result;
}

/* функция нахождения НОД */
const getGcd = (a, b) => {
    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

export {getRandomNumber, getGcd};