'use strict';

const { getValueInput } = require('./getValueInput.js');

function counterResults(input, random) {
  const result = {
    cows: 0,
    buls: 0,
  };

  const validatedNumber = getValueInput(input);

  for (let i = 0; i < validatedNumber.length; i++) {
    const isEqualNumber = validatedNumber[i] === random[i];
    const isIncludeNumber = random.includes(validatedNumber[i]);

    if (isEqualNumber) {
      result.cows++;
    } else if (isIncludeNumber) {
      result.buls++;
    }
  }

  return `result is:
    COWS - ${result.cows} ||| BULLS - ${result.buls}`;
};

counterResults('4444', '4244');
module.exports = { counterResults };
