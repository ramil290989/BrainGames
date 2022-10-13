#!/usr/bin/env node
import {user} from '../src/cli.js';
import {hello, random, questionAndUserAnswer, compareAnswer} from '../src/index.js';

hello();

var correctAnswerSum = 0;
var userName = user();
var correctAnswer = 'no';

console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

while (correctAnswerSum < 3) {

    const number = random(100);

    if ((number === 1) || (number === 2)) {
        correctAnswer = 'yes';
    } else {
        for (var i = 2; i < number; i += 1) {
            if ((number % i) === 0) {
                correctAnswer = 'no';
                break;
            } else {
                correctAnswer = 'yes';
            }
        }
    }
    
    var question = `${number}`;
    
    var userAnswer = questionAndUserAnswer(question);

    correctAnswerSum = compareAnswer(userAnswer, correctAnswer, userName, correctAnswerSum);
}