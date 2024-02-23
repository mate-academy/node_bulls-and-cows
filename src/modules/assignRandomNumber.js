'use strict';

function assignRandomNumber(secretCode) {
  const number = Math.floor(Math.random() * 9 + 1);

  if (secretCode.includes(number)) {
    return assignRandomNumber(secretCode);
  }

  return number;
}

module.exports = { assignRandomNumber };
