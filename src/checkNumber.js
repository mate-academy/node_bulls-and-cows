'use strict';

const checkNumber = (checkDigits, inputDigits) => {
  let countBulls = 0;
  let countCows = 0;

  checkDigits.split('').forEach((digit, index) => {
    if (digit === inputDigits[index]) {
      countBulls++;

      return;
    }

    if (inputDigits.includes(digit)) {
      countCows++;
    }
  });

  return {
    countBulls,
    countCows,
  };
};

module.exports.checkNumber = checkNumber;
