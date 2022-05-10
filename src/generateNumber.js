'use strict';

function generateNumber() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const firstNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let number = `${firstNumber}`;

  numbers.push(0);

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);

    number += numbers[randomIndex];
    numbers.splice(randomIndex, 1);
  }

  return number;
}

module.exports.generateNumber = generateNumber;
