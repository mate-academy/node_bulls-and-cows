'use strict';
import readline from 'node:readline';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const hiddenNumber = generateRandomNumber();

const requestANumber = () => {
  console.log(hiddenNumber);

  rl.question('Write your number? ', (userValue) => {
    const isValidUserInput = checkIsValidUserInput(userValue);

    if (!isValidUserInput) {
      requestANumber();

      return;
    }

    const bullsAndCows = getBullsAndCows(userValue, hiddenNumber);

    if (bullsAndCows.bulls === 4) {
      rl.close();

      return;
    }

    requestANumber();
  });
};

requestANumber();
