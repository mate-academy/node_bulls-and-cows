'use strict';

// Write your code here
const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = generateRandomNumber();

function askGuess() {
  rl.question('', (input) => {
    if (!checkIsValidUserInput(input)) {
      return askGuess();
    }

    const { bulls } = getBullsAndCows(input, secret);

    if (bulls === 4) {
      rl.close();
    } else {
      askGuess();
    }
  });
}

askGuess();
