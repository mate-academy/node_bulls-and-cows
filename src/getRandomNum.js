'use strict';

function getRandomNum(length = 4) {
  let randomNum = (Math.random() * 10 ** length).toFixed();
  const uniqueDigits = new Set(randomNum.toString());

  if (uniqueDigits.size !== 4) {
    randomNum = getRandomNum();
  }

  return randomNum;
}

module.exports = { getRandomNum };
