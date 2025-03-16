'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const generated = new Set();

  generated.add(Math.floor(Math.random() * 9) + 1);

  while (generated.size < 4) {
    generated.add(Math.floor(Math.random() * 10));
  }

  return Number([...generated].join(''));
}

module.exports = {
  generateRandomNumber,
};
