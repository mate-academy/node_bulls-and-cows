'use strict';

function generateNumber() {
  const digits = Array.from({ length: 10 }, (_, i) => i);
  const number = [];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const digit = digits.splice(randomIndex, 1)[0];

    number.push(digit);
  }

  return number.join('');
}

module.exports = generateNumber;
