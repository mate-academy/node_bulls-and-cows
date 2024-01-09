'use strict';

const getRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 10000).toString();

  while (randomNumber.length < 4) {
    randomNumber = '0' + randomNumber;
  }

  return randomNumber;
};

module.exports = {
  getRandomNumber,
};
