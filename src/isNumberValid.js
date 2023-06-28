'use strict';

function isNumberValid(input) {
  if (input.length !== 4 || isNaN(Number(input))) {
    return false;
  }

  return new Set(input).size === input.length;
}

module.exports = {
  isNumberValid,
};
