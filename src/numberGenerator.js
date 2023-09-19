'use strict';

const numberLength = 4;
const toInteger = 10;

const numberGenerator = () => {
  const numbersArr = [];

  while (numbersArr.length < numberLength) {
    const num = Math.floor(Math.random() * toInteger);

    if (!numbersArr.includes(num)) {
      numbersArr.push(num);
    }
  }

  return numbersArr.join('');
};

module.exports = { numberGenerator };
