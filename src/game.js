'use strict';

const readline = require('readline');

const { getRandomNumber } = require('./getRandomNumber');
const { calculateBullsAndCow } = require('./calculateBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = () => {
  terminal.question('Guess a number: ', (number) => {
    const uniqueDigitsAmount = 4;
    const numberTypeNumber = +number;
    const invalidNumber = number.length !== uniqueDigitsAmount
    || isNaN(numberTypeNumber) || new Set(number).size !== uniqueDigitsAmount;

    if (invalidNumber) {
      // eslint-disable-next-line no-console
      console.error('Number should includes 4 different digits');

      return game();
    }

    if (numberTypeNumber === getRandomNumber()) {
      // eslint-disable-next-line no-console
      console.log('You are a winner!');
      terminal.close();
    } else {
      calculateBullsAndCow(getRandomNumber, number);
      // eslint-disable-next-line no-console
      console.log('Try again!');

      return game();
    }
  });
};

module.exports = { game };
