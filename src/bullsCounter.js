'use strict';

function getHint(secret, guess) {
  const newSecret = secret.split('');
  const newGuess = guess.split('');

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < newSecret.length; i++) {
    if (newSecret[i] === newGuess[i]) {
      newSecret.splice(i, 1, 'a');
      newGuess.splice(i, 1, 'b');
      bulls++;
    }
  }

  for (let j = 0; j < newSecret.length; j++) {
    if (newSecret[j]) {
      const index = newGuess.indexOf(newSecret[j]);

      if (index !== -1) {
        newSecret.splice(j, 1, 'c');
        newGuess.splice(index, 1, 'd');
        cows++;
      }
    }
  }

  return `bulls: ${bulls}, cows: ${cows}`;
}

module.exports = { getHint };
