'use strict';

const generateNumber = () => {
  let result = '';

  while (result.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (!result.includes(number)) {
      result += number.toString();
    }
  }

  return result;
};

exports.generateNumber = generateNumber;
