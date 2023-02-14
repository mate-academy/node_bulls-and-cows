'use strict';

function checkNumber(num) {
  if (num.length !== 4) {
    return false;
  }

  for (let i = 0; i < num.length - 1; i++) {
    const isDigit = !isNaN(num[i]);
    const isDubpicate = num.slice(i + 1).includes(num[i]);

    if (!isDigit || isDubpicate) {
      return false;
    }
  }

  return true;
};

exports.checkNumber = checkNumber;
