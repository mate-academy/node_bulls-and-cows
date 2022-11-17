'use strict';

const readline = require('readline');

const { generateNumber } = require('./generateNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const interactWithTerminal = () => {
  terminal.question('Try to guess: ', (guess) => {
    for (const char of guess) {
      if ((guess.indexOf(char) !== guess.lastIndexOf(char))
      || isNaN(+char)
      || guess.length !== 4) {
        throw new Error(`Incorrect input
       You have to enter 4 different digits!`);
      }
    }

    const randomNumber = generateNumber();

    if (calculateBullsAndCows(randomNumber, guess)) {
      terminal.close();
    } else {
      interactWithTerminal();
    }
  });
};

module.exports = { interactWithTerminal };
