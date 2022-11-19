'use strict';

const generateNumber = () => {
  const number = [];

  while (number.length < 4) {
    const part = Math.floor(Math.random() * 10);

    if (!number.includes(part)) {
      number.push(part);
    }
  }

  return number.join('');
};

module.exports = { generateNumber };
