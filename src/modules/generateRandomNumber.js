'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let res = '';

  while (res.length !== 4) {
    const num = Math.floor(Math.random() * 10);

    if (res.includes(num.toString()) || (res.length === 0 && num === 0)) {
      continue;
    } else {
      res += num;
    }
  }

  return +res;
}

module.exports = { generateRandomNumber };
