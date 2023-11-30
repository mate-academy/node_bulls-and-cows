/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { cowsAndBulls } = require('./calculate');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function terminalJob(winNum) {
  const winStr = winNum.toString();

  terminal.question('Enter number with 4 different digits: ', (input) => {
    const inputNum = Number(input);
    const nums = String(inputNum).split('');
    const isUnicDigits = new Set(nums).size === nums.length
      && nums.length === 4;

    if (isNaN(inputNum) || nums.length !== 4 || !isUnicDigits) {
      console.log('Invalid input. Please enter a 4-different-digit number.\n');

      terminalJob(winNum);

      return;
    };

    if (inputNum === winNum) {
      console.log('\n You won!!! \n');

      terminal.close();
    } else {
      const { cows, bulls } = cowsAndBulls(winStr, input);

      console.log(`${bulls} Bulls and ${cows} Cows\n`);

      terminalJob(winNum);
    }
  });
}

module.exports = { terminalJob };
