'use strict';

function getRandomNum() {
  const nums = [];

  while (nums.length < 4) {
    const randomNum = Math.floor(Math.random() * 10);

    if (!nums.includes(randomNum)) {
      nums.push(randomNum);
    }
  }

  return nums.join('');
}

module.exports = getRandomNum;
