'use strict';

const numberGenerator = () => {
  const numbersArr = [];

  while (numbersArr.length < 4) {
    const num = Math.floor(Math.random() * 10);

    if (!numbersArr.includes(num)) {
      numbersArr.push(num);
    }
  }

  return numbersArr.join('');
};

module.exports = { numberGenerator };
