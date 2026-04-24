'use strict';

const readline = require('node:readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const terminal = readline.createInterface(process.stdin, process.stdout);
const numberToGuess = generateRandomNumber();

function playGame() {
  terminal.question('Guess the secre code?', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      // eslint-disable-next-line
      console.log('Input must be 4 unique digit number');

      return playGame();
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    if (bulls === 4) {
      // eslint-disable-next-line
      console.log('Bulls: 4, Cows: 0');
      // eslint-disable-next-line
      console.log('You won!');
      terminal.close();
    } else {
      // eslint-disable-next-line
      console.log(`Bulls: ${bulls}, Cows: ${cows}`);
      playGame();
    }
  });
}

playGame();
