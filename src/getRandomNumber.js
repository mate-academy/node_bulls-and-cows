'use strict';

const getRandomNumber = () => {
  const nums = new Set();

  while (nums.size !== 4) {
    nums.add(Math.floor(Math.random() * 10) + 0);
  }

  return [...nums].join('');
};

module.exports.getRandomNumber = getRandomNumber;
