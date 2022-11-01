#!/usr/bin/env node
import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const mission = 'What is the result of the expression?';
const randomRange = 10;

const getCorrectAnswer = (operator, number1, number2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = 0;
  }
  return result;
};

const getQuestionAndCorrectAnswer = () => {
  const number1 = getRandomNumber(randomRange);
  const number2 = getRandomNumber(randomRange);
  const operatorsStr = '+-*';
  const expressionsItem = getRandomNumber(operatorsStr.length);
  const operator = operatorsStr[expressionsItem];
  const correctAnswer = (getCorrectAnswer(operator, number1, number2)).toString();
  const question = `${number1} ${operator} ${number2}`;
  return [question, correctAnswer];
};

const runCalcGame = () => {
  runGame(mission, getQuestionAndCorrectAnswer);
};

export default runCalcGame;
