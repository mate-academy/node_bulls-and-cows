'use strict';

const calculateCowsAndBulls = (number, answer) => {
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] === answer[i]) {
      bulls++;
      continue;
    }

    if (number.includes(answer[i])) {
      cows++;
      continue;
    }
  }

  return [bulls, cows];
};

module.exports = { calculateCowsAndBulls };
