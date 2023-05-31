'use strict';

const getRandomNumber = () => {
  const digits = [];

  while (digits.length < 4) {
    const randomDigit = Math.floor(Math.random() * (9 - 1) + 1);

    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }

  return digits.join('');
};

module.exports = { getRandomNumber };
