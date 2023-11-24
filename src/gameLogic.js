/* eslint-disable no-console */
'use strict';

function getBullsAndCows(userNumber, randomNumber) {
  if (userNumber.length !== 4 || isNaN(+userNumber)) {
    console.log('Invalid number. Please enter number of 4 different digits');

    return false;
  }

  if (userNumber[0] === '0') {
    console.log('Invalid number. A four-digit number cannot start with 0');

    return false;
  }

  if (new Set(userNumber).size !== 4) {
    console.log('Invalid number. The number must consist of unique digits');

    return false;
  }

  const result = {
    bull: 0,
    cow: 0,
  };

  randomNumber.split('').forEach((num, i) => {
    if (num === userNumber[i]) {
      result.bull++;
    }

    if (userNumber.includes(num) && num !== userNumber[i]) {
      result.cow++;
    }
  });

  return result;
}

module.exports = getBullsAndCows;
