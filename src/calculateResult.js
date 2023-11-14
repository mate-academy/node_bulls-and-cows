'use strict';

const calculateResult = (answer, assumption) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (+answer[i] === +assumption[i]) {
      bulls++;
    } else if (answer.includes(assumption[i])) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
};

module.exports = {
  calculateResult,
};
