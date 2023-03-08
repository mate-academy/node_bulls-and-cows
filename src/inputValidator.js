'use strict';

const inputValidator = (inputNumber) => {
  if (inputNumber.length !== 4) {
    return false;
  }

  for (const n of inputNumber) {
    if (inputNumber.indexOf(n) !== inputNumber.lastIndexOf(n)) {
      return false;
    }
  }

  return true;
};

module.exports = { inputValidator };
