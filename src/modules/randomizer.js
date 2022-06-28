'use strict';

const digitsCount = 3;
const minValue = 0;
const maxValue = 9;

function getNumberOfFourDiffDigits() {
  let temp = '';

  while (temp.length <= digitsCount) {
    const num = Math.round(Math.random() * (maxValue - minValue) + minValue);

    if (!temp.includes(String(num))) {
      temp += num;
    }
  }

  return temp;
}

module.exports = {
  getNumberOfFourDiffDigits,
};
