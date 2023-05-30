'use strict';

export function game(secret, guess) {
  if (isNaN(+guess)) {
    return ' No correct FORMAT of number!';
  }

  if (guess.length !== 4) {
    return ' No correct LENGTH of number!';
  }

  let bulls = 0;
  let cows = 0;
  const secretDigits = {};
  const guessDigits = {};

  for (let i = 0; i < secret.length; i++) {
    const s = secret[i];
    const g = guess[i];

    if (s === g) {
      bulls++;
    } else {
      if (secretDigits[g] > 0) {
        cows++;
        secretDigits[g]--;
      }

      if (guessDigits[s] > 0) {
        cows++;
        guessDigits[s]--;
      }

      secretDigits[s] = (secretDigits[s] || 0) + 1;
      guessDigits[g] = (guessDigits[g] || 0) + 1;
    }
  }

  return ` Score: { bulls: ${bulls}, cows: ${cows} }`;
}
