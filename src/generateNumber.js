'use strict';

function generateNumber() {
  const number = new Set();

  while (number.size < 4) {
    const num = Math.floor(Math.random() * 10);

    number.add(num);
  }

  return Array.from(number).join('');
}

module.exports.generateNumber = generateNumber;
