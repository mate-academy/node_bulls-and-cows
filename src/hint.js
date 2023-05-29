'use strict';

function getHint(secret, guess) {
  if (guess.length !== 4) {
    return 'Please enter 4 digits!';
  }

  const uniqDigits = new Set(guess);

  if (uniqDigits.size !== 4) {
    return 'Please enter 4 unique digits!';
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      if (secret.includes(guess[i])) {
        cows++;
      }
    }
  }

  return `bulls: ${bulls}, cows: ${cows}`;
}

module.exports.getHint = getHint;
