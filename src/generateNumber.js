'use strict';

const generateNumber = () => {
  const randomDigits = [];

  while (randomDigits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!randomDigits.includes(digit)) {
      randomDigits.push(digit);
    }
  }

  return randomDigits.join('');
};

module.exports = { generateNumber };
