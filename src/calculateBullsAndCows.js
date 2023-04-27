'use strict';

const calculateBullsAndCows = (userAnswer, generatedNumber) => {
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] === generatedNumber[i]) {
      result.bulls += 1;
      continue;
    }

    if (generatedNumber.includes(userAnswer[i])) {
      result.cows += 1;
    }
  }

  return result;
};

exports.calculateBullsAndCows = calculateBullsAndCows;
