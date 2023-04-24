'use strict';

function isValidNumber(number) {
  if (number.length !== 4 || isNaN(Number(number))) {
    return false;
  }

  return true;
}

module.exports.isValidNumber = isValidNumber;
