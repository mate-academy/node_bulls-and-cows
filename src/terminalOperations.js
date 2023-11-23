/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { cowsAndBulls } = require('./calculate');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function communicateWithPlayer(winNum) {
  const winStr = winNum.toString();

  terminal.question('Enter number with 4 different digits: ', (input) => {
    const enteredNumber = Number(input);
    const digits = String(enteredNumber).split('');
    const isUnicDigits
      = new Set(digits).size === digits.length && digits.length === 4;

    if (isNaN(enteredNumber) || input.length !== 4 || !isUnicDigits) {
      console.log('Invalid input. Please enter a 4-different-digit number.\n');

      communicateWithPlayer(winNum);

      return;
    }

    if (enteredNumber === winNum) {
      console.log('\n You won!!! \n');

      terminal.close();
    } else {
      const { bulls, cows } = cowsAndBulls(winStr, input);

      console.log(`${bulls} Bulls and ${cows} Cows\n`);

      communicateWithPlayer(winNum);
    }
  });
}

module.exports = {
  communicateWithPlayer,
};
