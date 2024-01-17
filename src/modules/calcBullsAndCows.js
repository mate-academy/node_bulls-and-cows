'use strict';

function calcBullsAndCows(generatedNumber, userNumber) {
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < generatedNumber.length; i++) {
    if ((generatedNumber[i] === userNumber[i])) {
      result.bulls++;
    }

    if (
      generatedNumber[i] !== userNumber[i]
      && generatedNumber.includes(userNumber[i])
    ) {
      result.cows++;
    }
  }

  return result;
}

module.exports = { calcBullsAndCows };
