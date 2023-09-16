'use strict';

const numberLength = 4;

const numberNormalizer = 10;

const getRandomNumber = () => {
  let numbers = '';

  while (numbers.length < numberLength) {
    const number = Math.floor(Math.random() * numberNormalizer);

    if (!numbers.includes(number)) {
      numbers += number;
    }
  }

  return numbers;
};

module.exports = { getRandomNumber };
