'use strict';

function checkNumber(number) {
  const numberArr = number.toString();

  if (numberArr.length !== 4) {
    return false;
  }

  for (let i = 1; i <= numberArr.length; i++) {
    if (numberArr[i] === numberArr[i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports.checkNumber = checkNumber;
