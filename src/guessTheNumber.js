/* eslint-disable no-console */
'use strict';

const { isNumberValid } = require('./isNumberValid');
const { bullsAndCows } = require('./bullsAndCows');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const guessTheNumber = (message, generatedNumber) => {
  terminal.question(message, (usersNumber) => {
    if (!isNumberValid(usersNumber)) {
      guessTheNumber(
        'Number should have exactly 4 different digits!\nTry again:',
        generatedNumber,
      );
    }

    if (generatedNumber === usersNumber) {
      console.log('Good job!!!');
      terminal.close();
    } else {
      const result = bullsAndCows(generatedNumber, usersNumber);

      guessTheNumber(`${result}\nTry again:`, generatedNumber);
    }
  });
};

module.exports = { guessTheNumber };
