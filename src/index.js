import readlineSync from 'readline-sync';

/* приветствие */
const hello = () => {
    return console.log('Welcome to the Brain Games!');
}

/* функция выбора рандомного числа */
const random = (range) => {
    var result = Math.floor(Math.random() * range);
    return result;
}

/* функция задает вопрос и получает ответ от пользователя */
const questionAndUserAnswer = (question) => {
    console.log(`Question: ${question}`);
    var answer = readlineSync.question(`Your answer: `);
    return answer;
}

/* функция сравнения ответа пользователя с правильным ответом,
поздравление пользователя, если 3 правильных ответа,
функция задает счетчик циклу while
*/
const compareAnswer = (userAnswer, correctAnswer, userName, correctAnswerSum) => {
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        correctAnswerSum += 1;
        if (correctAnswerSum === 3) {
            console.log(`Congratulations, ${userName}!`);
        }
        return correctAnswerSum;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}`); 
        return correctAnswerSum = 4;               
    }    
}

export {hello, random, questionAndUserAnswer, compareAnswer};