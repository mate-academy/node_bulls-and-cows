'use strict';

const compareInputNumber = (inputNumber, randomNumber) => {
  let bulls = 0;
  let cows = 0;

  if (isNaN(parseInt(inputNumber))) {
    return 'Please, enter a number!';
  }

  inputNumber.split('').forEach((currentValue, index) => {
    if (currentValue === randomNumber[index]) {
      bulls++;
    }

    if (currentValue !== randomNumber[index]
      && randomNumber.includes(currentValue)) {
      cows++;
    }
  });

  return {
    bulls,
    cows,
  };
};

module.exports = { compareInputNumber };
