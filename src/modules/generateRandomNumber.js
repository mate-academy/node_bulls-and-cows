'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  let generated = '';

  for (let i = 0; i < 4; i++) {
    let newDigit = generateRandomDigit();

    while (!generated.length && newDigit === 0) {
      newDigit = generateRandomDigit();
    }

    while (generated.includes(newDigit)) {
      newDigit = generateRandomDigit();
    }

    generated += newDigit;
  }

  return Number(generated);
}

function generateRandomDigit() {
  return Math.floor(0 + (10) * Math.random());
}

module.exports = {
  generateRandomNumber,
};
