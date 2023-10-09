'use strict';

function generateFixedSizeNumber(length) {
  let numberArray = [];

  while (numberArray.length < length) {
    const randomdigit = Math.floor(Math.random() * 10);

    if (!numberArray.includes(randomdigit)) {
      numberArray.push(randomdigit);
    }
  }

  return Number(numberArray.join(''));
}

module.exports = {
  generateFixedSizeNumber,
};
