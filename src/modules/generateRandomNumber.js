'use strict';

function generateRandomNumber() {
  const digits = new Set();

  while (digits.size < 4) {
    const digit = Math.floor(Math.random() * 10).toString();

    if (digits.size === 0 && digit === '0') {
      continue;
    }

    if (!digits.has(digit)) {
      digits.add(digit);
    }
  }

  return parseInt([...digits].join(''), 10);
}

module.exports = {
  generateRandomNumber,
};
