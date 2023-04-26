'use strict';

function compareNumbers(userNumber, randomNumber) {
  const bullsAndCows = {
    bull: 0,
    cow: 0,
  };

  for (let i = 0; i < userNumber.length; i++) {
    const isRightDigit = userNumber[i] === randomNumber[i];

    if (isRightDigit) {
      bullsAndCows.bull += 1;
    } else if (randomNumber.includes(userNumber[i])) {
      bullsAndCows.cow += 1;
    }
  }

  return bullsAndCows;
}

module.exports = { compareNumbers };
