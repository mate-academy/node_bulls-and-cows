'use strict';

function calculateBullsAndCows(guess, number) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (guess[i] === number[i]) {
      bulls++;
    } else if (number.includes(guess[i])) {
      cows++;
    }
  }

  return [bulls, cows];
}

module.exports = { calculateBullsAndCows };
