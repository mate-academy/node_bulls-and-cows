'use strict';

function isNumberValid(num) {
  if (isNaN(num)) {
    return false;
  }

  if (num.length > 4 || num.length < 4) {
    return false;
  }

  const isRandomNumbers = new Set(num);

  if (isRandomNumbers.size !== 4) {
    return false;
  }

  return true;
}

module.exports.isNumberValid = isNumberValid;
