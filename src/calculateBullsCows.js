'use strict';

function calculateBullsCows(realNumber, playerNumber) {
  let bulls = 0;
  let cows = 0;

  const secret = realNumber.toString(10).split('');
  const guess = playerNumber.toString(10).split('');

  for (let i = 0; i < 4; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = {
  calculateBullsCows,
};
