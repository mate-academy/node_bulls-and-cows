'use strict';

const randomNumber = () => {
  let num = '';
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * digits.length);

    num += digits.splice(index, 1);
  }

  return num;
};

module.exports.randomNumber = randomNumber;
