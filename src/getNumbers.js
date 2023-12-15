'use strict';

const getNumbers = (from, to) => {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
};

module.exports = {
  getNumbers,
};
