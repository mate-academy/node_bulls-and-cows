'use strict';

function checkNumber(num) {
  const isNumber = !isNaN(num);
  const isLengthCorrect = num.length === 4;
  const areDigitsDifferent = new Set(num).size === num.length;

  return isNumber && isLengthCorrect && areDigitsDifferent;
};

exports.checkNumber = checkNumber;
