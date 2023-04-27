'use strict';

function generateNumber() {
  const digits = [];

  while (digits.length < 4) {
    const randomDigit = Math.floor(Math.random() * 9);

    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }

  return digits.join('');
}

module.exports = { generateNumber };
