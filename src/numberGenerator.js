'use strict';

function generateNumber() {
  const uniqueNumbers = [];

  for (let i = 1; i <= 4; i++) {
    let number = getRandomNumber();

    while (uniqueNumbers.includes(number)) {
      number = getRandomNumber();
    }

    uniqueNumbers.push(number);
  }

  return uniqueNumbers.join('');
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

module.exports.generateNumber = generateNumber;
