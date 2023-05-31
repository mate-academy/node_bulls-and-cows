'use strict';

function getBullsAndCows(secret, guess) {
  const secretArr = secret.toString().split('');
  const guessArr = guess.toString().split('');
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secretArr.length; i++) {
    if (secretArr[i] === guessArr[i]) {
      bulls++;
      secretArr[i] = 'x';
      guessArr[i] = 'x';
    }
  }

  for (let i = 0; i < secretArr.length; i++) {
    if (secretArr[i] !== 'x') {
      const index = guessArr.indexOf(secretArr[i]);

      if (index !== -1) {
        cows++;
        secretArr[i] = 'x';
        guessArr[index] = 'x';
      }
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = { getBullsAndCows };
