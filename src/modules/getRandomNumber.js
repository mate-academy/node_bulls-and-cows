'use strict';

function getRandomNumber() {
  const arrayOfNumbers = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

  let randomNumber = '';

  for (let i = 1; i <= 4; i++) {
    let randomIndex = Math.floor(Math.random() * arrayOfNumbers.length);

    if (i === 1) {
      while (randomIndex === 0) {
        randomIndex = Math.floor(Math.random() * arrayOfNumbers.length);
      }
    }

    randomNumber += arrayOfNumbers[randomIndex];
    arrayOfNumbers.splice(randomIndex, 1);
  };

  return randomNumber;
};

module.exports.getRandomNumber = getRandomNumber;
