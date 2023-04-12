/* eslint-disable no-console */
'use strict';

const compareNumbers = (input, randomNum) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < input.length; i++) {
    const isSameIndex = input[i] === randomNum[i];

    if (isSameIndex) {
      bulls++;
    }

    if (randomNum.includes(input[i]) && !isSameIndex) {
      cows++;
    }
  }

  if (bulls < 4) {
    console.log(
      `Bulls: ${bulls}, cows: ${cows}. Try again!`
    );
  }
};

module.exports = { compareNumbers };
