'use strict';

const numberGenerator = () => {
  const randomNumber = [];

  while (randomNumber.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10);

    if (!randomNumber.includes(randomDigit)) {
      randomNumber.push(randomDigit);
    }
  }

  return randomNumber.join('');
};

module.exports = { numberGenerator };
