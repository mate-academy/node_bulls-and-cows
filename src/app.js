'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);

const numberToGuess = generateRandomNumber();

function startGame() {
  terminal.question(
    'Enter a 4-digit number with no repeating digits: ',
    (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        // eslint-disable-next-line no-console
        console.log(
          'Invalid input.',
          'Please enter a 4-digit number with no repeating',
          'and not starting with 0',
        );

        return startGame();
      }

      const result = getBullsAndCows(parseInt(userInput), numberToGuess);

      if (result.bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('Congratulations! You guessed the number!');

        return terminal.close();
      }

      // eslint-disable-next-line no-console
      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
      startGame();
    },
  );
}

startGame();
