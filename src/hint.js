'use strict';

function getHint(secret, guess) {
  if (guess.length < 4) {
    return 'Please enter 4 digits!';
  }

  let bulls = 0;
  const cows = [];
  let copySecret = secret;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
      copySecret = secret.slice(i + 1, secret.length - i);
    } else {
      if (copySecret.includes(guess[i]) && !cows.includes(guess[i])) {
        cows.push(guess[i]);
      }
    }
  }

  return `bulls: ${bulls}, cows: ${cows.length}`;
}

module.exports.getHint = getHint;
