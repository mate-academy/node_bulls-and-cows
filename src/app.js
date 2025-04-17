/* eslint-disable no-console */
'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const readline = require('readline');

const terminal = readline.createInterface(process.stdin, process.stdout);

const realNumber = generateRandomNumber();

function playGame() {
  terminal.question('Enter your guess:', (guessNumber) => {
    if (!checkIsValidUserInput(guessNumber)) {
      console.log('Invalid input!');

      return playGame();
    }

    const result = getBullsAndCows(+guessNumber, realNumber);

    if (result.bulls === 4 && result.cows === 0) {
      console.log('Congratulations! You won!');

      return terminal.close();
    }

    console.log(result);
    playGame();
  });
}

playGame();
