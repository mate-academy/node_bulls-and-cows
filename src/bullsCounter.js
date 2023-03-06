'use strict';

function bullsCounter(computerNumber, userNumber) {
  let howManyBulls = 0;

  computerNumber.split('').forEach((element, index) => {
    if (userNumber[index] === element) {
      howManyBulls = howManyBulls + 1;
    }
  });

  return howManyBulls;
};

module.exports = { bullsCounter };
