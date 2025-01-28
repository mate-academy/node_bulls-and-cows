/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

askForNumber();

function askForNumber() {
  rl.question('\nEnter a 4-digit number: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Invalid input. Try again.');
      askForNumber();
    } else {
      const { bulls, cows } = getBullsAndCows(Number(userInput), numberToGuess);

      if (bulls === 4) {
        console.log('Congratulations! You won!');
        rl.close();
      } else {
        console.log(`Bulls: ${bulls}, Cows: ${cows}`);
        askForNumber();
      }
    }
  });
}
