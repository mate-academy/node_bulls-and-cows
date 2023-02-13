'use strict';

const readline = require('readline');

const { getRandom } = require('./function.random');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Guess a number: ', (number) => {
  if (number.length !== 4 || isNaN(+number) || new Set(number).size !== 4) {
    throw new Error('number should includes 4 different digits');
  }

  if (+number === getRandom) {
    // eslint-disable-next-line no-console
    console.log('You winner!');
    terminal.close();
  } else {
    calculateBullsAndCows(getRandom, number);
    // eslint-disable-next-line no-console
    console.log('Try again');
    terminal.close();
  }
});
