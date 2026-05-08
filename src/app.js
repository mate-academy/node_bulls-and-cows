/* eslint-disable no-console */
'use strict';
import readline from 'readline';

const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

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
