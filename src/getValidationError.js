'use strict';

const getValidationError = (number) => {
  if (isNaN(+number)) {
    return 'Please, enter only numbers!';
  }

  if (number.length !== 4) {
    return 'Please, enter number with 4 digits!';
  }

  const digitsSet = new Set(number);

  if (digitsSet.size !== 4) {
    return 'Please, enter number with 4 unique digits!';
  }

  return '';
};

module.exports = {
  getValidationError,
};
