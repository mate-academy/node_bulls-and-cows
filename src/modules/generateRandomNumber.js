'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const numbersGenerated = [Math.floor(Math.random() * 9) + 1];

  while (numbersGenerated.length < 4) {
    const numberGenerated = Math.floor(Math.random() * 10);

    const checkDuplicates = numbersGenerated.includes(numberGenerated);

    if (!checkDuplicates) {
      numbersGenerated.push(numberGenerated);
    }
  }

  return Number(numbersGenerated.join(''));
}

module.exports = {
  generateRandomNumber,
};
