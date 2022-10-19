'use strict';

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  const uniqueNumber = new Set(randomNumber.toString().split(''));

  if (uniqueNumber.size === 4) {
    return randomNumber;
  }

  return getRandomNumber();
};

const randomNumberOfFour = getRandomNumber();

module.exports = randomNumberOfFour.toString();
