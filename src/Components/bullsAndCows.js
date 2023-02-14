'use strict';

const bullsAndCows = (generatedNumber, enteredNumber) => {
  let bulls = 0;
  let cows = 0;

  [...enteredNumber].forEach((number, id) => {
    if (generatedNumber[id] === number) {
      bulls++;
    } else if (generatedNumber.includes(number)) {
      cows++;
    }
  });

  return `Bulls: ${bulls}, cows: ${cows}`;
};

module.exports = { bullsAndCows };
