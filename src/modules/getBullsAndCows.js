'use strict';

function getBullsAndCows(computerInput, userInput) {
  const computerNumber = computerInput.toString();
  const userNumber = userInput.toString();
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (computerNumber[i] === userNumber[i]) {
      bulls++;
    } else if (computerNumber.includes(userNumber[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
