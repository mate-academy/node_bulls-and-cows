'use strict';

function getHint(secret, guess) {
  const map = {};
  let bulls = 0;
  let cows = 0;

  for (const char of secret) {
    map[char] = map[char] + 1 || 1;
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls++;

      if (map[guess[i]] <= 0) {
        cows--;
      }
    }

    if (guess[i] !== secret[i] && map[guess[i]] > 0) {
      cows++;
    }

    map[guess[i]] = map[guess[i]] - 1;
  }

  return [bulls, cows];
}

module.exports = getHint;
