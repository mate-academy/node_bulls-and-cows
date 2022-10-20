'use strict';

const readline = require('readline');
const randomNumber = require('./rng')();
const calculateBullsAndCows = require('./calculateBullsAndCows');
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const guessNumber = () => {
  terminal.question('Guess a number: ', (number) => {
    if (number.length !== 4 || /\D/g.test(number)) {
      global.console.log('The number must contain 4 unique digits');

      return guessNumber();
    }

    if (number === randomNumber) {
      global.console.log('You won! Congratulations!');

      terminal.close();
    } else {
      global.console.log(calculateBullsAndCows(randomNumber, number));

      return guessNumber();
    }
  });
};

guessNumber();
