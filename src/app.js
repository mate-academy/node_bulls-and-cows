'use strict';

import readline from 'node:readline';
import { generateRandomNumber } from './modules/generateRandomNumber.js';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';
import { getBullsAndCows } from './modules/getBullsAndCows.js';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

// eslint-disable-next-line no-console
console.log('Welcome to the Bulls and Cows!');

function playGame() {
  terminal.question('Enter your 4-digits number: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      // eslint-disable-next-line no-console
      console.log('Invalid input!');

      return playGame();
    }

    const { bulls, cows } = getBullsAndCows(userInput, secretNumber);

    if (bulls === 4) {
      // eslint-disable-next-line no-console
      console.log('Congratulations! You won!');
      terminal.close();
    } else {
      // eslint-disable-next-line no-console
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);
      playGame();
    }
  });
}

playGame();
