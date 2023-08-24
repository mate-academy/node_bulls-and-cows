/* eslint-disable no-console */
'use strict';

const gameCalculations = require('./calculations.js');
const readline = require('readline');

const game = (generatedNumber) => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  terminal.question('Please enter 4 digits: ', (number) => {
    if (number === generatedNumber) {
      terminal.write('You won!');
      terminal.close();
    }

    if (number.length !== 4) {
      console.log('Error. The number should consist of 4 digits');
      terminal.close();
      game(generatedNumber);

      return;
    }

    if (isNaN(number)) {
      console.log('Error. The number should consist only digits');
      terminal.close();
      game(generatedNumber);

      return;
    }

    const providedNumbers = new Set(number);

    if (providedNumbers.size !== 4) {
      console.log('Error. Your digits are not unique');
      terminal.close();
      game(generatedNumber);

      return;
    }

    console.log(gameCalculations(generatedNumber, number));
    terminal.close();
    game(generatedNumber);
  });
};

module.exports = game;
