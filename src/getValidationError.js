'use strict';

const getValidationError = (number, digitsCount) => {
  if (isNaN(+number)) {
    return 'Please, enter only numbers!';
  }

  if (number.length !== digitsCount) {
    return `Sorry, your number doesn't have ${digitsCount} digits!`;
  }

  const digitsSet = new Set(number);

  if (digitsSet.size !== digitsCount) {
    return `Sorry, your number doesn't have ${digitsCount} unique digits!`;
  }

  return '';
};

module.exports = {
  getValidationError,
};
