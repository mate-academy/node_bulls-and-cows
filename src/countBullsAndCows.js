'use strict';

const countBullsAndCows = (number, value) => {
  let bull = 0;
  let cows = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] === value[i]) {
      bull++;
    }

    if (value.includes(number[i])) {
      cows++;
    }
  }

  cows -= bull;

  return [bull, cows];
};

module.exports = {
  countBullsAndCows,
};
