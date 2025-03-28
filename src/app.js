/* eslint-disable no-console */
'use strict';
import readline from 'node:readline';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();

const main = (isFirstTry) => {
  if (isFirstTry) {
    console.log('guess the number (1000 - 9999)');
  } else {
    console.log('Try again');
  }

  rl.once('line', (input) => {
    if (!checkIsValidUserInput(input)) {
      console.log('Input should be 4-digit number that does not start with 0');
      main(false);
    } else {
      const result = getBullsAndCows(+input, randomNumber);

      console.log(result);

      if (result.bulls === 4) {
        console.log('Great job, you have guessed the number. Goodbye!');
        rl.close();
      } else {
        main(false);
      }
    }
  });
};

main(true);
