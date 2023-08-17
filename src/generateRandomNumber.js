'use strict';

const generateRandomNumber = () => {
  const randomDigits = [];

  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;

    randomDigits.push(randomNumber);
  }

  randomDigits.sort(() => Math.random() - 0.5);

  return randomDigits.join('');
};

module.exports = { generateRandomNumber };
