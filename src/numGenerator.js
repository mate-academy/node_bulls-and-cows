'use strict';

function generateNumber() {
  const number = [];

  while (number.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!number.includes(digit)) {
      number.push(digit);
    }
  }

  return number.join('');
};

module.exports.generateNumber = generateNumber;
