'use strict';

const getGeneratedNumber = () => {
  let numbers = '';

  while (numbers.length < 4) {
    const number = Math.floor(Math.random() * (10 - 0) + 0);

    if (!numbers.includes(number)) {
      numbers += number;
    }
  }

  return numbers;
};

module.exports = { getGeneratedNumber };
