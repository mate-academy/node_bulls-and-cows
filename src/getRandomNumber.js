'use strict';

function getRandomNumber() {
  let result = '';

  while (result.length !== 4) {
    const value = Math.floor(Math.random() * 9) + 1;

    if (!result.includes(value)) {
      result += value;
    }
  }

  return result;
}

const randomNumber = getRandomNumber();

module.exports = { randomNumber };
