'use strict';

function has4Digits(digits) {
  return digits.length === 4;
};

function hasOnlyNumbers(digits) {
  return !isNaN(+digits);
}

function hasUniqueNumber(digits) {
  const filteredDigits = digits
    .split('')
    .filter((digit, index, allDigits) => {
      const firstIndex = allDigits.indexOf(digit);

      return firstIndex === index;
    });

  return filteredDigits.length === digits.length;
}

module.exports = {
  has4Digits,
  hasOnlyNumbers,
  hasUniqueNumber,
};
