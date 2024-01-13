'use strict';

function calculationBullsAndCows(digits, guessNums) {
  const guessArray = guessNums.split('').map(Number);
  const bullsAndCows = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      if (digits[i] === guessArray[j]) {
        if (i === j) {
          bullsAndCows.bulls++;
        } else {
          bullsAndCows.cows++;
        }
      }
    }
  }

  return bullsAndCows;
}

module.exports.calculationBullsAndCows = calculationBullsAndCows;
