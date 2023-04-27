'use strict';

function caclulateBullsAndCows(number, userNumber) {
  let cows = 0;
  let bulls = 0;

  userNumber.split('').forEach((digit, index) => {
    const isGuessedDigit = number.includes(digit);
    const isGuessedPosition = digit === number[index];

    if (isGuessedDigit) {
      cows += 1;
    }

    if (isGuessedPosition) {
      bulls += 1;
    }
  });

  return {
    bulls,
    cows,
  };
}

module.exports = { caclulateBullsAndCows };
