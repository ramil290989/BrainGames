import readlineSync from 'readline-sync';
import {userName} from '../bin/brain-games.js';



const brainEven = () => {

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (var i = 1; i <=3; i += 1) {

        var number = Math.floor(Math.random() * 10);
        console.log(`Question: ${number}`);
        var answer = readlineSync.question(`Your answer: `);
        
        if (number % 2 === 0) {
            if (answer === 'yes') {
                console.log('Correct!');
            } else {
                return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}`);                
            }
        } else if (number % 2 !== 0) {
            if (answer === 'no') {
                console.log('Correct!');
            } else {
                return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}`);
            }
        }
    }
    return console.log(`Congratulations, ${userName}!`);
}

export {brainEven};