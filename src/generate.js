'use strict';

const generate = () => {
  const numberArray = [];

  while (numberArray.length < 4) {
    const newNumber = Math.round(Math.random() * 9);

    if (numberArray.length === 0 && newNumber === 0) {
      continue;
    }

    if (!numberArray.includes(newNumber)) {
      numberArray.push(newNumber);
    }
  }

  return numberArray.join('');
};

module.exports = { generate };
