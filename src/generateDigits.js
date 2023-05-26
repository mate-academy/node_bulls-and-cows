'use strict';

const generateDigits = () => {
  let result = '';
  let randNum = -1;

  for (let i = 0; i < 4; i++) {
    do {
      randNum = Math.floor(Math.random() * 10);
    } while (result.includes(randNum));

    result += randNum;
  }

  return result;
};

module.exports.generateDigits = generateDigits;
