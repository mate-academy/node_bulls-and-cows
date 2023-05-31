'use strict';

const validateUserInput = require('./validateUserInput');

function getHint(secret, guess) {
  const validation = validateUserInput(guess);

  if (validation) {
    return validation;
  }

  let bulls = 0;
  let cows = 0;
  let i = 0;

  while (i < 4) {
    if (secret[i] === guess[i]) {
      bulls++;
    }

    if (secret[i] !== guess[i] && secret.includes(guess[i])) {
      cows++;
    }

    i++;
  }

  return `bulls: ${bulls}, cows: ${cows}`;
}

module.exports = getHint;
