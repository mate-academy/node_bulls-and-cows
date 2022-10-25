/* eslint-disable no-console */
'use strict';

const { countBullsAndCows } = require('./countBullsAndCows');
const { interfaceOfGame } = require('./gameInterface');
let countOfAttempts = 1;

const KEY_QUESTIONS = {
  question: 'question',
  try_again: 'try_again',
};

const TYPE_OF_QUESTIONS = {
  [KEY_QUESTIONS.question]: 'Try to guess 4 numbers ---> ',
  [KEY_QUESTIONS.try_again]: 'try again ----> ',
};

let typeOfQuestions = KEY_QUESTIONS.question;

const startGame = () =>
  interfaceOfGame.question(TYPE_OF_QUESTIONS[typeOfQuestions], (userNumber) => {
    if (userNumber.length === 4) {
      const {
        isCorrect,
        countOfBulls,
        countOfCows,
      } = countBullsAndCows({ userNumber });

      if (isCorrect) {
        console.log(
          `You guessed all the numbers in ${countOfAttempts} tries.`
          + ` Congratulations, you won!\n`,
        );
        interfaceOfGame.close();
      } else {
        console.log(
          `You guessed ${countOfBulls} bulls and ${countOfCows} cows\n`,
        );
        countOfAttempts += 1;
        typeOfQuestions = KEY_QUESTIONS.try_again;
        startGame();
      }
    } else {
      console.log('The number of characters must be 4\n');
      startGame();
    }
  });

console.log('\nRules:');
console.log('You need to guess the 4-digit number that the computer guessed');
console.log(`'bull' - guessed digit is on its place (index)`);

console.log(
  `'cow' - guessed digit exists in the number but the place (index)\n`,
);

startGame();
