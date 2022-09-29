'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

const randomNumber = Math.trunc(1000 + Math.random() * 9000);

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const guessNumber = () => {
  terminal.question('Guess a number: ', (number) => {
    if (number.length !== 4
      || /\D/g.test(number)
      || [...number].some(num => (
        number.indexOf(num) !== number.lastIndexOf(num)
      ))
    ) {
      console.log('The number must contain 4 different digits!');

      return guessNumber();
    }
    console.log(randomNumber);

    if (Number(number) === randomNumber) {
      console.log('You win!');

      terminal.close();
    } else {
      console.log(calculateBullsAndCows(randomNumber, number));

      return guessNumber();
    }
  });
};

guessNumber();
