'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = [...'0123456789'];
  let result = '';

  while (result.length < 4) {
    const index = Math.floor(Math.random() * digits.length);

    result += digits[index];
    digits.splice(index, 1);
  }

  if (result[0] === '0') {
    return generateRandomNumber();
  }

  return Number(result);
}

module.exports = {
  generateRandomNumber,
};
