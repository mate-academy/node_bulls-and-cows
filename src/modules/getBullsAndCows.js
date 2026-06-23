'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const digitsToGuess = Array.from(String(numberToGuess));
  const digits = Array.from(String(userInput));

  let countCows = 0;
  let countBulls = 0;

  for (let i = 0; i < 4; i++) {
    if (+digits[i] === +digitsToGuess[i]) {
      countBulls += 1;
      digitsToGuess[i] = null;
    }
  }

  digits.forEach((digit) => {
    if ([...digitsToGuess].includes(digit)) {
      countCows += 1;
    }
  });

  return {
    bulls: countBulls,
    cows: countCows,
  };
}

module.exports = {
  getBullsAndCows,
};
