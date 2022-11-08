'use strict';

const calc = (num, n) => {
  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === n[i]) {
      bulls++;
    } else {
      if (n.includes(num[i])) {
        cows++;
      }
      continue;
    }
  }

  return [cows, bulls];
};

module.exports = calc;
