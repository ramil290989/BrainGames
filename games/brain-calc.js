#!/usr/bin/env node
import {user} from '../src/cli.js';
import {hello, random, questionAndUserAnswer, compareAnswer} from '../src/index.js';

hello();

var correctAnswerSum = 0;
var userName = user();

console.log('What is the result of the expression?');

while (correctAnswerSum < 3) {

    var a = random(10);
    var b = random(10);
    var expressionsItem = random(3);
    const operatorsStr = '+-*';
    const expressions = [a + b, a - b, a * b];
    var correctAnswer = (expressions[expressionsItem]).toString();
    var question = `${a} ${operatorsStr[expressionsItem]} ${b}`;
    
    var userAnswer = questionAndUserAnswer(question);

    correctAnswerSum = compareAnswer(userAnswer, correctAnswer, userName, correctAnswerSum);
}