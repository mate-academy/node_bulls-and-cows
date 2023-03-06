'use strict';

const getRandomNumber = () => {
  const set = new Set();

  while (set.size < 4) {
    set.add(Math.floor(Math.random() * 10));
  }

  const numbers = [...set];

  return Number(numbers.join(''));
};

module.exports = {
  getRandomNumber,
};
