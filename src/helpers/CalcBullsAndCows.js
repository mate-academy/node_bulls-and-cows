'use strict';

function calcBullsAndCows(secret, guess) {
  const secretWord = secret.split('');
  const guessedWord = guess.split('');
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === guessedWord[i]) {
      secretWord[i] = '';
      guessedWord[i] = '';
      result.bulls++;
    }
  }

  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i]) {
      const n = guessedWord.indexOf(secretWord[i]);

      if (n !== -1) {
        secretWord[i] = '';
        guessedWord[n] = '';
        result.cows++;
      }
    }
  }

  return {
    bulls: result.bulls, cows: result.cows,
  };
}

module.exports = {
  calcBullsAndCows,
};
