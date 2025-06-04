/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const number = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askUser() {
  terminal.question('Guess the number: ', (input) => {
    const isValid = checkIsValidUserInput(input);

    if (!isValid) {
      console.log('Number is invalid!');

      askUser();

      return;
    }

    const userNumber = +input;
    const { cows, bulls } = getBullsAndCows(userNumber, number);

    if (bulls === 4) {
      console.log('You won!');
      terminal.close();
    } else {
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);

      askUser();
    }
  });
}

askUser();
