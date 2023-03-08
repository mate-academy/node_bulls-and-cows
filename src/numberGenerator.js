'use strict';

const numberGenerator = () => {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  let randomNumber = '';

  while (randomNumber.length !== 4) {
    const randomIndex = randomNumber.length === 0
      ? Math.floor(Math.random() * (digits.length - 1))
      : Math.floor(Math.random() * (digits.length));
    const randomDigit = digits[randomIndex];

    digits.splice(randomIndex, 1);
    randomNumber += randomDigit;
  };

  return randomNumber;
};

module.exports = {
  numberGenerator,
};
