'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function checkAreDuplicateDigits(number) {
  const stringedNumber = String(number);

  return stringedNumber.length !== new Set(stringedNumber).size;
};

function generateRandomNumber() {
  let number;

  do {
    number = 1000 + Math.round(Math.random() * 8999);
  } while (checkAreDuplicateDigits(number));

  return number;
};

module.exports = {
  generateRandomNumber,
  checkAreDuplicateDigits,
};
