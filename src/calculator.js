'use strict';

const calculator = (secret, guess) => {
  const result = {
    bulls: 0,
    cows: 0,
  };

  const str = secret.toString();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === guess[i]) {
      result.bulls++;
    } else if (str.includes(guess[i])) {
      result.cows++;
    }
  }

  return result;
};

module.exports = calculator;
