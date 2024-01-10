'use strict';

const getRandomNumber = () => {
  let randomNumber = '';

  while (randomNumber.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10).toString();

    if (!randomNumber.includes(randomDigit)) {
      randomNumber += randomDigit;
    }
  }

  return randomNumber;
};

module.exports = {
  getRandomNumber,
};
