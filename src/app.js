'use strict';

const readline = require('readline');

const { getRandomNumber } = require('./getRandomNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');
const { checkLength } = require('./validation');
const { validNumber } = require('./validation');
const { checkDuplicates } = require('./validation');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Guess a number: ', (number) => {
  if (!checkLength(number)) {
    terminal.write('Incorrect number of digits.');
  }

  if (validNumber(number)) {
    terminal.write('Please only enter digits.');
  }

  if (!checkDuplicates(number)) {
    terminal.write('Number should includes 4 different digits.');
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
