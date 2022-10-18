#!/usr/bin/env node
import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const condition = ('Answer "yes" if given number is prime. Otherwise answer "no".');
const randomRange = 100;

const getQuestionAndCorrectAnswer = () => {
  const number = getRandomNumber(randomRange);
  let correctAnswer = '';
  if ((number === 1) || (number === 2)) {
    correctAnswer = 'yes';
  } else {
    for (let i = 2; i < number; i += 1) {
      if ((number % i) === 0) {
        correctAnswer = 'no';
        break;
      } else {
        correctAnswer = 'yes';
      }
    }
  }
  const question = (`Question: ${number}`);
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  runGame(condition, getQuestionAndCorrectAnswer);
};

export default runPrimeGame;
