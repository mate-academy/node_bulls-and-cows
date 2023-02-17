'use strict';

function countBullsAndCows(targetNumber, usersNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < usersNumber.length; i++) {
    if (targetNumber[i] === usersNumber[i]) {
      bulls++;

      continue;
    }

    if (targetNumber.includes(usersNumber[i])) {
      cows++;
    }
  }

  return `Result: bulls - ${bulls}, cows - ${cows}`;
};

module.exports.countBullsAndCows = countBullsAndCows;
