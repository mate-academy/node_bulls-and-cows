'use strict';

const countBulls = (originalNum, inputNum) => {
  const originalArr = Array.from(String(originalNum), (num) => +num);
  const inputArr = Array.from(String(inputNum), (num) => +num);

  return originalArr.reduce((count, num, index) => {
    return num === inputArr[index] ? count + 1 : count;
  }, 0);
};

module.exports = countBulls;
