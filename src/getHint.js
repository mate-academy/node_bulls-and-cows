'use strict';

function getHint(secret, guess) {
  let bulls = 0;
  let cows = 0;
  const secretSplit = secret.split('');
  const guessSplit = guess.split('');
  const leng = secretSplit.length;

  for (let i = 0; i < leng; i++) {
    const currSecret = secretSplit[i];
    const currGuess = guessSplit[i];

    if (currSecret === currGuess) {
      bulls++;

      secretSplit[i] = 'x';
      guessSplit[i] = '-';
    }
  }

  for (let i = 0; i < leng; i++) {
    const currSecret = secretSplit[i];
    const guessIndex = guessSplit.indexOf(currSecret);

    if (currSecret === 'x' || guessIndex === -1) {
      continue;
    }

    cows++;

    secretSplit[i] = 'o';
    guessSplit[guessIndex] = '-';
  }

  if (bulls === 4) {
    return '';
  }

  return `bulls: ${bulls}, cows: ${cows}, try once more: `;
}

module.exports.getHint = getHint;
