'use strict';

const generateRandomNumber = () => {
  const uniqueDigits = [];

  while (uniqueDigits.length < 4) {
    const digit = Math.floor(Math.random() * 10);

    if (!uniqueDigits.includes(digit)) {
      uniqueDigits.push(digit);
    }
  }

  const resultNumber = uniqueDigits.join('');

  return parseInt(resultNumber);
};

module.exports = { generateRandomNumber };
