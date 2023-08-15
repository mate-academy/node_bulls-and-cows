'use strict';

const readline = require('readline');

function getInput() {
  return new Promise((resolve) => {
    const terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    terminal.question('Please, guess a number. ', (guessNumber) => {
      resolve(guessNumber);
    });
  });
}

module.exports = { getInput };
