/* функция выбора рандомного числа */
const getRandomNumber = (range) => {
  const result = Math.floor(Math.random() * range);
  return result;
};

/* функция нахождения НОД */
const getGcd = (a, b) => {
  if (! b) {
    return a;
  }
  return getGcd(b, a % b);
};

export { getRandomNumber, getGcd };
