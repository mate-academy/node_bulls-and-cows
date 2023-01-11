/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getBullsAndCows } = require('./getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const terminalOperation = (secretNumber) => {
  terminal.question('Try to guess a number: ', (guessNumber) => {
    const incorrectValue = guessNumber.split('').some(char => (
      guessNumber.indexOf(char) !== guessNumber.lastIndexOf(char) || isNaN(char)
    ));

    if (guessNumber.length !== 4 || incorrectValue) {
      console.log('Incorrect value. Please, enter 4 DIFFERENT digits!!!');
      terminalOperation(secretNumber);

      return;
    }

    if (secretNumber === guessNumber) {
      console.log('Congratulations! You win!');
      terminal.close();
    } else {
      const bullsAndCows = getBullsAndCows(secretNumber, guessNumber);

      console.log(
        `bulls: ${bullsAndCows.bulls},`
        + `cows: ${bullsAndCows.cows}`
        + '\nTry to guess again!\n'
      );
      terminalOperation(secretNumber);
    }
  });
};

module.exports = { terminalOperation };
