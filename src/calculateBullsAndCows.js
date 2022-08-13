'use strict';

function calculateBullsAndCows(number, userNumber) {
  const targetNumberArr = number.toString();
  const userNumberArr = userNumber.toString();
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userNumberArr.length; i++) {
    if (userNumberArr[i] === targetNumberArr[i]) {
      bulls += 1;
    }

    if (userNumberArr[i] !== targetNumberArr[i]
      && targetNumberArr.includes(userNumberArr[i])) {
      cows += 1;
    }
  }

  return `There is a ${bulls} bulls and ${cows} cows. Try again`;
}

module.exports.calculateBullsAndCows = calculateBullsAndCows;
