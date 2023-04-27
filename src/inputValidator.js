'use strict';

const digits = '0123456789';

const isValidInput = (input) => {
  const hasExactlyFourDigits = input.length === 4;
  const hasOnlyUniqueDigits = input.split('').every(digit => (
    input.indexOf(digit) === input.lastIndexOf(digit)
      && digits.includes(digit)
  ));

  return hasExactlyFourDigits && hasOnlyUniqueDigits;
};

module.exports.isValidInput = isValidInput;
