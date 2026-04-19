/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { ask, print, close } = require('./modules/io');

async function startGame() {
  print("Let's play Bulls and Cows!");

  const secret = generateRandomNumber();

  try {
    while (true) {
      const guess = await ask('Enter your guess: ');

      if (!checkIsValidUserInput(guess)) {
        print(
          'Invalid input. ' +
            'Please enter a 4-digit number with unique digits, ' +
            'not starting with 0.',
        );
        continue;
      }

      if (guess === secret.toString()) {
        print(`Congratulations! You guessed the number.`);
        break;
      } else {
        const result = getBullsAndCows(guess, secret);

        print(
          `Wrong guess, try again! Bulls: ${result.bulls}, ` +
            `Cows: ${result.cows}`,
        );
      }
    }
  } finally {
    close();
  }
}
startGame();
