'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return Number(
    digits
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .join(''),
  );
}

module.exports = {
  generateRandomNumber,
};
