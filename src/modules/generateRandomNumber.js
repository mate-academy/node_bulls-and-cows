'use strict';

function generateRandomNumber() {
  const output = [];
  const numLen = 4;
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < numLen; i++) {
    const startIndex = +(i === 0);
    const position =
      Math.floor(Math.random() * (nums.length - startIndex)) + startIndex;
    const randomNum = nums[position];

    nums = nums.filter((elem) => elem !== randomNum);
    output.push(randomNum);
  }

  return output;
}

module.exports = {
  generateRandomNumber,
};
