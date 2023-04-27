'use strict';

const numberGenerator = () => {
  const number = [];

  while (number.length < 4) {
    const digit = Math.floor(Math.random() * 9);

    if (!number.includes(digit)) {
      number.push(digit);
    }
  }

  if (number[0] === 0) {
    number[0] = 1;
  };

  return number.join('');
};

module.exports = { numberGenerator };
