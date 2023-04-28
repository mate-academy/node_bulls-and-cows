'use strict';

const generateRandomNumber = () => {
  let generatedNumber = '';

  while (generatedNumber.length < 4) {
    const number = Math.floor(Math.random() * 10);

    if (!generatedNumber.includes(number.toString())) {
      generatedNumber += number;
    }
  }

  return generatedNumber;
};

module.exports = { generateRandomNumber };
