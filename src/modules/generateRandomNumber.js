'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 9000) + 1000;
  } while (randomNumber.toString().charAt(0) === '0');

  const digits = randomNumber.toString().split('');
  const isDuplicate = digits.some(
    (digit, index) => digits.indexOf(digit) !== index,
  );

  if (isDuplicate) {
    return generateRandomNumber();
  }

  return randomNumber;
}

module.exports = {
  generateRandomNumber,
};
