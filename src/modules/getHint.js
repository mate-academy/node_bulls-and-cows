'use strict';

function getHint(winCombination, guess) {
  const secretCopy = winCombination.split('');
  const guessCopy = guess.split('');
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secretCopy.length; i++) {
    if (secretCopy[i] === guessCopy[i]) {
      bulls++;
      secretCopy.splice(i, 1);
      guessCopy.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < secretCopy.length; i++) {
    if (secretCopy.includes(guessCopy[i])) {
      cows++;
      secretCopy.splice(secretCopy.indexOf(guessCopy[i]), 1);
      guessCopy.splice(guessCopy.indexOf(guessCopy[i]), 1);
      i--;
    }
  }

  return `bulls: ${bulls}, cows: ${cows}`;
}

module.exports = { getHint };
