'use strict';

const calculate = (computerNumber, userNumber) => {
  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < 4; i++) {
    if (computerNumber[i] === userNumber[i]) {
      result.bulls++;
    }

    if (computerNumber[i] !== userNumber[i]
      && computerNumber.includes(userNumber[i])) {
      result.cows++;
    }
  }

  return result;
};

module.exports = {
  calculate,
};
