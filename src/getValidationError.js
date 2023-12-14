'use strict';

const digitsCount = 4;

const getValidationError = (number) => {
  if (isNaN(+number)) {
    return 'Please, enter only numbers!';
  }

  if (number.length !== digitsCount) {
    return 'Please, enter number with 4 digits!';
  }

  const digitsSet = new Set(number);

  if (digitsSet.size !== digitsCount) {
    return 'Please, enter number with 4 unique digits!';
  }

  return '';
};

module.exports = {
  getValidationError,
};
