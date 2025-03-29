'use strict';

import readline from 'node:readline';

import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

function check(userInput) {
  if (!checkIsValidUserInput(userInput)) {
    return {
      error: 'Invalid input! Enter a 4-digit number with unique digits.',
    };
  }

  const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

  return { bulls, cows, isWin: bulls === 4 };
}

function ask() {
  rl.question(
    'Try to guess the 4-digit number. Enter your guess? ',
    (userInput) => {
      const checkResult = check(userInput);

      if (checkResult.error) {
        rl.write('!!Enter a 4-digit number with unique digits(not start 0).\n');
        ask();

        return;
      }

      if (checkResult.isWin) {
        rl.write(
          `Congratulations! You guessed the number ${numberToGuess} correctly!\n`,
        );
        rl.close();
      } else {
        rl.write(
          `Try again! You guessed ${checkResult.bulls} bulls, ${checkResult.cows} cows\n`,
        );
        ask();
      }
    },
  );
}

ask();
