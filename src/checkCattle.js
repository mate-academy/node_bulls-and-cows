'use strict';

function checkCattle(number, guess) {
  const res = [];

  for (let i = 0; i < guess.length; i++) {
    const digit = guess[i];

    if (number[i] === digit) {
      res.push('Bull');
    } else if (number.includes(digit)) {
      res.push('Cow');
    }
  }

  return res;
}

module.exports = checkCattle;
