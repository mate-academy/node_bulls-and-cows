'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let numStr = (Math.floor(Math.random() * 9) + 1).toString();

  while (numStr.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10).toString();

    if (!numStr.includes(randomDigit)) {
      numStr += randomDigit;
    }
  }

  return Number(numStr);
}

module.exports = {
  generateRandomNumber,
};
