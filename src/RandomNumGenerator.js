'use strict';

function getFourRandomDigits() {
  return Math.random().toString().slice(2, 4 + 2);
}

module.exports.getFourRandomDigits = getFourRandomDigits;
