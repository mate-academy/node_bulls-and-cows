/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generatingNumber } = require('./generatingNumber');
const { calculatingBullsCows } = require('./calculatingBullsCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateNumber = generatingNumber().toString();
let count = 0;

function gameInterface() {
  count++;

  terminal.question('Input 4 different digits ', (number) => {
    const generatorLength = [...new Set(number.toString().split(''))].length;
    const targetValueLength = number.toString().length;

    if (number.length !== 4) {
      console.log('length must equal 4');

      return gameInterface();
    } else if (generatorLength !== targetValueLength) {
      console.log('value has exactly 4 different digits');
      gameInterface();
    } else if (number === generateNumber) {
      console.log(`You win with score - ${count}`);
      count = 0;
      terminal.close();
    } else {
      console.log(calculatingBullsCows(generateNumber, number));

      return gameInterface();
    }
  });
}

gameInterface();
