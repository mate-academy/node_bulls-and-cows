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
    number = Math.floor(1000 + Math.random() * 9000);
  } while (new Set(String(number)).size !== 4);

  return number;
}

module.exports = {
  generateRandomNumber,
};
