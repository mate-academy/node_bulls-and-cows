'use strict';

const { getBullsAndCowsString } = require('./getBullsAndCowsString');

function calculateBullsAndCows(randomInput, userInput) {
  let bulls = 0;
  let cows = 0;

  const randomNumber = randomInput.toString();
  const userNumber = userInput.toString();

  for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] === userNumber[i]) {
      bulls++;
    } else if (randomNumber.includes(userNumber[i])) {
      cows++;
    }
  }

  // eslint-disable-next-line no-console
  console.log(getBullsAndCowsString(bulls, cows));
}

module.exports = {
  calculateBullsAndCows,
};
