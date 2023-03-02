'use strict';

const getValidDigits = (input) => {
  const digits = [...input.trim()].map(Number);

  const hasOnlyDigits = digits.every(digit => !isNaN(digit));
  const has4Digits = digits.length === 4;
  const hasUniqueDigits = new Set(digits).size === 4;

  if (!hasOnlyDigits) {
    throw Error('Please only enter digits.');
  }

  if (!has4Digits) {
    throw Error('Incorrect number of digits.');
  }

  if (!hasUniqueDigits) {
    throw Error('All digits should be different.');
  }

  return digits;
};

module.exports = { getValidDigits };
