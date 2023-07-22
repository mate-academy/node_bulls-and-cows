'use strict';

function compareDigits(startValue, userValue) {
  return startValue.split('').reduce((acc, value, i) => {
    if (value === userValue[i]) {
      return { ...acc, bulls: acc.bulls + 1 };
    }

    if (startValue.includes(userValue[i])) {
      return { ...acc, cows: acc.cows + 1 };
    }

    return acc;
  }, {
    bulls: 0,
    cows: 0,
  });
}

module.exports.compareDigits = compareDigits;
