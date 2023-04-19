/* eslint-disable no-console */
'use strict';

const compareNumbers = (input, randomNum) => {
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < input.length; i++) {
    const isSameIndex = input[i] === randomNum[i];

    result.bulls += isSameIndex;
    result.cows += randomNum.includes(input[i]) && !isSameIndex;
  }

  return result;
};

module.exports = { compareNumbers };
