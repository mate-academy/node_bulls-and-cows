/* eslint-disable no-console */
'use strict';

import readline from 'readline';

const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNumber = generateRandomNumber();

function playGame() {
  terminal.question('Enter a number of 4 different digits: ', (userNumber) => {
    if (!checkIsValidUserInput(userNumber)) {
      console.log('Invalid input. Try again.');

      return playGame();
    }

    const { bulls, cows } = getBullsAndCows(userNumber, randomNumber);

    console.log(`bulls: ${bulls}, cows: ${cows}`);

    if (bulls === 4) {
      console.log('Victory!!!');
      terminal.close();
    } else {
      playGame();
    }
  });
}

playGame();
