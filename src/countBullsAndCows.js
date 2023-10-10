'use strict';

const { EXPECTED_NUMBER_LENGTH } = require('./constants');

function countBullsAndCows(generatedNumber, userNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < EXPECTED_NUMBER_LENGTH; i++) {
    const hasNumber = generatedNumber.includes(userNumber[i]);
    const isNumberBull = generatedNumber.indexOf(userNumber[i]) === i;

    if (hasNumber && isNumberBull) {
      bulls += 1;
    }

    if (hasNumber && !isNumberBull) {
      cows += 1;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = { countBullsAndCows };
