'use strict';

function generateRandomNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    result += digits[randomIndex];
    digits.splice(randomIndex, 1);
  }

  return result;
}

module.exports = { generateRandomNumber };
