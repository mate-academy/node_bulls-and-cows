'use strict';

function isNumberValid(enteredValue) {
  if (enteredValue.length !== 4) {
    return false;
  }

  if (isNaN(+enteredValue)) {
    return false;
  }

  const uniqueNumbers = new Set(enteredValue);

  return uniqueNumbers.size === enteredValue.length;
}

module.exports.isNumberValid = isNumberValid;
