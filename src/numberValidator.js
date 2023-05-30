'use strict';

const numberValidator = (secret, guess) => {
  const secretArray = secret.split('');
  const guessArray = guess.split('');
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secretArray.length; i++) {
    if (secretArray[i] === guessArray[i]) {
      bulls++;
    } else if (secretArray.includes(guessArray[i])) {
      cows++;
    }
  }

  return `Bulls: ${bulls}, Cows: ${cows}`;
};

module.exports = numberValidator;
