'use strict';

const checkNumber = (checkDigits, imputDigits) => {
  let countBulls = 0;
  let countCows = 0;

  checkDigits.split('').forEach((digit, index) => {
    if (digit === imputDigits[index]) {
      countBulls++;

      return;
    }

    if (imputDigits.includes(digit)) {
      countCows++;
    }
  });

  return {
    countBulls,
    countCows,
  };
};

module.exports.checkNumber = checkNumber;
