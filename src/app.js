'use strict';

const readline = require('readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules//getBullsAndCows');

const num = generateRandomNumber();

const trm = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askGuess() {
  trm.question('Enter the number', (number) => {
    if (checkIsValidUserInput(number)) {
      const result = getBullsAndCows(parseInt(number), num);

      if (result.bulls === 4) {
        trm.close();
      } else {
        askGuess();
      }
    } else {
      askGuess();
    }
  });
}

askGuess();
