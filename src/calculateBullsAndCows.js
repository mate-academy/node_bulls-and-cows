'use strict';

const calculateBullsAndCows = (secret, guess) => {
  const secretStr = secret.toString();
  const guessStr = guess.toString();

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secretStr.length; i++) {
    if (secretStr[i] === guessStr[i]) {
      bulls++;
    } else if (secretStr.includes(guessStr[i])) {
      cows++;
    }
  }

  // eslint-disable-next-line no-console
  console.log(`${bulls} bulls and ${cows} cows`);
};

module.exports = {
  calculateBullsAndCows,
};
