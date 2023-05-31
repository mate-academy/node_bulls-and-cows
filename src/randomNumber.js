'use strict';

const randomNumber = () => {
  const digits = [];
  let result = '';

  for (let i = 0; i < 10; i++) {
    digits.push(i);
  }

  while (result.length < 4) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const randomDigit = digits[randomIndex];

    if (!result.includes(randomDigit)) {
      result += randomDigit;
      digits.splice(randomIndex, 1);
    }
  }

  return result;
};

module.exports.randomNumber = randomNumber;
