'use strict';

const getBullsAndCows = (input, digits) => {
  let bulls = 0;
  let cows = 0;

  input.forEach((digit, i) => {
    if (digit === digits[i]) {
      bulls++;

      return;
    }

    if (digits.includes(digit)) {
      cows++;
    }
  });

  return [bulls, cows];
};

module.exports = { getBullsAndCows };
