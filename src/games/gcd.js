#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const mission = 'Find the greatest common divisor of given numbers.';
const randomRange = 100;

const getGcd = (a, b) => { // функция нахождения НОД
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const getQuestionAndCorrectAnswer = () => {
  const a = getRandomNumber(randomRange);
  const b = getRandomNumber(randomRange);
  const gcd = getGcd(a, b);
  const correctAnswer = (gcd).toString();
  const question = `${a} ${b}`;
  return [question, correctAnswer];
};

const runGcgGame = () => {
  runGame(mission, getQuestionAndCorrectAnswer);
};

export default runGcgGame;
