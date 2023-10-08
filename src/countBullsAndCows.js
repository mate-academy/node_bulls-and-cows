'use strict';

function countBullsAndCows(userGuess, numberToGuess) {
  const preparedGuess = userGuess.toString().split('');
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    const currentNumber = Number(preparedGuess[i]);

    if (numberToGuess[i] === currentNumber) {
      bulls++;
    } else if (numberToGuess.includes(currentNumber)) {
      cows++;
    }
  }

  return {
    bulls, cows,
  };
}

module.exports = { countBullsAndCows };
