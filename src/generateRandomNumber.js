'use strict';

const generateRandomNumber = () => {
  const randomDigits = [];

  randomDigits.push(Math.floor(Math.random() * (5 - 3 + 1)) + 3);
  randomDigits.push(Math.floor(Math.random() * (7 - 6 + 1)) + 6);
  randomDigits.push(Math.floor(Math.random() * (9 - 8 + 1)) + 8);
  randomDigits.push(Math.floor(Math.random() * (2 - 0 + 1)) + 0);

  randomDigits.sort(() => Math.random() - 0.5);

  return randomDigits.join('');
};

module.exports = { generateRandomNumber };
