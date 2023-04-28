'use strict';

function isValidInput(input) {
  if (input.length !== 4) {
    return false;
  }

  const digits = new Set(input);

  return digits.size === 4;
}

module.exports = { isValidInput };
