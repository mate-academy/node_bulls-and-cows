'use strict';

const getBullsAndCows = (inputNumber, guessedNumber) => {
  let bulls = 0;
  let cows = 0;

  const inputDigits = inputNumber.split('');
  const guessedDigits = guessedNumber.split('');

  for (let i = 0; i < inputDigits.length; i++) {
    if (inputDigits[i] === guessedDigits[i]) {
      bulls += 1;
    } else if (guessedDigits.includes(inputDigits[i])) {
      cows += 1;
    }
  }

  return {
    bulls, cows,
  };
};

module.exports = {
  getBullsAndCows,
};
