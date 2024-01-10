'use strict';
/* eslint-disable no-console */

const readline = require('readline-sync');

function isInputValid(input) {
  return input.length === 4
    && input.split('').every((digit, i) => {
      return !isNaN(digit) && input.lastIndexOf(digit) === i;
    });
}

function getValidInput() {
  while (true) {
    const input = readline.question('Make a guess:\n');

    if (isInputValid(input)) {
      return input;
    } else {
      console.log('Invalid input! Enter a number of 4 different digits!');
    }
  }
}

module.exports = { getValidInput };
