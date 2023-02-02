'use strict';

function getBullsAndCows(secret, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
      continue;
    }

    if (guess.includes(secret[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports.getBullsAndCows = getBullsAndCows;
