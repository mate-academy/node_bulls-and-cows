'use strict';

function getHint(secret, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }

  return `bulls: ${bulls}, cows: ${cows}`;
}

module.exports = { getHint };
