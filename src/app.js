/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber().toString();

function playGame() {
  terminal.question('Enter a 4-digit number: ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Invalid input. Please try again.');
      playGame();

      return;
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    if (bulls === 4) {
      console.log('Congratulations! You guessed the number!');
      terminal.close();

      return;
    }

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);
    playGame();
  });
}

playGame();
