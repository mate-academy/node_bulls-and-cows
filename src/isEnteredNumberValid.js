'use strict';

function isEnteredNumberValid(enteredValue) {
  if (enteredValue.length !== 4) {
    return false;
  }

  const uniqueItems = new Set(enteredValue);

  return uniqueItems.size === enteredValue.length;
}

module.exports.isEnteredNumberValid = isEnteredNumberValid;
