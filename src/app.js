'use strict';

import readline from 'node:readline';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';
import { generateRandomNumber } from './modules/generateRandomNumber.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generatedNum = generateRandomNumber();

function askQuestion() {
  rl.question('Type a 4-digit number from 1 to 9: ', (number) => {
    try {
      checkIsValidUserInput(number);

      const num = +number;

      const { bulls, cows } = getBullsAndCows(num, generatedNum);

      if (bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('Congratulations, you guessed all numbers!');
        rl.close();

        return;
      }
      // eslint-disable-next-line no-console
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }

    askQuestion();
  });
}

askQuestion();
