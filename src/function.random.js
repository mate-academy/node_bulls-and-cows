'use strict';

const getRandom = function() {
  const set = new Set();
  const numbers = [];

  while (set.size < 4) {
    set.add(Math.floor(Math.random() * 10));
  }

  for (const number of set) {
    numbers.push(number);
  }

  return Number(numbers.join(''));
};

module.exports = {
  getRandom,
};
