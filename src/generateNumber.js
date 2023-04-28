'use strict';

const randomNumber = () => {
  const numbers = [];

  while (numbers.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!numbers.includes(digit)) {
      numbers.push(digit);
    }
  }

  return numbers;
};

module.exports = { randomNumber };
