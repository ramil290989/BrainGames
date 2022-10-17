#!/usr/bin/env node
import {gameRun} from '../index.js';
import {getRandomNumber} from '../helpme.js';

const condition  = ('What is the result of the expression?');
const randomRange = 10;

const getQuestionAndCorrectAnswer = () => {
    const a = getRandomNumber(randomRange);
    const b = getRandomNumber(randomRange);
    const operatorsStr = '+-*';
    const expressions = [a + b, a - b, a * b];
    const expressionsItem = getRandomNumber(operatorsStr.length);
    const correctAnswer = (expressions[expressionsItem]).toString();
    const question = `${a} ${operatorsStr[expressionsItem]} ${b}`;
    return [question, correctAnswer];
}

export default () => {
    gameRun(condition, getQuestionAndCorrectAnswer);
};