/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const newNumber = generateRandomNumber();

const terminal = readline.createInterface(process.stdin, process.stdout);

console.log(
  'I created a number that includes 4 unique digits. Can you guess it?',
);

function askPlayer() {
  terminal.question('Enter 4 unique digits', (digits) => {
    if (!checkIsValidUserInput(digits)) {
      askPlayer();
    }

    if (+digits === newNumber) {
      console.log('You win. Congratulations!!!');

      terminal.close();
    } else {
      const { cows, bulls } = getBullsAndCows(digits, newNumber);

      console.log(`There are ${cows} cows and ${bulls} bulls`);
      askPlayer();
    }
  });
}

askPlayer();
