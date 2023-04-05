'use strict';

const calculateCowsAndBulls = (number, answer) => {
  return answer.split('').reduce((count, char, index) => {
    if (char === number[index]) {
      return {
        ...count,
        bulls: count.bulls + 1,
      };
    }

    if (number.includes(char)) {
      return {
        ...count,
        cows: count.cows + 1,
      };
    }

    return count;
  }, {
    bulls: 0,
    cows: 0,
  });
};

module.exports = { calculateCowsAndBulls };
