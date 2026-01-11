/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

import readline from 'readline';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();

const game = (userInput) => {
  if (!checkIsValidUserInput(userInput)) {
    rl.question(
      'Invalid input. Please enter a 4-digit number that does not start with 0 and has no duplicate digits: ',
      game,
    );
  }

  const result = getBullsAndCows(userInput, randomNumber);

  console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

  if (result.bulls === 4) {
    console.log('Congratulations! You guessed the number correctly!');
    rl.close();
  } else {
    rl.question('Try again to guess the number: ', game);
  }
};

rl.question('Please enter your 4-digit guess: ', game);
