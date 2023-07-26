'use strict';

const calculateCows = (secretNumber, guess) => {
  let cows = 0;

  for (let i = 0; i < secretNumber.length; i++) {
    if (
      secretNumber[i] !== guess[i]
      && secretNumber.includes(guess[i])
    ) {
      cows++;
    }
  }

  return cows;
};

module.exports = {
  calculateCows,
};
