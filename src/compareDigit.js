'use strict';

const compareDigit = function(randomDigits, enteredDigits) {
  const enteredDigitsArr = enteredDigits.split('');
  const compareResult = {
    bull: 0,
    cow: 0,
  };

  enteredDigitsArr.forEach((element, index) => {
    const digit = Number(element);

    if (digit === randomDigits[index]) {
      compareResult.bull++;
    } else if (randomDigits.includes(digit)) {
      compareResult.cow++;
    }
  });

  return compareResult;
};

module.exports = {
  compareDigit,
};
