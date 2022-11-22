'use strict';

const calculator = (secret, guess) => {
  let cowsCount = 0;
  let bullsCount = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bullsCount++;
    } else {
      if (guess.includes(secret[i])) {
        cowsCount++;
      }
    }
  }

  return {
    bulls: bullsCount,
    cows: cowsCount,
  };
};

module.exports = { calculator };
