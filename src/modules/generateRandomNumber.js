'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let number;

  do {
    number = Math.floor(Math.random() * 9000) + 1000;
  } while (
    new Set(number.toString()).size !== 4
    || number.toString()[0] === '0'
  );

  return number;
}

module.exports = {
  generateRandomNumber,
};
