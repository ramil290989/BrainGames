/* функция выбора рандомного числа */
const getRandomNumber = (range) => {
  const result = Math.floor(Math.random() * range);
  return result;
};

/* функция нахождения НОД */
const getGcd = (a, b) => {
  let c = 0;
  while (a !== b) {
    if (a > b) {
      c = a;
      a = c - b;
    } else {
      c = b;
      b = c - a;
    }
  }
  return a;
};

export { getRandomNumber, getGcd };
