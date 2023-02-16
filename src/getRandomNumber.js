'use strict';

const getRandomNumber = () => {
  let randomNumber = '';
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  while (randomNumber.length < 4) {
    const randomIndex = Math.floor(Math.random() * numbers.length);

    randomNumber += numbers[randomIndex];

    numbers.splice(randomIndex, 1);
  }

  return randomNumber;
};

module.exports = {
  getRandomNumber,
};
