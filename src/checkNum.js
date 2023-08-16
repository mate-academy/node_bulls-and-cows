'use strict';

function checkedNumbers(randomNumber, inputNumber) {
  const resultArr = [];

  for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber.includes(inputNumber[i])) {
      if (randomNumber[i] === inputNumber[i]) {
        resultArr.push('bull');
      } else {
        resultArr.push('cow');
      }
    } else {
      resultArr.push('-');
    }
  }

  return resultArr;
};

module.exports = { checkedNumbers };
