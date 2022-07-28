'use strict';

const { randomNumber } = require('./randomNumber');

const counters = {
  cowCount: 0,
  bullCount: 0,
};

const animalCounter = (userNum) => {
  const userNumArr = userNum.split('');
  const randomNumArr = randomNumber.toString().split('');

  randomNumArr.forEach((el, i) => {
    if (el === userNumArr[i]) {
      counters.bullCount++;
    }

    if (userNumArr.includes(el)) {
      counters.cowCount++;
    }
  });

  return { ...counters };
};

module.exports = { animalCounter };
