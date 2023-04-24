'use strict';

function isCorrectNumber(number) {
  const unique = new Set(number);

  if (unique.size !== number.length) {
    return false;
  }

  return true;
}

module.exports.isCorrectNumber = isCorrectNumber;
