'use strict';

function getRandomNumber() {
  const digits = [];

  while (digits.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!digits.includes(randomNumber)) {
      digits.push(randomNumber);
    }
  }

  return digits.join('');
};

module.exports = getRandomNumber;
