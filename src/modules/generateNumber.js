'use strict';

function generateNumber() {
  const digits = '0123456789'.split('');
  const randomNumber = [];

  while (randomNumber.length < 4) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const digit = digits[randomIndex];

    if (!randomNumber.includes(digit)) {
      randomNumber.push(digit);
    }
  }

  return randomNumber.join('');
}

module.exports = {
  generateNumber,
};
