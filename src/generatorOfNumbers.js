'use strict';

const generateRandomNumber = () => {
  let result = '';

  while (result.length < 4) {
    const randomNum = Math.floor(Math.random() * 10);

    if (!result.includes(randomNum)) {
      result += randomNum;
    }
  }

  return result;
};

module.exports.generateRandomNumber = generateRandomNumber;
