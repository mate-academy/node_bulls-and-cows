/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { getBullsAndCows } = require('../modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = (generatedNumber) => {
  terminal.question('Enter a number of 4 different digits: ', (userNumber) => {
    if (new Set(userNumber).size !== 4 || isNaN(+userNumber)) {
      console.log('You must enter exactly 4 different digits!');
      game(generatedNumber);

      return;
    }

    if (userNumber === generatedNumber) {
      console.log('You won!');
      terminal.close();
    } else {
      const result = getBullsAndCows(generatedNumber, userNumber);

      console.log(`${result} Try again!`);
      game(generatedNumber);
    }
  });
};

module.exports.game = game;
