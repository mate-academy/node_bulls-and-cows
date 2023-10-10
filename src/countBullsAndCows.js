'use strict';

const { EXPECTED_NUMBER_LENGTH } = require('./constants');

function countBullsAndCows(generatedNumber, userNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < EXPECTED_NUMBER_LENGTH; i++) {
    if (generatedNumber.includes(userNumber[i])
      && generatedNumber.indexOf(userNumber[i]) === i) {
      bulls += 1;
    }

    if (generatedNumber.includes(userNumber[i])
      && generatedNumber.indexOf(userNumber[i]) !== i) {
      cows += 1;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = { countBullsAndCows };
