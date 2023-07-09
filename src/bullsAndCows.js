'use strict';

function bullsAndCows(secretNumber, guess) {
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < secretNumber.length; i++) {
    if (secretNumber[i] === guess[i]) {
      result.bulls++;
    } else if (secretNumber.includes(guess[i])) {
      result.cows++;
    }
  }

  return result;
};

module.exports.bullsAndCows = bullsAndCows;
