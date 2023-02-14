'use strict';

const isValidNumber = (number) => {
  if (number.length !== 4 || isNaN(Number(number))) {
    return false;
  }

  const numberForValidation = number.split('');

  for (let i = 0; i < numberForValidation.length; i++) {
    for (let k = 0; k < numberForValidation.length; k++) {
      let count = 0;

      if (numberForValidation[i] === numberForValidation[k]) {
        count++;
      }

      if (count > 1) {
        return false;
      }
    }
  }

  return true;
};

module.exports = { isValidNumber };
