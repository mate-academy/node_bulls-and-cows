'use strict';

function getRandomNumber() {
  let result = '';

  for (let i = 0; result.length !== 4; i++) {
    const value = Math.floor(Math.random() * 9) + 1;

    if (!result.includes(value)) {
      result += value;
    }
  }

  return result;
}

const randomNumber = getRandomNumber();

module.exports = { randomNumber };
