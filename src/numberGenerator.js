'use strict';

const numberGenerator = () => {
  const number = [];

  while (number.length < 4) {
    const digit = Math.floor(Math.random() * 9) + 1;

    if (!number.includes(digit)) {
      number.push(digit);
    }
  }

  return number.join('');
};

module.exports.numberGenerator = numberGenerator;
