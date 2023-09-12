'use strict';

const compareNumbers = (secret, guess) => {
  let cows = '';
  let bulls = '';

  for (let i = 0; i < 4; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
};

module.exports = {
  compareNumbers,
};
