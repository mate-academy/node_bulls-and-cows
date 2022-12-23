'use strict';

function countBullsAndCows(targetNumber, userNumber) {
  const targetArray = `${targetNumber}`.split('');
  const userArray = `${userNumber}`.split('');
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < userArray.length; i += 1) {
    if (userArray[i] === targetArray[i]) {
      bulls += 1;
    } else {
      if (targetArray.includes(userArray[i])) {
        cows += 1;
      }
    }
  }

  return `There is a ${bulls} bulls and ${cows} cows`;
}

module.exports = { countBullsAndCows };
