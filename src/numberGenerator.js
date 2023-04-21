'use strict';

const numberGenerator = () => {
  const number = [];

  while (number.length < 4) {
    number.push(
      Math.floor(Math.random() * 5) || 1
    );
  }

  return number.join('');
};

module.exports.numberGenerator = numberGenerator;
