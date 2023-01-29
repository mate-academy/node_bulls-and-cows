'use strict';

function checkForDublicates(number) {
  const digits = [];

  for (let i = 0; i < number.length; i++) {
    if (digits.includes(number[i])) {
      return true;
    }

    digits.push(number[i]);
  }

  return false;
}

module.exports.checkForDublicates = checkForDublicates;
