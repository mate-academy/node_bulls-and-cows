/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const generateNum = require('./generateNum');
const calc = require('./calculateBullsAndCows');

const num = generateNum();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function play() {
  terminal.question('Guess the number? ', (n) => {
    if (n === num) {
      console.log('Great you are the winner!!!!');
      terminal.close();
    } else {
      const countofAnimals = calc(num, n);

      console.log(`
    Bulls count is ${countofAnimals[1]}, cows count is ${countofAnimals[0]}
    `);

      play();
    }
  });
}
play();
