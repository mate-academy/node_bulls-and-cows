'use strict';

function generateRandomNumber() {
  const digits = [...Array(10).keys()];
  let number = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const digit = digits[randomIndex]; //

    digits.splice(randomIndex, 1); //

    number += digit.toString(); //
  }

  return number;
}

module.exports = { generateRandomNumber };
