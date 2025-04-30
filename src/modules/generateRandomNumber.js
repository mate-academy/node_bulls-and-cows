'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */

function generateRandomNumber() {
  let res = '';

  res += Math.floor(Math.random() * 9) + 1;

  while (res.length < 4) {
    const newDigit = Math.ceil(Math.random() * 9);

    if (!res.includes(newDigit)) {
      res += newDigit;
    }
  }

  return Number(res);
}

module.exports = {
  generateRandomNumber,
};
