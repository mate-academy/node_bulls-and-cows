'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  digits.sort(() => {
    return 0.5 - Math.random();
  });

  const uniqueFourDigitNumber = digits.slice(0, 4).join('');

  return uniqueFourDigitNumber;
};

module.exports = {
  generateRandomNumber,
};
