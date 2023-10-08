'use strict';

function isNumberValid(number) {
  const num = number.split('');

  if (num.length !== 4) {
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
