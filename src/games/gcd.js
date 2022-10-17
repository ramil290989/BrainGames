#!/usr/bin/env node
import { gameRun } from '../index.js';
import { getRandomNumber, getGcd } from '../helpme.js';

const condition = ('Find the greatest common divisor of given numbers.');
const randomRange = 100;

const getQuestionAndCorrectAnswer = () => {
  const a = getRandomNumber(randomRange);
  const b = getRandomNumber(randomRange);
  const correctAnswer = (getGcd(a, b)).toString();
  const question = (`Question: ${a} ${b}`);
  return [question, correctAnswer];
};

export default () => {
  gameRun(condition, getQuestionAndCorrectAnswer);
};
