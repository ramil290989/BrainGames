import { user } from './cli.js';
import readlineSync from 'readline-sync';

const gameRun = (condition, getQuestionAndCorrectAnswer) => {
  const userName = user();
  console.log(condition);

  let round = 0;
  const numberOfRounds = 3;

  while (round < numberOfRounds) {
    const [question, correctAnswer] = getQuestionAndCorrectAnswer();
    console.log(`${question}`);
    const userAnswer = readlineSync.question(`Your answer: `);
    if (userAnswer === (`${correctAnswer}`)) {
      console.log('Correct!');
      round += 1;
      if (round === 3) {
          console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
};

export { gameRun };
