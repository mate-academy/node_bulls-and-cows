/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getRandomNumber } = require('./randomDigits');
const { calculateResult } = require('./calculateResult');

const gemeratNumber = getRandomNumber();

const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

console.log('Hi! Try to guess the number.');

const game = () => {
  terminal.question('Enter your presume: ', (presume) => {
    const normalizePresume = presume.trim();

    if (normalizePresume.length !== 4 || !/^\d{4}$/.test(normalizePresume)) {
      console.log('The number must consist of 4 digits');
      game();

      return;
    }

    const result = calculateResult(gemeratNumber, normalizePresume.split(''));

    if (result.bulls !== 4) {
      console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
      game();
    } else {
      console.log(`Bulls: ${result.bulls}! You win!`);
      terminal.close();
    }
  });
};

game();
