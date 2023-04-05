'use strict';

function calculateDigits(guess, secret) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
}

module.exports = { calculateDigits };
