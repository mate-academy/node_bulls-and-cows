'use strict';

module.exports.findBullsAndCows = (secretNum, guess) => {
  const secret = `${secretNum}`;
  let bulls = 0;
  let cows = 0;

  const secretArr = [...secret];
  const guessArr = [...guess];

  for (let i = 0; i < guessArr.length; i++) {
    const elementGuess = guessArr[i];
    const elementSecret = secretArr[i];

    if (elementGuess === elementSecret) {
      guessArr.splice(i, 1, '-');
      secretArr.splice(i, 1, '-');
      bulls++;
    }
  }

  for (let i = 0; i < guessArr.length; i++) {
    const el = guessArr[i];

    if (el === '-') {
      continue;
    }

    const index = secretArr.indexOf(el);

    if (index === -1) {
      continue;
    }

    cows++;
    secretArr.splice(index, 1, '-');
  }

  return `bulls: ${bulls}, cows: ${cows}`;
};
