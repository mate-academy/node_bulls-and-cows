'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let number = digits[Math.floor(Math.random() * digits.length)];

  digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].filter(
    (d) => !number.includes(d),
  );

  while (number.length < 4) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    number += digits[randomIndex];
    digits.splice(randomIndex, 1);
  }

  return Number(number);
}

module.exports = {
  generateRandomNumber,
};
