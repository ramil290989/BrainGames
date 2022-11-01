#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const mission = 'What number is missing in the progression?';
const randomRange = 10;

const getProgressionArray = (firstItem, arrayLength, progression) => {
  const array = [];
  array[0] = firstItem;
  for (let i = 1; i <= arrayLength; i += 1) {
    array[i] = array[i - 1] + progression;
  }
  return array;
};

const getQuestionAndCorrectAnswer = () => {
  const minArrayLength = 5;
  const randomArrayLength = getRandomNumber(5);
  const arrayLength = minArrayLength + randomArrayLength;
  const firstItem = getRandomNumber(randomRange);
  const progression = getRandomNumber(randomRange);
  const questionItem = getRandomNumber(arrayLength);
  const progressionArray = getProgressionArray(firstItem, arrayLength, progression);
  const correctAnswer = (progressionArray[questionItem]).toString();
  progressionArray[questionItem] = '..';
  const question = `${progressionArray.join(' ')}`;
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  runGame(mission, getQuestionAndCorrectAnswer);
};

export default runProgressionGame;
