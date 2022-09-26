'use strict';
/* eslint-disable no-console */

const { generatingNumber } = require('./generatingNumber');
const { calculatingBullsCows } = require('./calculatingBullsCows');
const { terminal } = require('./terminal');

const patternNum = generatingNumber();

console.log('Please guess the number:');

terminal.on('line', (inputNum) => {
  if (/^([0-9])(?!\1+$)\d{3}$/.test(inputNum) && new Set(inputNum).size === 4) {
    const result = calculatingBullsCows(inputNum, patternNum);

    if (result === '4 bulls') {
      console.log('Guessed right!');
      terminal.close();
    } else {
      console.log(result);
      console.log('Try again:');
    }
  } else {
    console.log('The number must contain 4 different digits');
  }
});
