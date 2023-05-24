'use strict';
/* eslint-disable no-console */

const { getRandomNumber } = require('./random');
const { getHint } = require('./hint');
const { createInterface } = require('readline');

function playBullsAndCows() {
  const terminal = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  terminal.question('Guess the number ', (number) => {
    console.log(getHint(getRandomNumber(), number));
    terminal.close();
  });
}

module.exports.playBullsAndCows = playBullsAndCows;
