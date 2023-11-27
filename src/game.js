'use strict';

const readline = require('readline');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout,
);

const inputValidator = require('./numberValidator');
const countResults = require('./countGameResult');

const numberGenerator = require('./numberGenerator');
const random = numberGenerator.generate();

function startGame() {
  terminal.question('Enter 4 digits number', (userInput) => {
    if (inputValidator.isValid(userInput)) {
      const currentResult = countResults.countGameResult(random, userInput);

      // eslint-disable-next-line no-console
      console.log(currentResult);

      if (currentResult !== 'You won the game') {
        startGame();
      } else {
        terminal.close();
      }
    } else {
      startGame();
    }
  });
}

module.exports = { startGame };
