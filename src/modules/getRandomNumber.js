'use strict';

const getRandomNumber = () => {
  const digits = new Set();

  while (digits.size < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    digits.add(randomDigit);
  }

  return Array.from(digits).join('');
};

module.exports = getRandomNumber;
