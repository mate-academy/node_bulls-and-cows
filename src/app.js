/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { generateNumbers } = require('./generator.js');
const { checkNums } = require('./checker.js');

const randomNumbers = generateNumbers();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startPlay() {
  terminal.question('Guess the number ', (arg) => {
    const numsFromPlayer = arg.split('').map(item => +item);
    const checkResult = checkNums(randomNumbers, numsFromPlayer);

    console.log(checkResult.join(' '));

    if (checkResult.every(item => item === 'bull')) {
      terminal.close();
    } else {
      startPlay();
    }
  });
}

startPlay();
