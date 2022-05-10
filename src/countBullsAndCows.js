'use strict';

function countBullsAndCows(guessed, attemped) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < attemped.length; i++) {
    if (attemped[i] === guessed[i]) {
      bulls++;
      continue;
    }

    if (guessed.includes(attemped[i])) {
      cows++;
    }
  }

  return [bulls, cows];
}

module.exports.countBullsAndCows = countBullsAndCows;
