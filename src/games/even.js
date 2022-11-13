import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const randomRange = 10;

const isEven = (number) => number % 2 === 0;

const getQuestionAndCorrectAnswer = () => {
  const number = getRandomNumber(randomRange);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [`${number}`, correctAnswer];
};

const runEvenGame = () => {
  runGame(gameRule, getQuestionAndCorrectAnswer);
};

export default runEvenGame;
