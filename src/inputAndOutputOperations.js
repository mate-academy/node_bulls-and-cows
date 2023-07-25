/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = (secretNumber, calculatingBullsAndCows) => {
  terminal.question('Try guess number: ', (inputNumber) => {
    if (inputNumber.length > 4 || inputNumber.length < 4) {
      console.log('Enter a four-digit number');
    }

    const result = calculatingBullsAndCows(secretNumber, inputNumber);

    console.log(`You have ${result[0]} cows and ${result[1]} bulls, try again`);

    if (inputNumber === secretNumber) {
      console.log('You win');

      return terminal.close();
    } else {
      game(secretNumber, calculatingBullsAndCows);
    }
  });
};

module.exports = { game };
