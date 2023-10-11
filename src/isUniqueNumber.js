'use strict';

function isUniqueNumber(number) {
  for (let i = 0; i < number.length; i++) {
    const digit = number[i];

    if (number.indexOf(digit) !== i) {
      return false;
    }
  }

  return !isNaN(number);
}

module.exports = {
  isUniqueNumber,
};
