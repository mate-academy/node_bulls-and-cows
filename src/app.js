/* eslint-disable no-console */
'use strict';

import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';
import readline from 'readline';

function main() {
  const numberToGuess = generateRandomNumber();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function askUserInput() {
    rl.question('Enter your guess: ', (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        console.log(
          `Invalid input. Please enter a 4-digit number that does not start with 0
          and does not contain duplicate digits.`,
        );
        askUserInput();

        return;
      }

      const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

      console.log(`Bulls: ${bulls}, Cows: ${cows}`);

      if (bulls === 4) {
        console.log('Congratulations! You guessed the number.');
        rl.close();
      } else {
        askUserInput();
      }
    });
  }

  askUserInput();
}

main();
