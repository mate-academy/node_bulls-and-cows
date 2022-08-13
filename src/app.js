/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getRandomNumber } = require('./getRandomNumber');
const { checkNumber } = require('./checkNumber');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const targetNumber = getRandomNumber();

function guessNumber() {
  terminal.question('Guess a number', (number) => {
    if (!checkNumber(number)) {
      console.log('The number must consist of 4 different digits');

      return guessNumber();
    }

    if (Number(number) === targetNumber) {
      console.log('You win :)');

      terminal.close();
    } else {
      console.log(calculateBullsAndCows(targetNumber, number));

      return guessNumber();
    }
  });
}

guessNumber();
