'use strict';

function countBullsAndCows(number, userTry) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (number.includes(userTry[i])) {
      bulls = userTry[i] === number[i]
        ? bulls + 1
        : bulls;

      cows = userTry[i] !== number[i]
        ? cows + 1
        : cows;
    }
  }

  return `You got ${bulls} bulls, ${cows} cows`;
}

module.exports = { countBullsAndCows };
