'use strict';

function generateNumber() {
  const digits = Array.from({ length: 10 }, (_, i) => i.toString());
  const result = [];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const digit = digits[randomIndex];

    result.push(digit);
    digits.splice(randomIndex, 1);
  }

  return result.join('');
}

module.exports = { generateNumber };
