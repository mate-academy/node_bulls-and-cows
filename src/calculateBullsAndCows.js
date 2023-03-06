'use strict';

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

  if (bulls > 1 && cows > 1) {
  // eslint-disable-next-line no-console
    console.log(`${bulls} bulls and ${cows} cows`);
  }

  if (bulls <= 1 && cows <= 1) {
    // eslint-disable-next-line no-console
    console.log(`${bulls} bull and ${cows} cow`);
  }

  if (bulls > 1 && cows <= 1) {
    // eslint-disable-next-line no-console
    console.log(`${bulls} bulls and ${cows} cow`);
  }

  if (bulls <= 1 && cows > 1) {
    // eslint-disable-next-line no-console
    console.log(`${bulls} bull and ${cows} cows`);
  }
}

module.exports = {
  calculateBullsAndCows,
};
