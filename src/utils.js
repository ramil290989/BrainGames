/* функция выбора рандомного числа */
const getRandomNumber = (range) => {
  const result = Math.floor(Math.random() * range);
  return result;
};

export default getRandomNumber;
