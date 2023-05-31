'use strict';

function getHint(secret, guess) {
  let bulls = 0;
  let cows = 0;

  secret.split('').forEach((secretPart, i) => {
    if (secretPart === guess[i]) {
      bulls++;
    }

    if ((guess.includes(secretPart) && secretPart !== guess[i])) {
      cows++;
    }
  });

  return `bulls: ${bulls}, cows: ${cows}`;
}

module.exports = {
  getHint,
};
