/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const randomNumber = generateRandomNumber();

function askQuestion() {
  terminal.question(
    /* eslint-disable-next-line max-len */
    'Enter a 4-digit number that does not start with 0 and does not contain any duplicate digits: ',
    (userInput) => {
      if (checkIsValidUserInput(userInput)) {
        const { bulls, cows } = getBullsAndCows(+userInput, randomNumber);

        if (bulls === 4) {
          console.log('Congratulations! You guessed!');
          terminal.close();
        } else {
          console.log(`bulls: ${bulls}, cows: ${cows}. Try again`);
          askQuestion();
        }
      } else {
        console.log('Invalid number');
        askQuestion();
      }
    },
  );
}

askQuestion();
