'use strict';

module.exports = (input, number) => {
  const result = {
    bulls: 0,
    cows: 0,
  };

  [...number].forEach((n, i) => {
    const isBull = n === input[i];
    const isCow = !isBull && input.includes(n);

    if (isBull) {
      result.bulls++;
    }

    if (isCow) {
      result.cows++;
    }
  });

  return result;
};
