'use strict';

const checkDigits = (expectedDigits, inputDigits) => {
  let bulls = 0;
  let cows = 0;

  expectedDigits.split('').forEach((element, index) => {
    if (element === inputDigits[index]) {
      bulls++;

      return;
    }

    if (inputDigits.includes(element)) {
      cows++;
    }
  });

  return {
    bulls,
    cows,
  };
};

module.exports.checkDigits = checkDigits;
