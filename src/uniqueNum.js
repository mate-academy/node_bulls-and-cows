'use strict';

function getUniqueRandomDigits() {
  const digits = [];

  while (digits.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }

  return digits.join('');
};

const randomNum = getUniqueRandomDigits();

module.exports = { randomNum };