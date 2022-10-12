#!/usr/bin/env node
import {user} from '../src/cli.js';
import {hello, random, questionAndUserAnswer, compareAnswer} from '../src/index.js';

hello();

var correctAnswerSum = 0;
var userName = user();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (correctAnswerSum < 3) {

    var number = random(10);
    var userAnswer = questionAndUserAnswer(number);
    var correctAnswer = '';
        
    if (number % 2 === 0) {
        correctAnswer = 'yes';
        correctAnswerSum = compareAnswer(userAnswer, correctAnswer, userName, correctAnswerSum);        
    } else {
        correctAnswer = 'no';
        correctAnswerSum = compareAnswer(userAnswer, correctAnswer, userName, correctAnswerSum);
    }
}