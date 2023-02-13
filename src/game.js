'use strict';

const readline = require('readline');

const { calculatedBullsAndCows } = require('./calculatedBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = (secret) => {
  terminal.question('Enter a number of 4 different digits: ', (number) => {
    if (number.length !== 4 || new Set(number).size !== 4 || isNaN(+number)) {
      // eslint-disable-next-line no-console
      console.log('You must enter exactly 4 different digits!');
      game(secret);

      return;
    }

    if (number === secret) {
      // eslint-disable-next-line no-console
      console.log('You won!');
      terminal.close();
    } else {
      const result = calculatedBullsAndCows(secret, number);

      // eslint-disable-next-line no-console
      console.log(`${result} Try again!`);
      game(secret);
    }
  });
};

module.exports.game = game;
