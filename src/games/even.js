#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const condition = ('Answer "yes" if the number is even, otherwise answer "no".');
const randomRange = 10;
let correctAnswer = '';

const isEven = (number) => { // функция проверки числа на четность
  let result = '';
  if (number % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const getQuestionAndCorrectAnswer = () => {
  const number = getRandomNumber(randomRange);
  correctAnswer = isEven(number);
  const question = `${number}`;
  return [question, correctAnswer];
};

const runEvenGame = () => {
  runGame(condition, getQuestionAndCorrectAnswer);
};

export default runEvenGame;
