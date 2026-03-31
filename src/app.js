/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const terminal = readline.createInterface(process.stdin, process.stdout);
const numberToGuess = generateRandomNumber();

function playGame() {
  terminal.question('Guess the secret code? ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      console.log('Input must be 4 unique digit number');

      return playGame();
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    if (bulls === 4) {
      console.log('Bulls: 4, Cows: 0');
      console.log('You won!');
      terminal.close();
    } else {
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);
      playGame();
    }
  });
}

playGame();
