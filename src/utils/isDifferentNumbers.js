'use strict';

function isDifferentNumbers(number) {
  const obj = {};

  for (const num of number) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = {
  isDifferentNumbers,
};
