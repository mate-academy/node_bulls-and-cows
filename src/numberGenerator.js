'use strict';

const { NUMBER_LENGTH } = require('./constants');

const numberGenerator = () => {
  const nums = [];

  for (let i = 0; i < NUMBER_LENGTH; i++) {
    const num = Math.floor(Math.random() * 10);

    if (nums.includes(num) || (!i && !num)) {
      i--;
    } else {
      nums.push(num);
    }
  }

  return nums;
};

module.exports = {
  numberGenerator,
};
