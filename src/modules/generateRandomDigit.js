'use strict';

function generateRandomDigit() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    result.push(digits[randomIndex]);
    digits.splice(randomIndex, 1);
  }

  return result.join('');
}

module.exports = { generateRandomDigit };
