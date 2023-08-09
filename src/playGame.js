/* eslint-disable no-console */
'use strict';

const { value } = require('./generateNumber.js');
const readline = require('readline');
const { countBullsAndCows } = require('./countBullsAndCows.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playGame() {
  terminal.question('Guess the number ', (number) => {
    if (number.length !== 4) {
      console.log('It must be 4 numbers');
      playGame();

      return;
    }

    if (number === value) {
      console.log('You win!!!');
      terminal.close();

      return;
    }

    const [bull, cows] = countBullsAndCows(number, value);

    console.log(`${bull} bulls, ${cows} cows`);

    playGame();
  });
}

module.exports = {
  playGame,
};
