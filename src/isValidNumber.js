'use strict';

function isValidNumber(num, numLenght) {
  if (num.length !== numLenght) {
    return false;
  }

  for (let i = 0; i < numLenght; i++) {
    if (i !== num.lastIndexOf(num[i])
    || !'123456789'.includes(num[i])) {
      return false;
    }
  }

  return true;
}

module.exports = { isValidNumber };
