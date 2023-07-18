/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { countBullsAndCows } = require('./countBullsAndCows');
const { isGuessValid } = require('./isGuessValid');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Bulls and Cows!');

const gameResponse = {
  error: 'Please enter a valid 4-digit number.',
  victory: 'Congratulations! You guessed the number',
};

function playBullsAndCows(secretNumber, message) {
  terminal.question(message, (guess) => {
    if (!isGuessValid(guess)) {
      playBullsAndCows(secretNumber, gameResponse.error);

      return;
    }

    const { bulls, cows } = countBullsAndCows(secretNumber, guess);

    console.log(`Bulls: ${bulls}, Cows: ${cows}. Try again: `);

    if (bulls === secretNumber.length) {
      console.log(gameResponse.victory);
      terminal.close();
    } else {
      playBullsAndCows(secretNumber, message);
    }
  });
}

module.exports = {
  playBullsAndCows,
};
