'use strict';

function checkCorrectLength(answer) {
  return answer.length === 4;
}

function isNumbersUnique(answer) {
  const NumbersObj = {};

  for (const i of answer) {
    if (!NumbersObj[i]) {
      NumbersObj[i] = i;
    } else {
      return false;
    }

    return true;
  }
}

module.exports = {
  checkCorrectLength,
  isNumbersUnique,
};
