'use strict';

const { IscalculatingRight } = require('./IscalculatingRight');

const calc = (userInput, digits) => {
  const currentNumber = digits;
  const params = IscalculatingRight(userInput);

  if (params) {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < currentNumber.length; i++) {
      if (currentNumber[i] === +params[i]) {
        bulls++;
      } else if (currentNumber.includes(+params[i])) {
        cows++;
      }
    }

    return [bulls, cows];
  }
};

module.exports.calc = calc;
