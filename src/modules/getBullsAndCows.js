'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const res = {
    bulls: 0,
    cows: 0,
  };
  let numberToGuessCopy = numberToGuess + '';
  const userInputCopy = userInput + '';

  for (let i = 0; i < numberToGuessCopy.length; i++) {
    if (numberToGuessCopy[i] === userInputCopy[i]) {
      res.bulls += 1;
      numberToGuessCopy = numberToGuessCopy.split('');
      numberToGuessCopy[i] = '*';
      numberToGuessCopy = numberToGuessCopy.join('');
    } else if (numberToGuessCopy.includes(userInputCopy[i])) {
      res.cows += 1;
    }
  }

  return res;
}

module.exports = {
  getBullsAndCows,
};
