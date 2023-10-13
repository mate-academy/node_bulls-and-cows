'use strict';

module.exports.generateNumber = function() {
  let digits = '0123456789';
  let number = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);

    number += digits[randomIndex];
    digits = digits.replace(digits[randomIndex], '');
  }

  return number;
};
