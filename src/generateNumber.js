'use strict';

const presentDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let nextDigitIndex = Math.round(Math.random() * 8 + 1);
let targetNum = presentDigits.splice(nextDigitIndex, 1);

function getNumberByIndex() {
  nextDigitIndex = Math.round(Math.random() * presentDigits.length - 1);

  return presentDigits.splice(nextDigitIndex, 1);
}

function generateNumber() {
  while (targetNum.length < 4) {
    targetNum += getNumberByIndex();
  }

  return targetNum;
};

module.exports = { generateNumber };
