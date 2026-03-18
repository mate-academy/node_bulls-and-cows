'use strict';

function generateRandomNumber() {
  const numbers = [];

  numbers.push(Math.floor(Math.random() * 9) + 1);

  while (numbers.length < 4) {
    const newNumber = Math.floor(Math.random() * 10);

    if (!numbers.includes(newNumber)) {
      numbers.push(newNumber);
    }
  }

  const randomNumber = Number(numbers.join(''));

  return randomNumber;
}

module.exports = {
  generateRandomNumber,
};
