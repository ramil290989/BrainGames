#!/usr/bin/env node
import runGame from '../index.js';
import { getRandomNumber, getGcd } from '../utils.js';

const condition = ('Find the greatest common divisor of given numbers.');
const randomRange = 100;

const getQuestionAndCorrectAnswer = () => {
  const a = getRandomNumber(randomRange);
  const b = getRandomNumber(randomRange);
  const correctAnswer = (getGcd(a, b)).toString();
  const question = (`Question: ${a} ${b}`);
  return [question, correctAnswer];
};

const runGcgGame = () => {
  runGame(condition, getQuestionAndCorrectAnswer);
};

export default runGcgGame;
