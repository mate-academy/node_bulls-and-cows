'use strict';

function generateNum() {
  const numbers = [];

  while (numbers.length < 4) {
    const randomNumber = Math.floor(Math.random() * 9 + 1);

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber.toString());
    }
  }

  return numbers;
}

module.exports = {
  generateNum,
};
