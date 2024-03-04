/* eslint-disable no-console */
'use strict';

const {
  generateRandomNumber,
} = require('./modules/generateRandomNumber');
const {
  getBullsAndCows,
} = require('./modules/getBullsAndCows');
const {
  checkIsValidUserInput,
} = require('./modules/checkIsValidUserInput');
const readline = require('readline');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout,
);

function getUserInput() {
  terminal.question('Enter a 4-digit number: ', (input) => {
    const numberToGuess = generateRandomNumber();

    if (!checkIsValidUserInput(input)) {
      console.log('Invalid input. Please enter a correct 4-digit number.');
      getUserInput();
    } else {
      console.log(`The number to guess is ${numberToGuess}`);
      console.log(getBullsAndCows(+input, numberToGuess));
      terminal.close();
    }
  });
}

getUserInput();
