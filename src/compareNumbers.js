'use strict';

function compareNumbers(guess, number) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === number[i]) {
      bulls++;
    } else if (number.toString().includes(guess[i])) {
      cows++;
    }
  }

  return [bulls, cows];
};

module.exports = { compareNumbers };
