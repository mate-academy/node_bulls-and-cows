'use strict';

function generatorRandomNumber() {
  const numbers = [];

  while (numbers.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  return numbers.join('');
};

module.exports = { generatorRandomNumber };
