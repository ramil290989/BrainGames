#!/usr/bin/env node
import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const condition = ('Answer "yes" if the number is even, otherwise answer "no".');
const randomRange = 10;
let correctAnswer = '';

const getQuestionAndCorrectAnswer = () => {
  const number = getRandomNumber(randomRange);
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const question = (`Question: ${number}`);
  return [question, correctAnswer];
};

const runEvenGame = () => {
  runGame(condition, getQuestionAndCorrectAnswer);
};

export default runEvenGame;
