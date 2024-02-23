'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(() => {
  const secretCode = generateRandomNumber();

  terminal.question('Make your guess: ', (answer) => {
    getBullsAndCows(answer, secretCode);
    terminal.close();
  });
})();
