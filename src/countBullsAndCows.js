'use strict';

function countBullsAndCows(randomNumber, guesses) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] === guesses[i]) {
      bulls++;
    } else if (randomNumber.includes(guesses[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
};

module.exports = {
  countBullsAndCows,
};
