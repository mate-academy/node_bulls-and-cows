'use strict';

const findBullsAndCows = (secret, guess) => {
  const n = secret.length;
  let bulls = 0;
  let cows = 0;

  const secretCopy = secret.split('');
  const guessCopy = guess.split('');

  for (let i = 0; i < n; i++) {
    if (secretCopy[i] === guessCopy[i]) {
      secretCopy[i] = '';
      guessCopy[i] = '';
      bulls++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (secretCopy[i] !== '') {
      const j = guessCopy.indexOf(secretCopy[i]);

      if (j > -1) {
        secretCopy[i] = '';
        guessCopy[j] = '';
        cows++;
      }
    }
  }

  return {
    bulls,
    cows,
  };
};

exports.findBullsAndCows = findBullsAndCows;
