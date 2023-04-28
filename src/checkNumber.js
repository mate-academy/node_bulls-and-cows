'use strict';

const checkNumber = (number) => {
  if (typeof number !== 'string' || number.length !== 4) {
    return false;
  }

  for (let i = 0; i < number.length; i++) {
    if (!/^\d$/.test(number[i])) {
      return false;
    }

    if (number.indexOf(number[i]) !== i) {
      return false;
    }
  }

  return true;
};

module.exports.checkNumber = checkNumber;
