'use strict';
const validateInput = require('./validateInput');

function calculateResult(inputNumber, randomNumber) {
  const result = {
    cows: 0,
    bulls: 0,
  };

  const validationResult = validateInput(inputNumber);

  if (validationResult) {
    return validationResult;
  }

  for (let i = 0; i < inputNumber.length; i++) {
    const isSameDigit = inputNumber[i] === randomNumber[i];

    const doesDigitExistInRandomNum = randomNumber.includes(inputNumber[i]);

    if (isSameDigit) {
      result.bulls++;
    } else if (doesDigitExistInRandomNum) {
      result.cows++;
    }
  }

  return `Your result is: bulls ${result.bulls}, cows ${result.cows}`;
}

module.exports = calculateResult;
