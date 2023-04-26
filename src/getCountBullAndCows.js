'use strict';

module.exports = function countBullsAndCows(randomGigits, userDigits) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (randomGigits[i] === userDigits[i]) {
      bulls++;
    } else if (randomGigits.includes(userDigits[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
};
