'use strict';

function randomDigits() {
  const digits = Array.from({ length: 10 }, (_, index) => index);

  for (let i = digits.length - 1; i > 1; i--) {
    const j = Math.floor(Math.random() * i) + 1;

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  const randomNumber = parseInt(digits.slice(1, 5).join(''), 10);

  return randomNumber;
}

module.exports = randomDigits;
