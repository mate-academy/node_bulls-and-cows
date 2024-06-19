/* eslint-disable max-len */
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

console.log('I have generated a 4-digit number. Try to guess it!');

function promptUser() {
  rl.question('Enter your guess: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Invalid input. Please enter a 4-digit numberthat does not start with 0 and has no duplicate digits.',
      );
      promptUser();
    } else {
      const userGuess = parseInt(userInput, 10);
      const result = getBullsAndCows(userGuess, numberToGuess);
      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

      if (result.bulls === 4) {
        console.log('Congratulations! You guessed the number!');
        rl.close();
      } else {
        promptUser();
      }
    }
  });
}

promptUser();
