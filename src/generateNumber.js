'use strict';

function generateNumber() {
  const digits = [];

  while (digits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }

  const randomNumber = digits.join('');

  return +randomNumber;
};

module.exports = {
  generateNumber,
};
