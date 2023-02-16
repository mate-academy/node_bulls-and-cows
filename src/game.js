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
    const uniqueDigitsAmount = 4;
    const numberTypeNumber = Number(number);
    const invalidNumber = number.length !== uniqueDigitsAmount
    || isNaN(numberTypeNumber) || new Set(number).size !== uniqueDigitsAmount;

    if (invalidNumber) {
      // eslint-disable-next-line no-console
      console.log(`Number should includes
      ${uniqueDigitsAmount} different digits, try again!`);

      return game();
    }

    if (numberTypeNumber === getRandom()) {
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
