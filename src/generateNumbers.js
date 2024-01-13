'use strict';

function generateNumbers() {
  const numbers = [];

  while (numbers.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}

module.exports.generateNumbers = generateNumbers;
