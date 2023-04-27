'use strict';

function checkCattle(number, guess) {
  return guess.split('').reduce((res, digit, i) => {
    if (number[i] === digit) {
      return [...res, 'Bull'];
    }

    if (number.includes(digit)) {
      return [...res, 'Cow'];
    }

    return res;
  }, []);
}

module.exports = checkCattle;
