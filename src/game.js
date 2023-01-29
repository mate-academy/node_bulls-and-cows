'use strict';

const readline = require('readline');
const { checkForDublicates } = require('./checkForDublicates');
const { calculateBullsAndCows } = require('./calculateBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function game(message, generatedNumber) {
  terminal.question(message, (guessedNumber) => {
    if (guessedNumber.length !== 4 || checkForDublicates(guessedNumber)) {
      game('Please enter exactly 4 different digits -> ', generatedNumber);

      return;
    }

    if (isNaN(Number(guessedNumber))) {
      game('Please enter only digits -> ', generatedNumber);

      return;
    }

    if (generatedNumber === guessedNumber) {
      // eslint-disable-next-line no-console
      console.log('You guessed:)');
      terminal.close();
    } else {
      const result = calculateBullsAndCows(generatedNumber, guessedNumber);

      game((`${result} -> `), generatedNumber);
    }
  });
}

module.exports.game = game;
