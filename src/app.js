'use strict';

const readline = require('node:readline');

const { generateRandomNumber } = require('../src/modules/generateRandomNumber');

const { getBullsAndCows } = require('../src/modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  'BULL & COWS!!!\nGuess number! Enter 4 different digits: ',
  (answer) => {
    process.stdout(getBullsAndCows(answer, generateRandomNumber()));
    rl.close();
  },
);
