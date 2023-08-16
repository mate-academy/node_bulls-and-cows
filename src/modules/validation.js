'use strict';

function makeValidation(guess) {
  if (guess.length > 4) {
    return 'Your number has more than 4 digits';
  }

  if (guess.length < 4) {
    return 'Your number has less than 4 digits';
  }

  let validGuess = true;
  const guessArray = guess.split('');

  for (let i = 0; i < guessArray.length; i++) {
    for (let j = i + 1; j < guessArray.length; j++) {
      if (guessArray[j] === guessArray[i]) {
        validGuess = false;
      }
    }
  }

  if (!validGuess) {
    return 'Please pick unique numbers';
  }

  return false;
}

module.exports.makeValidation = makeValidation;
