'use strict';

const calculateBullsCows = (randomNumber, guess) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (randomNumber[i] === guess[i]) {
      bulls++;
    } else if (randomNumber.includes(guess[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
};

module.exports = { calculateBullsCows };
