'use strict';

const calculator = (goal, guess) => {
  let bulls = 0;
  let cows = 0;

  guess.split('').forEach((digit, index) => {
    if (digit === goal[index]) {
      bulls++;

      return;
    }

    if (goal.includes(digit)) {
      cows++;
    }
  });

  return [bulls, cows];
};

module.exports = {
  calculator,
};
