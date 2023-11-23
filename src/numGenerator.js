'use strict';

function generateFourDigitNumber() {
  const digits = [];

  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }

  if (digits[0] === 0) {
    const randomIndex = Math.floor(Math.random() * 3) + 1;
    const temp = digits[0];

    digits[0] = digits[randomIndex];
    digits[randomIndex] = temp;
  }

  const result = parseInt(digits.join(''), 10);

  return result;
}

module.exports = {
  generateFourDigitNumber,
};
