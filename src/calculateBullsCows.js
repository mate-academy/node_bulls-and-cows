'use strict';

const calculator = (secret, guess) => {
  let cowsCount = 0;
  let bullsCount = 0;
  const secretCopy = [];
  const guessCopy = [];

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bullsCount++;
    } else {
      secretCopy.push(secret[i]);
      guessCopy.push(guess[i]);
    }
  }

  for (const num of secretCopy) {
    if (guessCopy.some(elem => elem === num)) {
      cowsCount++;
    }
  }

  return {
    bulls: bullsCount,
    cows: cowsCount,
  };
};

module.exports = { calculator };
