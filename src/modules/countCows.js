'use strict';

const countCows = (originalNum, inputNum) => {
  const originalArr = Array.from(String(originalNum), (num) => +num);
  const inputArr = Array.from(String(inputNum), (num) => +num);

  return originalArr.reduce((count, num) => {
    return inputArr.includes(num) ? count + 1 : count;
  }, 0);
};

module.exports = countCows;
