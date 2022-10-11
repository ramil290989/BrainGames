import readlineSync from 'readline-sync';



console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (var i = 1; i <=3; i += 1) {

    var number = Math.floor(Math.random() * 10);
    var correctAnswerSum = 0;
    console.log(`Question: ${number}`);
    var answer = readlineSync.question(`Your answer: `);
    
    if (number % 2 === 0) {
        if (answer === 'yes') {
            console.log('Correct!');
            correctAnswerSum += 1;
        } else {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}`);
            break;
        }
    } else if (number % 2 !== 0) {
        if (answer === 'no') {
            console.log('Correct!');
            correctAnswerSum += 1;
        } else {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}`);
            break;
    }
    }
}
