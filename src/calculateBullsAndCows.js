'use strict';

function calculateBullsAndCows(inputNumber, userNumber) {
  const targetNumber = inputNumber.toString();
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userNumber.length; i++) {
    if (userNumber[i] === targetNumber[i]) {
      bulls += 1;
    }

    if (userNumber[i] !== targetNumber[i]
      && targetNumber.includes(userNumber[i])) {
      cows += 1;
    }
  }

  return `There are ${bulls} bulls and ${cows} cows. Try again`;
}

module.exports = calculateBullsAndCows;
