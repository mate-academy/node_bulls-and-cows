'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let num = '';

  for (let i = 0; i < 4; i++) {
    const pool = i === 0 ? digits.slice(1) : digits;
    const j = Math.floor(Math.random() * pool.length);

    num += pool[j];

    const indexToRemove = digits.indexOf(pool[j]);

    digits.splice(indexToRemove, 1);
  }

  return parseInt(num);
}

module.exports = {
  generateRandomNumber,
};
