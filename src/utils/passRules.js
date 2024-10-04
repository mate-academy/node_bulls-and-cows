'use strict';

const { hasUniqDigits } = require('./hasUniqDigits');

function passRules(num) {
  const userInputStr = String(num);

  if (
    userInputStr.length !== 4 ||
    !hasUniqDigits(userInputStr) ||
    userInputStr[0] === '0' ||
    isNaN(userInputStr)
  ) {
    return false;
  }

  return true;
}

module.exports = {
  passRules,
};
