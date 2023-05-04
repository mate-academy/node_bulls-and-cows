'use strict';

function isValidInput(input) {
  const inputString = input.toString();

  const digits = new Set(inputString);

  return digits.size === 4;
}

module.exports = { isValidInput };
