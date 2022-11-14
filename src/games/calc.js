import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What is the result of the expression?';
const randomRange = 10;
const operatorsStr = '+-*';

const calculateExpression = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('что-то пошло не так');
  }
};

const getQuestionAndCorrectAnswer = () => {
  const number1 = getRandomNumber(randomRange);
  const number2 = getRandomNumber(randomRange);
  const expressionsItem = getRandomNumber(operatorsStr.length);
  const operator = operatorsStr[expressionsItem];
  const correctAnswer = calculateExpression(operator, number1, number2).toString();
  const question = `${number1} ${operator} ${number2}`;
  return [question, correctAnswer];
};

const runCalcGame = () => {
  runGame(gameRule, getQuestionAndCorrectAnswer);
};

export default runCalcGame;
