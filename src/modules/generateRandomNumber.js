'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let code;

  do {
    const digits = [...Array(10).keys()];

    for (let i = digits.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [digits[i], digits[j]] = [digits[j], digits[i]];
    }
    code = digits.slice(0, 4);
  } while (code[0] === 0);

  return +code.join('');
}

module.exports = {
  generateRandomNumber,
};
