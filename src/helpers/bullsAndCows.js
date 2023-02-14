'use strict';

const bullsAndCows = (generatedNumber, enteredNumber) => {
  let bulls = 0;
  let cows = 0;

  const enterdNumberArray = enteredNumber.split('');

  enterdNumberArray.forEach((digit, index) => {
    if (generatedNumber[index] === digit) {
      bulls++;
    } else if (generatedNumber.includes(digit)) {
      cows++;
    }
  });

  return `Bulls: ${bulls}, cows: ${cows}`;
};

module.exports = { bullsAndCows };
