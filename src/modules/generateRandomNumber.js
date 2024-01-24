'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const firstDigit = Math.ceil(Math.random() * 9).toString();
  const digitArray = [firstDigit];

  while (digitArray.length < 4) {
    const newDigit = Math.round(Math.random() * 9).toString();

    if (!digitArray.includes(newDigit)) {
      digitArray.push(newDigit);
    }
  }

  return +digitArray.join('');
}

module.exports = {
  generateRandomNumber,
};
