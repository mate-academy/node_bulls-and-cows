'use strict';

function getNumbers() {
  const nums = [];

  while (nums.length < 4) {
    const random = Math.floor(Math.random() * 9 + 1);

    if (!nums.includes(String(random))) {
      nums.push(String(random));
    }
  }

  return nums;
}

module.exports = {
  numbers: getNumbers(),
};
