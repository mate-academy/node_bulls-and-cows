'use strict';

function generateRandomNumber() {
  const digits = [];

  const firstDigit = Math.floor(Math.random() * 9) + 1;

  digits.push(String(firstDigit));

  while (digits.length < 4) {
    const digit = String(Math.floor(Math.random() * 10));

    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }

  return Number(digits.join(''));
}

module.exports = {
  generateRandomNumber,
};
