'use strict';

const check = (number, guess) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (number.includes(guess[i])) {
      if (number.indexOf(guess[i]) === i) {
        bulls++;
      } else {
        cows++;
      }
    }
  }

  return [bulls, cows];
};

module.exports = {
  check,
};
