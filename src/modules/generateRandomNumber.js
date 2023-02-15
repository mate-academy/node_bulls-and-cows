'use strict';

const generateRandomNumber = () => {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let randomNumber = '';

  for (let i = 0; i < 4; i++) {
    const numsIndex = Math.floor(Math.random() * nums.length);

    randomNumber += nums.splice(numsIndex, 1);
  }

  return randomNumber;
};

module.exports.generateRandomNumber = generateRandomNumber;
