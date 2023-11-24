'use strict';

const generateNumber = () => {
  let number = '';

  while (number.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!number.includes(randomNumber)) {
      number += randomNumber;
    }
  }

  return number;
};

module.exports = generateNumber;
