/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const numberToGuess = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForGuess() {
  terminal.question('Guess the number: ', (userNumber) => {
    if (checkIsValidUserInput(userNumber)) {
      const bullsAndCows = getBullsAndCows(+userNumber, numberToGuess);

      console.log(`Bulls: ${bullsAndCows.bulls}, Cows: ${bullsAndCows.cows}`);
    } else {
      console.log('Invalid input. Please enter a valid number');
    }

    if (+userNumber !== numberToGuess) {
      askForGuess();
    } else {
      console.log('Congratulations! You won!');
      terminal.close();
    }
  });
}

console.log('Welcome to the game! Try to guess the 4-digit number.');

askForGuess();
