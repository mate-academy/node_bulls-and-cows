'use strict';

const calculateBullsAndCows = (secret, guess) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      if (guess.includes(secret[i])) {
        cows++;
      }
    }
  }

  return {
    bulls,
    cows,
  };
};

module.exports = { calculateBullsAndCows };
