'use strict';

function calculateBullsAndCows(guess, target) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === target[i]) {
      bulls++;
    } else if (target.includes(guess[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
}

module.exports = calculateBullsAndCows;
