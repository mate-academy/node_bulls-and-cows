'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const res = new Set();

  while (res.size < 4) {
    const random = Math.ceil(Math.random() * 9);

    res.add(random);
  }

  return Number(Array.from(res).join(''));
}

module.exports = {
  generateRandomNumber,
};
