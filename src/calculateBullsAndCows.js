'use strict';

function calculateBullsAndCows(generatedNumber, userNumber) {
  return userNumber.split('').reduce((acc, number, index) => {
    if (generatedNumber.includes(number)) {
      acc.cows += 1;
    } else if (generatedNumber[index] === number) {
      acc.bulls += 1;
    }

    return acc;
  }, {
    bulls: 0,
    cows: 0,
  });
}

module.exports = { calculateBullsAndCows };
