'use strict';

import { generateRandomNumber } from './generateRandomNumber.js';
import { checkIsValidUserInput } from './checkIsValidUserInput.js';
import { getBullsAndCows } from './getBullsAndCows.js';
import { getUserGuess, displayResult } from './io.js';

function playGame() {
  const secretNumber = generateRandomNumber();

  // eslint-disable-next-line no-console
  console.log('Welcome to Bulls and Cows!');

  let attempts = 0;

  while (true) {
    const guess = getUserGuess();

    if (!checkIsValidUserInput(guess)) {
      // eslint-disable-next-line no-console
      console.log('Invalid input! Please enter 4 unique digits.');
      continue;
    }

    attempts++;

    const { bulls, cows } = getBullsAndCows(secretNumber, guess);

    displayResult(bulls, cows);

    if (bulls === 4) {
      // eslint-disable-next-line no-console
      console.log(
        `Congratulations! You found the number ${secretNumber} in ${attempts} attempts.`,
      );
      break;
    }
  }
}

playGame();
export default playGame;
