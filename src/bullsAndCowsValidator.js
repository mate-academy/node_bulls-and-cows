'use strict';

function getHint(secret, guess) {
  const copyOfSecret = secret.toString().split('');
  const copyOfGuess = guess.toString().split('');
  const bulls = [];
  const cows = [];

  for (let i = 0; i < copyOfSecret.length; i++) {
    if (copyOfSecret[i] === copyOfGuess[i]
    && !bulls.includes(copyOfSecret[i])) {
      bulls.push(copyOfSecret[i]);
    }

    if (copyOfSecret.includes(copyOfGuess[i])
    && copyOfSecret[i] !== copyOfGuess[i]
    && !cows.includes(copyOfGuess[i])) {
      cows.push(copyOfGuess[i]);
    }
  }

  for (let i = 0; i < copyOfSecret.length; i++) {
    if (copyOfSecret[i] === copyOfGuess[i]
    && cows.includes(copyOfSecret[i])
    && copyOfSecret.indexOf(copyOfSecret[i])
    === copyOfSecret.lastIndexOf(copyOfSecret[i])) {
      const index = cows.indexOf(copyOfSecret[i]);

      cows.splice(index, 1);
    }
  }

  return [bulls.length, cows.length];
}

module.exports.getHint = getHint;
