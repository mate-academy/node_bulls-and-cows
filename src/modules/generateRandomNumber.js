'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let result = 1234;

  while (true) {
    result = Math.floor(Math.random() * 9000 + 1000);

    const resultString = result.toString();
    const numbers = '0123456789';

    let hasDuplicates = false;

    for (const n of numbers) {
      if (resultString.indexOf(n) !== resultString.lastIndexOf(n)) {
        hasDuplicates = true;
      }
    }

    if (hasDuplicates) {
      continue;
    } else {
      break;
    }
  }

  return result;
}

module.exports = {
  generateRandomNumber,
};
