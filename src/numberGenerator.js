'use strict';

const numberGenerator = () => {
  const number = [];

  while (number.length < 4) {
    number.push(Math.floor(Math.random() * 10));
  }

  console.log(number.join(''));

  return number.join('');
};

numberGenerator();

module.exports = { numberGenerator };
