/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const randomNumber = generateRandomNumber().toString();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askUser() {
  terminal.question('Enter your 4-digit guess: ', (input) => {
    if (!checkIsValidUserInput(input)) {
      console.log(
        'Invalid input! Make sure it is 4 unique digits and does not start with 0.',
      );

      return askUser();
    }

    const result = getBullsAndCows(input, randomNumber);

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log('You guessed the number!');
      terminal.close();
    } else {
      askUser();
    }
  });
}

console.log('I have generated a 4-digit number. Try to guess it!');
askUser();
