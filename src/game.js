/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const { calculatedBullsAndCows } = require('./calculatedBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = (secretNumber) => {
  terminal.question('Enter a number of 4 different digits: ', (userNumber) => {
    if (new Set(userNumber).size !== 4 || isNaN(+userNumber)) {
      console.log('You must enter exactly 4 different digits!');
      game(secretNumber);

      return;
    }

    if (userNumber === secretNumber) {
      console.log('You won!');
      terminal.close();
    } else {
      const result = calculatedBullsAndCows(secretNumber, userNumber);

      console.log(`${result} Try again!`);
      game(secretNumber);
    }
  });
};

module.exports.game = game;
