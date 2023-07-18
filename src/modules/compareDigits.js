'use strict';

function compareDigits(startValue, userValue) {
  let bulls = 0;
  let cows = 0;

  if (startValue === userValue) {
    return { bulls: 4, cows };
  }

  for (let i = 0; i < startValue.length; i++) {
    if (userValue[i] === startValue[i]) {
      bulls++;
    } else if (startValue.includes(userValue[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

module.exports.compareDigits = compareDigits;
