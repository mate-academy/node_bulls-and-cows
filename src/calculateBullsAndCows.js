'use strict';

function calculateBullsAndCows(secretNumber, guess) {
  // if (!isValidNumber(guess)) {
  //   // eslint-disable-next-line no-console
  //   console.log('Wrong data');
  // }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secretNumber.length; i++) {
    if (secretNumber[i] === guess[i]) {
      bulls++;
    } else if (secretNumber.includes(guess[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
}

// function isValidNumber(number) {
//   return /^\d{4}$/.test(number) && new Set(number).size === 4;
// }

module.exports = { calculateBullsAndCows };
