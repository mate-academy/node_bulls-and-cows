'use strict';

const generateNumber = () => {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  digits.sort(() => {
    return 0.5 - Math.random();
  });

  const uniqueFourDigitNumber = digits.slice(0, 4).join('');

  return uniqueFourDigitNumber;
};

module.exports = {
  generateNumber,
};
