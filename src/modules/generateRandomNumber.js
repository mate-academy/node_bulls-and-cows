'use strict';

function generateRandomNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];

  const firstDigitIndex = Math.floor(Math.random() * 9) + 1; // 1-9

  result.push(digits[firstDigitIndex]);
  digits.splice(firstDigitIndex, 1);

  while (result.length < 4) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    result.push(digits[randomIndex]);
    digits.splice(randomIndex, 1);
  }

  return Number(result.join(''));
}

module.exports = {
  generateRandomNumber,
};
