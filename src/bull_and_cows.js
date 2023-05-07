'use strict';
/* eslint-disable no-console */

const { generateNumber } = require('./randomNumber');

const bullAndCows = (userNum) => {
  const counters = {
    cowCount: 0,
    bullCount: 0,
  };
  const userNumArr = userNum.split('');
  const randomNumArr = generateNumber.split('');

  console.log(randomNumArr);

  const tempArr = [...userNum];

  randomNumArr.forEach((el, i) => {
    if (el === tempArr[i]) {
      counters.bullCount++;
    }

    if (userNumArr.includes(el)) {
      counters.cowCount++;
    }
  });

  return { ...counters };
};

module.exports = { bullAndCows };
