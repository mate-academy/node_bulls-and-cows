'use strict';

function generate() {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  digits = digits.sort(function() {
    return 0.5 - Math.random();
  });

  const randomNumber = digits.slice(0, 4).join('');

  return randomNumber;
}

module.exports = { generate };
