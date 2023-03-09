'use strict';

const generateNumber = () => {
  let result = '';

  while (result.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!result.includes(randomNumber)) {
      result += randomNumber;
    }
  }

  return result;
};

module.exports = { generateNumber };
