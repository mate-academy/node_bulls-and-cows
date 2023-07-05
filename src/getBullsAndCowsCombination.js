'use strict';

const getRandomDigit = () => Math.round(Math.random() * 9);

const getBullsAndCowsCombination = () => {
  const set = new Set();

  while (set.size < 4) {
    set.add(getRandomDigit());
  }

  return [...set];
};

module.exports = {
  getBullsAndCowsCombination,
};
