'use strict';

const numbersGenerator = () => {
  let numbers = '';

  while (numbers.length !== 4) {
    const number = Math.floor(Math.random() * 4);

    if (!numbers.includes(number)) {
      numbers += number;
    }
  }

  return numbers;
};

module.exports = {
  numbersGenerator,
};
