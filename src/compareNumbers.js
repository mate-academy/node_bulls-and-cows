'use strict';

function compareNumbers(guess, number) {
  let bulls = 0;
  const cows = guess.reduce((count, digit, index) => {
    if (digit === number[index]) {
      bulls++;
    } else if (number.includes(digit)) {
      return count + 1;
    }

    return count;
  }, 0);

  return {
    bulls, cows,
  };
}

module.exports = { compareNumbers };
