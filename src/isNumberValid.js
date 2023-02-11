'use strict';

const isNumberValid = (number) => {
  if (isNaN(Number(number))) {
    return false;
  }

  const uniqueNumbers = new Set(number);

  return uniqueNumbers.size === number.length && number.length === 4;
};

exports.isNumberValid = isNumberValid;
