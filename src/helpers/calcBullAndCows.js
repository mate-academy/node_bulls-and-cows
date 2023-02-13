'use strict';

function calcBullAndCows(secret1, guess1) {
  const secret = secret1.split('');
  const guess = guess1.split('');

  const res = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      secret[i] = '';
      guess[i] = '';
      res.bulls++;
    }
  }

  for (let i = 0; i < secret.length; i++) {
    if (secret[i]) {
      const n = guess.indexOf(secret[i]);

      if (n !== -1) {
        secret[i] = '';
        guess[n] = '';
        res.cows++;
      }
    }
  }

  return {
    bulls: res.bulls, cows: res.cows,
  };
}

module.exports.calcBullAndCows = calcBullAndCows;
