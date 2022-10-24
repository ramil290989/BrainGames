#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const condition = ('Answer "yes" if given number is prime. Otherwise answer "no".');
const randomRange = 100;

const isPrime = (number) => {
  let result = '';
  if ((number === 1) || (number === 2)) {
    result = 'yes';
  } else {
    for (let i = 2; i < number; i += 1) {
      if ((number % i) === 0) {
        result = 'no';
        break;
      } else {
        result = 'yes';
      }
    }
  }
  return result;
};

const getQuestionAndCorrectAnswer = () => {
  const number = getRandomNumber(randomRange);
  const correctAnswer = isPrime(number);
  const question = `${number}`;
  return [question, correctAnswer];
};

const runPrimeGame = () => {
  runGame(condition, getQuestionAndCorrectAnswer);
};

export default runPrimeGame;
