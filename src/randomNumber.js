'use strict';

function generatorRandomNumber() {
  const numbers = new Set();

  while (numbers.size < 4) {
    const number = Math.floor(Math.random() * 10);

    if (!numbers.has(number)) {
      numbers.add(number);
    }
  }

  return Array.from(numbers).join('');
};

module.exports = { generatorRandomNumber };
