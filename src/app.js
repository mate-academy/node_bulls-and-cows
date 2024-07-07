'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const readline = require('node:readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const correctNumber = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGame() {
  terminal.question('Guess 4 digit number: \n', (number) => {
    if (number === 'hack') {
      // eslint-disable-next-line no-console
      console.log(`${correctNumber}`);
      startGame();
    } else if (!checkIsValidUserInput(number)) {
      // eslint-disable-next-line no-console
      console.log(`Wrong syntax, try again!`);
      startGame();
    } else if (Number(number) === correctNumber) {
      // eslint-disable-next-line no-console
      console.log(`Congratulations, the correct number was ${correctNumber}!`);
      terminal.close();
    } else {
      // eslint-disable-next-line no-console
      console.log(
        `Wrong number, try again!\nType "hack" to get correct number`,
      );
      // eslint-disable-next-line no-console
      console.log(getBullsAndCows(number, correctNumber));
      startGame();
    }
  });
}

startGame();
