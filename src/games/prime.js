import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randomRange = 100;

const isPrime = (number) => {
  let result = false;
  if ((number === 1) || (number === 2)) {
    return true;
  } else {
    for (let i = 2; i < number; i += 1) {
      if ((number % i) === 0) {
        return false;
      }
    }
    return true;
  }
};

const getQuestionAndCorrectAnswer = () => {
  const number = getRandomNumber(randomRange);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [`${number}`, correctAnswer];
};

const runPrimeGame = () => {
  runGame(gameRule, getQuestionAndCorrectAnswer);
};

export default runPrimeGame;
