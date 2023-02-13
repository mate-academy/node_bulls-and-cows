'use strict';

const calculatedBullsAndCows = (secret, guess) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }

  return `Bulls: ${bulls}, cows: ${cows}.`;
};

module.exports.calculatedBullsAndCows = calculatedBullsAndCows;
