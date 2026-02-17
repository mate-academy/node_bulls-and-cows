'use strict';

import readline from 'node:readline';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  'I have generated a random 4-digit number.\nTry to guess it!',
  (userInput) => {
    const numberToGuess = generateRandomNumber();

    if (checkIsValidUserInput(userInput) === false) {
      throw new Error('Invalid input.');
    } else {
      const { bulls, cows } = getBullsAndCows(
        userInput,
        numberToGuess.toString(),
      );

      return `Bulls: ${bulls}, Cows: ${cows}`;
    }
  },
);
