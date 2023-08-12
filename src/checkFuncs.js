'use strict';

function isNumber(number) {
  return typeof number === 'number' && !Number.isNaN(number);
}

function isFourDigitNumber(number) {
  return number >= 1000 && number <= 9999;
}

function isUniqeNumbers(inputNumber) {
  const inputLength = inputNumber.toString().split('')
    .filter((number, index) => inputNumber.indexOf(number) === index);

    return inputLength.length === inputNumber.length;
}


module.exports = {
  isNumber, isFourDigitNumber, isUniqeNumbers,
};
