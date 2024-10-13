'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let result;

  do {
    result = Math.floor(1000 + Math.random() * 9000).toString();
  } while (new Set(result).size !== 4);

  return parseInt(result);
}

module.exports = {
  generateRandomNumber,
};
