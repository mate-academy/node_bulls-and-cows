'use strict';

function generateRandomNums(numberOfDigits) {
  let num = '';

  while (num.length !== +numberOfDigits) {
    const randomNum = Math.trunc(Math.random() * 10);

    if (!num.includes(randomNum)) {
      num += randomNum;
    }
  }

  return num;
}

module.exports = {
  generateRandomNums,
};
