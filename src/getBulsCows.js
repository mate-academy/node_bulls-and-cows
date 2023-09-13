'use strict';

const getBulsCows = (secret, guess) => {
  let cows = 0;
  let bulls = 0;

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
  getBulsCows,
};
