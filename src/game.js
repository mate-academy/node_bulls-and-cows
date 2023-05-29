'use strict';
/* eslint-disable no-console */

const { getRandomNumber } = require('./random');
const { getHint } = require('./hint');
const { createInterface } = require('readline');

const randomNumber = getRandomNumber().join('');
const terminal = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playBullsAndCows() {
  terminal.question('Guess the number ', (number) => {
    console.log(randomNumber);

    if (randomNumber === number) {
      console.log('You Won!');
      terminal.close();
    } else {
      console.log(getHint(randomNumber, number));
      playBullsAndCows();
    }
  });
}

module.exports.playBullsAndCows = playBullsAndCows;
