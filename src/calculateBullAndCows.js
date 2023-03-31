'use strict';

const calculateBullAndCows = (correct, guess) => [...guess].reduce(
  (result, nextDigit, index) => {
    if (nextDigit === correct[index]) {
      result.bulls++;

      return result;
    }

    if (correct.includes(nextDigit)) {
      result.cows++;

      return result;
    }

    return result;
  },
  {
    bulls: 0,
    cows: 0,
  },
);

module.exports.calculateBullAndCows = calculateBullAndCows;
