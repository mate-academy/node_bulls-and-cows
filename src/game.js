'use strict';

const readline = require('readline');

const { getRandom } = require('./function.random');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = () => {
  terminal.question('Guess a number: ', (number) => {
    if (number.length !== 4 || isNaN(+number) || new Set(number).size !== 4) {
      // eslint-disable-next-line no-console
      console.log('Number should includes 4 different digits, try again!');

      return game();
    }

    if (+number === getRandom) {
      // eslint-disable-next-line no-console
      console.log('You are a winner!');
      terminal.close();
    } else {
      calculateBullsAndCows(getRandom, number);
      // eslint-disable-next-line no-console
      console.log('Try again');

      return game();
    }
  });
};

module.exports = {
  game,
};
