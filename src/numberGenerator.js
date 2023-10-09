'use strict';

const numberGenerator = () => {
  const nums = [];
  const numLength = 4;

  for (let i = 0; i < numLength; i++) {
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
