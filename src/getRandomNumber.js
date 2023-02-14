'use strict';

function getRandomNumber() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomNumber = '';

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * (10 - i));

    randomNumber += digits.splice(randomIndex, 1)[0];
  }

  return randomNumber;
}

exports.getRandomNumber = getRandomNumber;
