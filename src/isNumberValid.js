'use strict';

const { NUMBER_LENGTH } = require('./constants');

function isNumberValid(number) {
  const num = number.split('');

  if (num.length !== NUMBER_LENGTH) {
    return false;
  }

  for (const n of num) {
    if (num.indexOf(n) !== num.lastIndexOf(n)) {
      return false;
    }
  }

  return true;
}

module.exports = { isNumberValid };
