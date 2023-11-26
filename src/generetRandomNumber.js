'use strict';

function generateRandomNumber() {
  const digits = [...Array(10).keys()]; // Create an array [0, 1, 2, ..., 9]
  let result = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const digit = digits[randomIndex];

    // Remove the chosen digit to ensure it's unique
    digits.splice(randomIndex, 1);

    result += digit;
  }

  return result;
}

module.exports = { generateRandomNumber };
