#!/usr/bin/env node
import {user} from '../src/cli.js';
import {hello, random, questionAndUserAnswer, compareAnswer} from '../src/index.js';

/* функция нахождения НОД */
const gcd = (a, b) => {
    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

hello();

var correctAnswerSum = 0;
var userName = user();

console.log('Find the greatest common divisor of given numbers.');

while (correctAnswerSum < 3) {

    var a = random(100);
    var b = random(100);
    
    var correctAnswer = (gcd(a, b)).toString();
    var question = `${a} ${b}`;
    
    var userAnswer = questionAndUserAnswer(question);

    correctAnswerSum = compareAnswer(userAnswer, correctAnswer, userName, correctAnswerSum);
}