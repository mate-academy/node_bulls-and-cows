'use strict';

const calculateBullAndCows = (correct, guess) => guess.reduce(
  (result, currentDigit, index) => {
    result.bulls += currentDigit === correct[index];

    result.cows += (
      currentDigit !== correct[index] && correct.includes(currentDigit)
    );
  },
  {
    bulls: 0,
    cows: 0,
  },
);

module.exports.calculateBullAndCows = calculateBullAndCows;
