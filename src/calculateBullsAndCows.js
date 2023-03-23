'use strict';

const calculateBullsAndCows = (generatedNum, input) => {
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < input.length; i++) {
    if (input[i] === generatedNum[i]) {
      result.bulls++;
    } else if (generatedNum.includes(input[i])) {
      result.cows++;
    }
  }

  return result;
};

module.exports = { calculateBullsAndCows };
