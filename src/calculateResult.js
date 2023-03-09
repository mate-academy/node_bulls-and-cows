'use strict';

const calculateResult = (generatedNumber, userInput) => {
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < 4; i += 1) {
    if (generatedNumber[i] === userInput[i]) {
      result.bulls += 1;
    } else if (generatedNumber.includes(userInput[i])) {
      result.cows += 1;
    }
  }

  return result;
};

module.exports = { calculateResult };
