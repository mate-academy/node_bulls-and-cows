'use strict';

const isValidNumber = (number) => {
  if (number.length !== 4 || isNaN(Number(number))) {
    return false;
  }

  const numberForValifation = number.split('');

  for (let i = 0; i < numberForValifation.length; i++) {
    for (let k = 0; i < numberForValifation.length; k++) {
      let count = 0;

      if (numberForValifation[i] === numberForValifation[k]) {
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
