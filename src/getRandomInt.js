'use strict';

function getRandomInt() {
  const nums = [];

  while (nums.length !== 4) {
    const randomNum = Math.floor(Math.random() * (9 - 1 + 1) + 1);

    if (!nums.includes(randomNum)) {
      nums.push(randomNum);
    }
  }

  return +nums.join('');
}

module.exports = {
  getRandomInt,
};
