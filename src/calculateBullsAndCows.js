'use strict';

const { DEFAULT_ANSWER_VALUE } = require('./constants');

function calculateBullsAndCows(userNumber, generatedNumber) {
  const userNumberSplited = userNumber.split('');
  const generatedStringNumber = String(generatedNumber);

  return userNumberSplited.reduce((acc, number, index) => {
    if (number === generatedStringNumber[index]) {
      acc.bulls++;
    } else if (generatedStringNumber.includes(number)) {
      acc.cows++;
    }

    return acc;
  }, { ...DEFAULT_ANSWER_VALUE });
}

module.exports = {
  calculateBullsAndCows,
};
