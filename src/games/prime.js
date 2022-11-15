import runGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getNumber = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1));
};

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if ((number % i) === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndCorrectAnswer = () => {
  const number = getNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [`${number}`, correctAnswer];
};

const runPrimeGame = () => {
  runGame(gameRule, getQuestionAndCorrectAnswer);
};

export default runPrimeGame;
