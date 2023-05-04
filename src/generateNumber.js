'use strict';

const randomNumber = () => {
  const numbers = new Set();

  while (numbers.size < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!numbers.has(digit)) {
      numbers.add(digit);
    }
  }

  return [...numbers];
};

module.exports = { randomNumber };
