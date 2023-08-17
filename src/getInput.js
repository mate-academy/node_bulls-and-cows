/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const readline = require('readline');

function getInput() {
  return new Promise((resolve) => {
    const terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    terminal.question('Please, guess a number: ', (guessNumber) => {
      terminal.close();

      if (guessNumber.length !== 4) {
        console.log('Invalid input. Please enter a valid number with 4 different digits.');
        resolve(getInput());
      } else {
        resolve(guessNumber);
      }
    });
  });
}

module.exports = { getInput };
