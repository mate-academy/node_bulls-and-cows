/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getHint } = require('./getHint');

function makeTry(winCombination) {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  terminal.question('Enter your 4-digits number: ', (number) => {
    if (number === winCombination) {
      console.log('Nice! You guessed it!');
      terminal.close();
    } else if (number.length !== 4) {
      console.log('This should be a 4-digits number! Try again.');
      terminal.close();
      makeTry(winCombination);
    } else {
      console.log(getHint(winCombination, number));
      terminal.close();
      makeTry(winCombination);
    }
  });
}

module.exports = { makeTry };
