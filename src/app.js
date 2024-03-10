/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function bullsAndCows() {
  const numberToGuess = generateRandomNumber();

  function guessTheNumber() {
    rl.question('Guess the 4-digit number: ', (userInput) => {
      if (!checkIsValidUserInput(userInput)) {
        console.log(
          'Invalid input. '
          + 'Please enter a 4-digit number that '
          + 'does not contain any duplicate digits.'
        );

        return guessTheNumber();
      }

      const result = getBullsAndCows(+userInput, numberToGuess);

      console.log(result);

      if (result.bulls === 4) {
        console.log('Congratulations! You guessed the number!');
        rl.close();
      } else {
        guessTheNumber();
      }
    });
  }

  guessTheNumber();
}

bullsAndCows();
