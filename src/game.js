/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getBullsAndCows } = require('./getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = (
  message,
  randomNumber
) => {
  terminal.question(
    message,
    (guess) => {
      if (guess.length !== 4
      || guess.split('').some(num => Number.isNaN(+num))
      || new Set(guess).size !== randomNumber.length
      ) {
        console.log('Your guess should be in the form of a number consisting of 4 unique digits.');
        game('Try again!', randomNumber);
      } else {
        getBullsAndCows(randomNumber, guess)
          ? terminal.close()
          : game(
            'You are almost there! Keep trying.',
            randomNumber);
      }
    });
};

module.exports = { game };
