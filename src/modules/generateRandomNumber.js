'use strict';

function generateRandomNumber() {
  const min = 1000;
  const max = 9999;

  let containDuplicate = false;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  const nums = `${result}`.split('');

  containDuplicate = nums.some((n) => nums.indexOf(n) !== nums.lastIndexOf(n));

  if (!containDuplicate) {
    return result;
  }

  return generateRandomNumber();
}

module.exports = {
  generateRandomNumber,
};
