'use strict';

function generateNumber() {
  const digits = new Set();

  while (digits.size < 4) {
    const digit = Math.floor(Math.random() * 10);

    digits.add(digit);
  }

  return Array.from(digits).join('');
}

module.exports = { generateNumber };
