#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';
const randomRange = 10;
let correctAnswer = '';

const isEven = number => number % 2 === 0; // функция проверки числа на четность

const getQuestionAndCorrectAnswer = () => {
  const number = getRandomNumber(randomRange);
  correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, correctAnswer];
};

const runEvenGame = () => {
  runGame(mission, getQuestionAndCorrectAnswer);
};

export default runEvenGame;
