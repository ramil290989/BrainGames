import readlineSync from 'readline-sync';
import greetingUser from './cli.js';

const runGame = (mission, getQuestionAndCorrectAnswer) => {
  const userName = greetingUser();
  console.log(mission);

  let round = 0;
  const roundsCount = 3;

  while (round < roundsCount) {
    const [question, correctAnswer] = getQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
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

export default runGame;
