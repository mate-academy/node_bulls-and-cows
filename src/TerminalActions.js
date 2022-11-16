/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { getBullsAndCows } = require('./GetBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const terminalActions = (secretNumber) => {
  terminal.question('Try to guess a number:\n', (guess) => {
    const incorrectValue = guess.split('').some(char => (
      guess.indexOf(char) !== guess.lastIndexOf(char) || isNaN(+char)
    ));

    if (guess.length < 4 || incorrectValue) {
      console.log('Incorrect value:(\nPlease, enter 4 DIFFERENT digits\n');
      terminalActions(secretNumber);

      return;
    }

    if (secretNumber === guess) {
      console.log('Congratulations! You win!');

      return terminal.close();
    } else {
      console.log(getBullsAndCows(secretNumber, guess) + '\nDon\'t give up!\n');
      terminalActions(secretNumber);
    }
  });
};

module.exports = { terminalActions };
