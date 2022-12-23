'use strict';

function generatingDigits() {
  const numbers = [];

  while (numbers.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  return numbers.join('');
}

exports.generatingDigits = generatingDigits;
