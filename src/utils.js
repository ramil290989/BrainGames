/* функция выбора рандомного числа */
const getRandomNumber = (range) => {
  const result = Math.floor(Math.random() * range);
  return result;
};

/* функция нахождения НОД */
const getGcd = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

export { getRandomNumber, getGcd };
