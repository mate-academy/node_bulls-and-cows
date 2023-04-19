'use strict';

const getRandomNumber = () => {
  let result = '';

  while (result.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (!result.includes(String(number))) {
      result += number;
    }
  }

  return result;
};

module.exports = { getRandomNumber };
