'use strict';

/* eslint-disable no-console */

const readline = require('readline');
const countBulls = require('./modules/countBulls');
const countCows = require('./modules/countCows');
const generateNum = require('./modules/generateNum');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const num = generateNum(1000, 9999);
let isFound = false;

terminal.question('Type 4-digit number: ', (input) => {
  do {
    if (+input === num) {
      isFound = true;
      console.log('Yeah, you win!');
    } else {
      const bulls = countBulls(num, +input);
      const cows = countCows(num, +input);

      console.log(`Bulls: ${bulls}`);
      console.log(`Cows: ${cows}`);
    }
  } while (!isFound);

  terminal.close();
});
