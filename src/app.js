'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./generationNumbers');
const { renderResult } = require('./renderResult');

const hidNumber = generateRandomNumber();
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkNumberValue() {
  terminal.question('Enter number:', (number) => {
    if (number === hidNumber) {
      // eslint-disable-next-line no-console
      console.log('YOU WIN');
      terminal.close();

      return;
    }
    renderResult(hidNumber, number);

    checkNumberValue(hidNumber, number);
  });
}

checkNumberValue();
// eslint-disable-next-line no-console
console.log(hidNumber);
