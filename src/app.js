/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

// Write your code here
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = generateRandomNumber();

function ask() {
  rl.question('Enter 4-digit number: ', (userNumber) => {
    const isValid = checkIsValidUserInput(userNumber);

    if (!isValid) {
      console.log('Your input is invalid, try again.');

      return ask();
    }

    const bullsAndCows = getBullsAndCows(parseInt(userNumber), secret);

    console.log(`Bulls: ${bullsAndCows.bulls}\nCows: ${bullsAndCows.cows}`);

    if (bullsAndCows.bulls === 4) {
      console.log('You won!');
      rl.close();
    } else {
      ask();
    }
  });
}

if (require.main === module) {
  ask();
}
