'use strict';

function createRandomDigits() {
  let result = '';

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  while (result.length < 4) {
    const randomIndex = +Math.floor(Math.random() * digits.length);

    result += digits.splice(+digits[randomIndex], 1);
  }

  return result;
};

module.exports.createRandomDigits = createRandomDigits;
