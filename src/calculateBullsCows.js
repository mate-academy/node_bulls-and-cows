'use strict';

const calculateBullsCows = (randomNumber, userNum) => {
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] === userNum[i]) {
      result.bulls++;
    } else if (randomNumber.includes(userNum[i])) {
      result.cows++;
    }
  }

  return result;
};

module.exports = { calculateBullsCows };
