'use strict';

function getRandomNumber() {
  const nums = [];

  while (nums.length < 4) {
    const num = Math.floor(Math.random() * 10);

    if (!nums.includes(num)) {
      nums.push(num);
    }
  }

  if (nums[0] === 0) {
    const randomIndex = Math.floor(Math.random() * 3) + 1;
    const temp = nums[0];

    nums[0] = nums[randomIndex];
    nums[randomIndex] = temp;
  }

  return parseInt(nums.join(''));
};

module.exports = { getRandomNumber };
