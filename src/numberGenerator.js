'use strict';

const getFourDigitNumber = () => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let targetNumber = '';

  while (targetNumber.length < 4) {
    let index = Math.floor(Math.random() * digits.length);

    if (!targetNumber.length && !index) {
      index = 1;
    }

    targetNumber += String(digits[index]);

    digits.splice(index, 1);
  }

  return Number(targetNumber);
};

module.exports.getFourDigitNumber = getFourDigitNumber;
