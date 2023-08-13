'use strict';

function generateRandomNumber() {
  const numbers = [];

  while (numbers.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers.join('');
}

module.exports = {
  generateRandomNumber,
};
