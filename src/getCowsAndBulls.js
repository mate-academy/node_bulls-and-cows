'use strict';

const getCowsAndBulls = (num, goal) => {
  const str = String(num);
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === goal[i]) {
      bulls++;
      continue;
    }

    if (goal.includes(str[i])) {
      cows++;
    }
  }

  return {
    cows: cows, bulls: bulls,
  };
};

module.exports.getCowsAndBulls = getCowsAndBulls;
