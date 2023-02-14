'use strict';

const isValidNumber = (number) => {
  if (number.length !== 4 || isNaN(Number(number))) {
    return false;
  }

  const uniqueDigits = new Set(number);

  if (uniqueDigits.size !== number.length) {
    return false;
  }

  return true;
};

module.exports = { isValidNumber };
