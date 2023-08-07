'use strict';

const calculateBulls = (secretNumber, guess) => {
  let bulls = 0;

  for (let i = 0; i < secretNumber.length; i++) {
    if (secretNumber[i] === guess[i]) {
      bulls++;
    }
  }

  return bulls;
};

module.exports = {
  calculateBulls,
};
