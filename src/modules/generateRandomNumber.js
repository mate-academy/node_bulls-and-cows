'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 9000) + 1000;
  } while (new Set(randomNumber.toString()).size !== 4);

  return randomNumber;
}
module.exports = { generateRandomNumber };
// export default generateRandomNumber;
