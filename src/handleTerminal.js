/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { calculatingBullsAndCows } = require('./calculatingBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const handleTerminal = () => {
  terminal.question('Try to guess: ', (guess) => {
    const strGuess = `${guess}`;

    for (const num of strGuess) {
      if (guess.indexOf(num) !== guess.lastIndexOf(num)
        || isNaN(+num)
        || strGuess.length !== 4) {
        throw new Error('Please enter 4 different digits');
      }
    }

    const responce = calculatingBullsAndCows(strGuess);

    if (responce === true) {
      console.log('Good Job! You won!');
      terminal.close();
    } else {
      console.log(responce);
      handleTerminal();
    }
  });
};

module.exports = { handleTerminal };
