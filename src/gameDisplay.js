'use strict';

const readline = require('readline');
const { calcScore } = require('./calcScore.js');
const { hasDuplicates } = require('./hasDuplicates.js');
const { isDigits } = require('./isDigits.js');

const game = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gameDisplay = (message, number) => {
  game.question(message, (userInput) => {
    if (!isDigits(userInput)) {
      gameDisplay('Please enter digits, no words -> ', number);

      return;
    }

    if (hasDuplicates(userInput)) {
      gameDisplay('Please enter 4 different digits -> ', number);

      return;
    }

    if (number === userInput) {
      // eslint-disable-next-line no-console
      console.log('You guessed right!');
      game.close();
    } else {
      const score = calcScore(number, userInput);

      gameDisplay(score, number);
    }
  });
};

module.exports = { gameDisplay };
