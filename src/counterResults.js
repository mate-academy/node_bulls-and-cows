'use strict';

const { getValueInput } = require('./getValueInput.js');

function counterResults(userInput, randomNumbe) {
  const result = {
    cows: 0,
    bulls: 0,
  };

  const validatedNumber = getValueInput(userInput);

  for (let i = 0; i < validatedNumber.length; i++) {
    const isEqualNumber = validatedNumber[i] === randomNumbe[i];
    const isIncludeNumber = randomNumbe.includes(validatedNumber[i]);

    if (isEqualNumber) {
      result.cows++;
    } else if (isIncludeNumber) {
      result.bulls++;
    }
  }

  return `result is:
    COWS - ${result.cows} ||| BULLS - ${result.bulls}`;
};

counterResults('4444', '4244');
module.exports = { counterResults };
