/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

terminal.question(
  'Type 4 digits',
  (digits) => {
    const randomNumber = generateRandomNumber();
    const isValid = checkIsValidUserInput(digits);

    if (isValid) {
      console.log(`Program generate: ${randomNumber}`);
      console.log(getBullsAndCows(digits, randomNumber));
    } else {
      console.log('Invalid value');
    }

    terminal.close();
  }
);
