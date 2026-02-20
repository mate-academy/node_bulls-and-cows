'use strict';

function generateDigit() {
  return Math.floor(Math.random() * 9 + 1);
}

function generateRandomNumber() {
  let result = '';

  while (result.length < 4) {
    const digit = generateDigit().toString();
    
    if (!result.includes(digit)) {
      result += digit;
    }
  }

  return +result;
}

module.exports = {
  generateRandomNumber,
};
