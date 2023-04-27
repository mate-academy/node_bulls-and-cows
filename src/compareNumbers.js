'use strict';

const compareNumbers = (userInput, randomNumber) => {
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < userInput.length; i++) {
    const isCorrectDigit = userInput[i] === randomNumber[i];

    if (isCorrectDigit) {
      result.bulls += 1;
    } else if (randomNumber.includes(userInput[i])) {
      result.cows += 1;
    }
  }

  return result;
};

module.exports = { compareNumbers };
