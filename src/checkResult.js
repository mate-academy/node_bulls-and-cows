/* eslint-disable no-console */
'use strict';

function checkResult(secret, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret.includes(guess[i])
      && guess[i] === secret[i]
    ) {
      bulls++;
    } else {
      cows++;
    }
  }

  return console.log(`${bulls} - bulls and ${cows} - cows`);
}

module.exports = { checkResult };
