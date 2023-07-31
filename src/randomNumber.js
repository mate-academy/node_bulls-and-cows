'use strict';

function randomNumber() {
  const digits = new Set();

  while (digits.size < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    digits.add(randomDigit);
  }

  return [...digits].join('');
};

module.exports = randomNumber;
