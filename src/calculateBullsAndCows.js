'use strict';

const calculateBullsAndCows = (randomNumber, guessNumber) => {
  const randomNumberString = randomNumber.tostring();
  const guessNumberString = guessNumber.toString();

  let cows = 0;
  let bulls = 0;

  for (let i = 0; i < randomNumberString; i++) {
    if (randomNumberString[i] === guessNumberString[i]) {
      bulls++;
    } else if (randomNumberString.includes(guessNumberString[i])) {
      cows++;
    }
  }
  // eslint-disable-next-line no-console
  console.log(`${bulls} bulls and ${cows} cows`);
};

module.exports = {
  calculateBullsAndCows,
};
