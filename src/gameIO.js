/* eslint-disable no-console */
'use strict';

const readlineSync = require('readline-sync');

function gameInput() {
  const input = readlineSync.question('Enter your number... ');
  const inputNumber = Number(input);

  if (!inputNumber) {
    throw new Error('Error! Argument is not a number');
  }

  const guess = inputNumber.toString().split('').map(Number);

  if (!guess.every(Boolean) || guess.length !== 4) {
    throw new Error('Error! Argument should consists of'
      + ' exactly 4 digits from 0 to 9 each one');
  }

  return guess;
}

module.exports = {
  gameInput,
  gameOutput: console.log,
};
