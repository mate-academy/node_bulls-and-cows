'use strict';

function countBullsAndCows(secretNumber, guess) {
  let bulls = 0;
  let cows = 0;
  const secretDigits = secretNumber.toString().split('');
  const guessDigits = guess.toString().split('');

  for (let i = 0; i < secretDigits.length; i++) {
    if (secretDigits[i] === guessDigits[i]) {
      bulls++;
    } else if (secretDigits.includes(guessDigits[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = {
  countBullsAndCows,
};
