'use strict';

const readline = require('readline');

const { getRandomNumber } = require('./getRandomNumber');
const { calculateBullsAndCow } = require('./calculateBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Guess a number: ', (number) => {
  if (number.length !== 4 || isNaN(+number) || new Set(number).size !== 4) {
    throw new Error('Number should includes 4 different digits');
  }

  if (+number === getRandomNumber) {
    // eslint-disable-next-line no-console
    console.log('You are a winner!');
    terminal.close();
  } else {
    calculateBullsAndCow(getRandomNumber, number);
    // eslint-disable-next-line no-console
    console.log('Try again!');
    terminal.close();
  }
});
