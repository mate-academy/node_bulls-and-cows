'use strict';

const { BULL, COW, SECRET_SIZE } = require('./constants');

function playRound(secret, guess) {
  const bullsAndCows = [];

  for (let i = 0; i < guess.length; i++) {
    if (secret[i] === guess[i]) {
      bullsAndCows.push(BULL);
      continue;
    }

    if (secret.includes(guess[i])) {
      bullsAndCows.push(COW);
    }
  }

  const isGameOver = bullsAndCows.length === SECRET_SIZE
    && bullsAndCows.every(bullOrCow => bullOrCow === BULL);

  return [isGameOver, bullsAndCows];
}

module.exports = {
  playRound,
};
