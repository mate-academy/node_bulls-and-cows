'use strict';

function getResponse(guess, number) {
  if (Number(guess) === Number(number)) {
    return 'MATCH';
  }

  const guessArr = guess.toString().split('');
  const numberArr = number.toString().split('');
  const result = [];

  for (let i = 0; i < guessArr.length; i++) {
    if (guessArr[i] === numberArr[i]) {
      result.push('bull');
      continue;
    }

    if (numberArr.includes(guessArr[i])) {
      result.push('cow');
      continue;
    }
  }

  return result.join(' ');
}

module.exports = {
  getResponse,
};
