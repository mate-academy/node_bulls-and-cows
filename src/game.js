/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = (secretNumber, calculating) => {
  terminal.question('Try guess number: ', (inputNumber) => {
    if (inputNumber.length !== 4) {
      console.log('Enter a four-digit number');

      return game(secretNumber, calculating);
    }

    const result = calculating(secretNumber, inputNumber);

    console.log(`You have ${result.cows} cows and 
      ${result.bulls} bulls, try again`);

    if (inputNumber === secretNumber) {
      console.log('You win');
      terminal.close();
    } else {
      game(secretNumber, calculating);
    }
  });
};

module.exports = { game };
