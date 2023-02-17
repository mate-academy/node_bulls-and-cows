'use strict';

function isNumberValid(number) {
  if (number.length !== 4) {
    return false;
  }

  if (isNaN(Number(number))) {
    return false;
  }

  return true;
};

module.exports.isNumberValid = isNumberValid;
