#!/usr/bin/env node
import { gameRun } from '../index.js';
import { getRandomNumber } from '../helpme.js';

const condition = ('Answer "yes" if the number is even, otherwise answer "no".');
const randomRange = 10;
let correctAnswer = '';

const getQuestionAndCorrectAnswer = () => {
  const number = getRandomNumber(randomRange);
  (number % 2 === 0) ? correctAnswer = 'yes' : correctAnswer = 'no';
  const question = (`Question: ${number}`);
  return [question, correctAnswer];
};

export default () => {
  gameRun(condition, getQuestionAndCorrectAnswer);
};
