'use strict';

const readline = require('readline');

const { getRandomNumber } = require('./getRandomNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Guess a number: ', (number) => {
  if (isNaN(+number)) {
    throw Error('Please only enter digits.');
  }

  if (number.length !== 4) {
    throw Error('Incorrect number of digits.');
  }

  if (new Set(number).size !== 4) {
    throw Error('Number should includes 4 different digits.');
  }

  const num = getRandomNumber();

  if (+number === num) {
    terminal.write('You are a winner!');
    terminal.close();
  } else {
    calculateBullsAndCows(num, number);
    terminal.write(`The number was ${num}\n`);
    terminal.write('Try again!');
    terminal.close();
  }
});
