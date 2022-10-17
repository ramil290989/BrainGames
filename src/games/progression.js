#!/usr/bin/env node
import { gameRun } from '../index.js';
import { getRandomNumber } from '../helpme.js';

const condition = ('What number is missing in the progression?');
const randomRange = 10;

const getQuestionAndCorrectAnswer = () => {
  const array = [];
  const minArrayLength = 5;
  const randomArrayLength = getRandomNumber(5);
  const arrayLength = minArrayLength + randomArrayLength;
  const firstItem = getRandomNumber(randomRange);
  const progression = getRandomNumber(randomRange);
  const questionItem = getRandomNumber(arrayLength);

  array[0] = firstItem;

  for (let i = 1; i <= arrayLength; i += 1) {
    array[i] = array[i - 1] + progression;
  }
  const correctAnswer = (array[questionItem]).toString();
  array[questionItem] = '..';
  const question = (`Question: ${array.join(' ')}`);
  return [question, correctAnswer];
};

export default () => {
  gameRun(condition, getQuestionAndCorrectAnswer);
};
