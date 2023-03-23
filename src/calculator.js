'use strict';

const calculator = (baseNumber, userNumber) => {
  const baseArray = baseNumber.toString().split('');
  const userArray = userNumber.toString().split('');

  let bulls = 0;
  let cows = 0;

  baseArray.forEach((_, index) => {
    if (userArray[index] === baseArray[index]) {
      bulls++;
    } else if (baseArray.includes(userArray[index])) {
      cows++;
    }
  });

  return {
    bulls,
    cows,
  };
};

module.exports = {
  calculator,
};
