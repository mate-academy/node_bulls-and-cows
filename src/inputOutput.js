'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { stdin, stdout } = require('process');
const { generateNum } = require('./generateNum');
const { calculating } = require('./calculating');

const num = generateNum();

const terminal = readline.createInterface({
  input: stdin,
  output: stdout,
});

const play = () => {
  terminal.question('\u001b[34m Guess the number ', (answer) => {
    if (!Number(answer) || answer.length < 4) {
      console.log(
        '\u001b[31m Your answer have to be the NUMBERS with LENGTH 4 \n'
      );
      play();
    } else if (num === Number(answer)) {
      console.log('\u001b[32m Greate! You won');
      terminal.close();
    } else {
      console.log(calculating(answer, num));
      console.log(num); // To show genereted number
      play();
    }
  });
};

module.exports = { play };
