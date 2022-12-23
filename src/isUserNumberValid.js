'use strict';

function isUserNumberValid(userNumber) {
  return new Set(userNumber).size === 4;
}

module.exports = { isUserNumberValid };
