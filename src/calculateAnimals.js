'use strict';

const calculateAnimals = (generatedNumber, userNumber) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < generatedNumber.length; i++) {
    if (generatedNumber[i] === userNumber[i]) {
      bulls++;
    } else if (generatedNumber.includes(userNumber[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
};

module.exports = { calculateAnimals };
