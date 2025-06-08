'use strict';
/* eslint-disable no-console */

const readline = require('node:readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

function ask() {
  rl.question('Enter your guess: ', (answer) => {
    try {
      checkIsValidUserInput(answer);

      const result = getBullsAndCows(answer, secretNumber);

      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

      if (result.bulls === 4) {
        console.log('Congratulations! You guessed the number!');
        rl.close();
      } else {
        ask();
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
      ask();
    }
  });
}

ask();
