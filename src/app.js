'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  // eslint-disable-next-line no-console
  console.log('Welcome to Bulls & Cows game!');

  const numberToGuess = generateRandomNumber();
  let attempts = 0;

  function askForGuess() {
    rl.question(
      'Enter your guess (4-digit number with no repeating digits): ',
      (userInput) => {
        attempts++;

        if (!checkIsValidUserInput(userInput)) {
          // eslint-disable-next-line no-console
          console.log(
            // eslint-disable-next-line max-len
            'Invalid input! Please enter a 4-digit number with no repeating digits, and it should not start with 0.',
          );
          askForGuess();

          return;
        }

        const userGuess = Number(userInput);

        const result = getBullsAndCows(userGuess, numberToGuess);

        // eslint-disable-next-line no-console
        console.log(`Result: ${result.bulls} bulls, ${result.cows} cows`);

        if (result.bulls === 4) {
          // eslint-disable-next-line no-console
          console.log(
            `Congratulations! You guessed the number in ${attempts} attempts!`,
          );

          rl.close();
        } else {
          askForGuess();
        }
      },
    );
  }

  askForGuess();
}

rl.on('close', () => {
  process.exit(0);
});

module.exports = {
  playGame,
};
