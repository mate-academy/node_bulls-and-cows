'use strict';

const generateRandomNumber = () => {
  const result = [];

  while (result.length < 4) {
    const randomNum = Math.floor(Math.random() * 10);

    if (!result.includes(randomNum)) {
      result.push(randomNum);
    }
  }

  return Number(result.join(''));
};

module.exports.generateRandomNumber = generateRandomNumber;
