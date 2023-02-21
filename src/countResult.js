'use strict';

const countResult = (secretNumber, userInput) => {
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < 4; i++) {
    if (userInput[i] === secretNumber[i]) {
      result.bulls++;
    } else if (secretNumber.includes(userInput[i])) {
      result.cows++;
    }
  }

  return result;
};

module.exports = { countResult };
