'use strict';

const validDigits = '0123456789'.split('');

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const res = validDigits
    .sort(() => Math.random() - 0.5)
    .join('');

  return res.charAt(0) === '0'
    ? +res.slice(1, 5)
    : +res.slice(0, 4);
}

module.exports = {
  generateRandomNumber,
};
