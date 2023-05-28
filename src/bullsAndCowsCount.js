'use strict';

function geBullsAndCows(secret, guess) {
  let bulls = 0;
  let cows = 0;
  const secretArr = secret.split('');
  const guessArr = guess.split('');

  for (let i = 0; i < secretArr.length; i++) {
    if (secretArr[i] === guessArr[i]) {
      bulls++;
      secretArr[i] = 'X';
      guessArr[i] = 'X';
    }
  }

  for (let i = 0; i < guessArr.length; i++) {
    if (guessArr[i] !== 'X' && secretArr.includes(guessArr[i])) {
      cows++;

      const index = secretArr.indexOf(guessArr[i]);

      secretArr[index] = 'X';
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = geBullsAndCows;
