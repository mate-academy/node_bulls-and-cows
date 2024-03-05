'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

function playGame() {
  terminal.question('Enter 4-digit number:', (userInput) => {
    const randomNumber = generateRandomNumber();
    const gameResult = getBullsAndCows(+userInput, randomNumber);
    const { bulls } = gameResult;

    if (!(checkIsValidUserInput(userInput))) {
      console.log('Invalid userInput. Please enter a correct 4-digit number.');
      playGame();
    } else {
      console.log(gameResult);
      console.log(`The number to guess is ${randomNumber}`);

      if (bulls === 4) {
        console.log(`You won!`);
        terminal.close();
      } else {
        playGame();
      }
    }
  });
}

playGame();
