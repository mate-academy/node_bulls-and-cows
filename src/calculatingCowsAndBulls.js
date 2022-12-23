'use strict';

function calculatingCowsAndBulls(randomDigits, digits) {
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < randomDigits.length; i++) {
    if (randomDigits[i] === digits[i]) {
      bulls++;
    } else if (digits.split('').includes(randomDigits[i])) {
      cows++;
    }
  }

  return {
    cows,
    bulls,
  };
}

exports.calculatingCowsAndBulls = calculatingCowsAndBulls;
