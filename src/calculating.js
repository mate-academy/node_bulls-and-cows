'use strict';

const calculating = (secretNumber, inputNumber) => {
  const lengthOfTheNumber = 4;
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < lengthOfTheNumber; i++) {
    if (secretNumber.includes(inputNumber[i])) {
      cows++;
    }

    if (secretNumber[i] === inputNumber[i]) {
      bulls++;
    }
  }

  return {
    cows, bulls,
  };
};

module.exports = { calculating };
