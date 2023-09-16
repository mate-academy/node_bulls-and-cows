'use strict';

const getBullsAndCows = (randomNumber, guessNumber) => {
  let bulls = 0;
  let cows = 0;
  let result = false;

  for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] === guessNumber[i]) {
      bulls++;
    } else if (randomNumber.includes(guessNumber[i])) {
      cows++;
    }
  }

  if (bulls === 4) {
    result = true;
  }

  return {
    result: result,
    message: result
      ? 'You won! Congratulations!'
      : `${bulls} bulls, ${cows} cows`,
  };
};

module.exports = { getBullsAndCows };
