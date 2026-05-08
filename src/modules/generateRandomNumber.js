'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const digits = new Set();
  let randomNumber = '';

  while (digits.size < 4) {
    const digit = Math.floor(Math.random() * 10).toString();

    if (digits.size === 0 && digit === '0') {
      continue;
    }

    if (!digits.has(digit)) {
      digits.add(digit);
      randomNumber += digit;
    }
  }

  return parseInt(randomNumber, 10);
}

export default generateRandomNumber;
