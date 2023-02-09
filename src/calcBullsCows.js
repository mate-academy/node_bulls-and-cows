'use strict';

exports.getBullsAndCows = (number, guess) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (number[i] === guess[i]) {
      bulls++;
    } else if (number.includes(guess[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
};
