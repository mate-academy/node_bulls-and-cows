'use strict';

const getRandomDigits = () => {
  const numbers = [];

  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    } else {
      i--;
    }
  }

  return numbers.join('');
};

module.exports = { getRandomDigits };
