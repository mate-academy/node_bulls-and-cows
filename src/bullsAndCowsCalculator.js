'use strict';

function calculateBullsAndCows(guess, target) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    const currentNum = guess[i];

    if (target.includes(currentNum)) {
      if (target[i] === currentNum) {
        bulls++;

        continue;
      }

      cows++;
    }
  }

  return [bulls, cows];
}

module.exports = calculateBullsAndCows;
