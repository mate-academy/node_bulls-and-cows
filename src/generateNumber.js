'use strict';

const generateNumber = () => {
  let randomNum = '';

  while (randomNum.length < 4) {
    const newNumber = Math.round(Math.random() * 9).toString();

    if (!randomNum.includes(newNumber)) {
      randomNum += newNumber;
    }
  }

  return randomNum;
};

module.exports = { generateNumber };
