'use strict';

function getNumber(digits, n) {
  if (n === 0) {
    return '';
  }

  const index = Math.floor(Math.random() * digits.length);
  const newDigits = [...digits];
  const digit = newDigits.splice(index, 1);

  return '' + digit + getNumber(newDigits, n - 1);
}

module.exports = { getNumber };
