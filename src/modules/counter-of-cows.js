'use strict';

const countCows = (userInput, number) => {
  const numberStr = String(number);
  const inputStr = String(userInput);
  const count = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < 4; i++) {
    if (numberStr.includes(inputStr[i])) {
      numberStr[i] === inputStr[i] ? count.bulls++ : count.cows++;
    }
  }

  return count;
};

module.exports = countCows;
