#!/usr/bin/env node
import {user} from '../src/cli.js';
import {hello, random, questionAndUserAnswer, compareAnswer} from '../src/index.js';

hello();

var correctAnswerSum = 0;
var userName = user();

console.log('What number is missing in the progression?');

while (correctAnswerSum < 3) {

    const array = [];
    var arrayLength = 5 + random(5);
    var firstItem = random(10);
    var progression = random(10);
    var questionItem = random(arrayLength);

    array[0] = firstItem;

    for (var i = 1; i <= arrayLength; i += 1) {
        array[i] = array[i - 1] + progression;
    }

    var correctAnswer = (array[questionItem]).toString();
    array[questionItem] = '..';
    
    var question = `${array}`;
    
    var userAnswer = questionAndUserAnswer(question);

    correctAnswerSum = compareAnswer(userAnswer, correctAnswer, userName, correctAnswerSum);
}