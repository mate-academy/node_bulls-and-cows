'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();

function ask() {
  rl.question(
    'Input 4 digits number.\nNo leading zero, no repeats.\n> ',
    (input) => {
      if (!checkIsValidUserInput(input)) {
        // eslint-disable-next-line no-console
        console.log('Invalid user input, try again.');
        ask();
      }

      // eslint-disable-next-line no-console
      console.log(getBullsAndCows(Number(input), randomNumber));
      rl.close();
    },
  );
}

ask();
