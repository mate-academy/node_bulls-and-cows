'use strict';

function generateRandomNumber() {
  const digits = '0123456789'.split('');
  const numbers = [];

  while (numbers.length < 4) {
    const digitIndex = Math.floor(Math.random() * digits.length);

    if (numbers.length === 0 || !numbers.includes(digits[digitIndex])) {
      numbers.push(digits[digitIndex]);
    }
  }

  return numbers.join('');
};

module.exports = {
  generateRandomNumber,
};
