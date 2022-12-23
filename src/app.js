/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateNumber } = require('./generateNumber');
const { isUserNumberValid } = require('./isUserNumberValid');
const { countBullsAndCows } = require('./countBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const number = generateNumber();

function guessNumber() {
  terminal.question('Guess the number: ', (userNumber) => {
    if (!isUserNumberValid(userNumber)) {
      console.log('Number should contain a 4 different digits');

      return guessNumber();
    }

    if (Number(userNumber) !== number) {
      console.log(countBullsAndCows(number, userNumber));

      return guessNumber();
    } else {
      console.log('Congratulations!!! YOU WIN :)');

      terminal.close();
    }
  });
}

guessNumber();
