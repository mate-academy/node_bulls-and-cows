'use strict';

/* eslint-disable no-console, no-console,max-len */

const cowsBullsLogging = {
  greeting() {
    console.log(`Welcome to Bulls and Cows!

The computer generates a secret number consisting of 4 distinct digits. Then the player, in 8 turns, tries to guess the number. As a result he receives from the computer the number of matches. If the matching digits are in their right positions, they are "bulls", if in different positions, they are "cows".

The game ends when the numbers is found


`);
  },

  wrongSymbol(symbol) {
    console.error(`Incorrect symbol > ${symbol}`);
  },

  theSameSymbol() {
    console.error(`Your symbols have to be unique`);
  },

  wrongLength() {
    console.log('You have to write exactly four different digits');
  },

  gameWin(attempts) {
    console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
  },

  logHistory(history) {
    console.log(`\x1b[33mHistory:\x1b[0m\n${history}`);
  },

  infoAboutStep(data) {
    console.log(`\x1b[33mResult:\x1b[0m\n\x1b[32mBulls:\x1b[0m ${data.bulls}, \x1b[32mCows:\x1b[0m ${data.cows}`);
  },
};

module.exports.cowsBullsLogger = cowsBullsLogging;
