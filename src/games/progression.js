import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';
const randomRange = 10;
const minArrayLength = 5;

const getProgressionArray = (firstItem, arrayLength, progressionStep) => {
  const array = [];
  array[0] = firstItem;
  for (let i = 1; i <= arrayLength; i += 1) {
    array[i] = array[i - 1] + progressionStep;
  }
  return array;
};

const getQuestionAndCorrectAnswer = () => {
  const randomArrayLength = getRandomNumber(5);
  const arrayLength = minArrayLength + randomArrayLength;
  const firstItem = getRandomNumber(randomRange);
  const progressionStep = getRandomNumber(randomRange);
  const questionItem = getRandomNumber(arrayLength);
  const progressionArray = getProgressionArray(firstItem, arrayLength, progressionStep);
  const correctAnswer = progressionArray[questionItem].toString();
  progressionArray[questionItem] = '..';
  const question = progressionArray.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  runGame(gameRule, getQuestionAndCorrectAnswer);
};

export default runProgressionGame;
