/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const randonNumber = generateRandomNumber();

console.log(randonNumber);

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question() {
  terminal.question('Try to guess my number: ', (number) => {
    const validNumber = checkIsValidUserInput(number);

    if (validNumber) {
      const checkBullsCows = getBullsAndCows(randonNumber, number);

      if (checkBullsCows.bulls === 4) {
        console.log('You win!');
        console.log('');
        terminal.close();
      } else {
        console.log(
          `You guessed ${checkBullsCows.bulls} bulls and ${checkBullsCows.cows} cows`,
        );
        console.log('Try again');
        console.log('');
        question();
      }
    } else {
      question();
    }
  });
}

// console.log(randonNumber);
question();
