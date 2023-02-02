'use strict';

function generateNumber() {
  const number = [];

  for (let i = 1; i <= 4; i++) {
    let num = getRandomNumber();

    while (number.includes(num)) {
      num = getRandomNumber();
    }

    number.push(num);
  }

  return number.join('');
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

module.exports.generateNumber = generateNumber;
