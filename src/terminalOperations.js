'use strict';

const readline = require('readline');

const { generateNumber } = require('./generateNumber');
const { bullsAndCows } = require('./bullsAndCows');

const terminalOperations = () => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  terminal.question('Try to guess: ', (guess) => {
    for (const char of guess) {
      if ((guess.indexOf(char) !== guess.lastIndexOf(char))
      || isNaN(+char)
      || guess.length !== 4) {
        throw new Error('Incorrect input');
      }
    }

    const randomNumber = generateNumber();

    bullsAndCows(randomNumber, guess);

    terminal.close();
  });
};

module.exports = { terminalOperations };
